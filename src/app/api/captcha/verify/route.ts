import { verifySolution } from "altcha-lib";
import { type Payload } from "altcha-lib/types";
import { NextResponse } from "next/server";

type RequestDataType = {
  payload: string | Payload;
};

export type VerifyCaptchaApiResponse = {
  ok: boolean;
};

export async function POST(req: Request) {
  const data = (await req.json()) as RequestDataType;

  const ok = await verifySolution(
    data.payload,
    process.env.ALTCHA_SECRET as string,
  );

  return NextResponse.json({
    ok,
  });
}
