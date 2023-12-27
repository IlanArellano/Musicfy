import { LanguageResponse } from "@app/globalTypes/api/language";
import { getServerLanguage } from "@app/server/utils";
import { NextResponse } from "next/server";

export async function GET() {
  const lang = getServerLanguage() ?? "";
  NextResponse.json<LanguageResponse>({ lang });
}
