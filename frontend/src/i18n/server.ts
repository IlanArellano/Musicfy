import CommonObject from "@app/common/object";
import ServerEnviroment from "@app/server/enviroment";
import { getServerLanguage, rejectClient } from "@app/server/utils";

const I18N_DICTIONARY = {
  en_us: () => import("@app/i18n/en-us.json").then((module) => module.default),
  es_mx: () => import("@app/i18n/es-mx.json").then((module) => module.default),
};

export const initUserLanguage = async (): Promise<void> => {
  rejectClient();
  const serverLang = ServerEnviroment.getServerLanguage();
  const i18nObj = ServerEnviroment.getI18nObj();
  if (serverLang.get() && i18nObj.get()) return;
  let lang = getServerLanguage();
  if (!lang) throw new Error("There's something wrong about language config");
  if (lang.includes(".")) lang = lang.split(".")[0];
  lang = lang.toLowerCase();

  serverLang.set(lang);

  const getJson = I18N_DICTIONARY[lang as keyof typeof I18N_DICTIONARY];
  if (!getJson) i18nObj.set(await I18N_DICTIONARY.en_us());
  else i18nObj.set(await getJson());
};

export const t = (path: string, type: string = "pages"): string | undefined => {
  rejectClient();
  const i18nObj = ServerEnviroment.getI18nObj();
  const dictionary = i18nObj.get()!;
  return CommonObject.getValueByRoute(dictionary, `${type}.${path}`);
};
