"use client";

import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

// Importing altcha package will introduce a new element <altcha-widget>
//import "altcha";

interface AltchaProps {
  onStateChange?: (ev: Event | CustomEvent) => void;
}

const Altcha = forwardRef<{ value: string | null }, AltchaProps>(
  ({ onStateChange }, ref) => {
    const widgetRef = useRef<HTMLElement>(null);
    const [value, setValue] = useState<string | null>(null);

    useImperativeHandle(ref, () => {
      return {
        get value() {
          return value;
        },
      };
    }, [value]);

    useEffect(() => {
      const handleStateChange = (ev: Event | CustomEvent) => {
        if ("detail" in ev) {
          setValue(ev.detail.payload || null);
          onStateChange?.(ev);
        }
      };

      const { current } = widgetRef;

      if (current) {
        current.addEventListener("statechange", handleStateChange);
        return () =>
          current.removeEventListener("statechange", handleStateChange);
      }

      // import altcha package
      import("altcha").then(() => {
        const widget = document.querySelector("altcha-widget");
        if (widget) {
          // @ts-expect-error - altcha-widget is a custom element
          widgetRef.current = widget;
        }
      });
    }, [onStateChange]);

    /* Configure your `challengeurl` and remove the `test` attribute, see docs: https://altcha.org/docs/website-integration/#using-altcha-widget  */
    return (
      <altcha-widget
        debug
        challengeurl={`/api/captcha/challenge`}
      ></altcha-widget>
    );
  }
);

Altcha.displayName = "Altcha";

export default Altcha;
