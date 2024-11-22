import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const htmlToTailwind = (text: string): string => {
  return text
    .replaceAll("<p>", '<p class="text-base mb-4">')
    .replaceAll("<h2>", '<h2 class="text-2xl font-bold mt-10">')
    .replaceAll("<h3>", '<h3 class="text-xl font-bold mt-8">')
    .replaceAll("<h4>", '<h4 class="text-lg font-bold mt-6">')
    .replaceAll("<h5>", '<h5 class="text-base font-bold mt-4">')
    .replaceAll("<h6>", '<h6 class="text-sm font-bold mt-2">')
    .replaceAll("<ul>", '<ul class="list-disc list-inside">')
    .replaceAll("<ol>", '<ol class="list-decimal list-inside">')
    .replaceAll("<li>", '<li class="text-base">')
    .replaceAll("<a ", '<a class="text-blue-500 underline" ')
    .replaceAll("<blockquote>", '<blockquote class="border-l-4 pl-4">')
    .replaceAll("<code>", '<code class="bg-gray-100 p-1 rounded">')
    .replaceAll("<pre>", '<pre class="bg-gray-100 p-4 rounded">')
    .replaceAll("<table>", '<table class="table-auto w-full">')
    .replaceAll("<th>", '<th class="border-b">')
    .replaceAll("<td>", '<td class="border-b">')
    .replaceAll("<img ", '<img class="w-full h-auto rounded-lg" ');
};
