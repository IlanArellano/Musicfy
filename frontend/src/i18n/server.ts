import CommonObject from "@app/common/object";
import { I18N_OBJ, SERVER_LANGUAGE } from "@app/server/enviroment";
import { getServerLanguage, rejectClient } from "@app/server/utils";

const I18N_DICTIONARY = {
  en_us: () => import("@app/i18n/en-us.json").then((module) => module.default),
  es_mx: () => import("@app/i18n/es-mx.json").then((module) => module.default),
};

export const initUserLanguage = async (): Promise<void> => {
  rejectClient();
  if (SERVER_LANGUAGE.get() && I18N_OBJ.get()) return;
  let lang = getServerLanguage();
  if (!lang) throw new Error("There's something wrong about language config");
  if (lang.includes(".")) lang = lang.split(".")[0];
  lang = lang.toLowerCase();

  SERVER_LANGUAGE.set(lang);

  const getJson = I18N_DICTIONARY[lang as keyof typeof I18N_DICTIONARY];
  if (!getJson) I18N_OBJ.set(await I18N_DICTIONARY.en_us());
  else I18N_OBJ.set(await getJson());
};

export const t = (path: string, type: string = "pages"): string | undefined => {
  rejectClient();
  const dictionary = I18N_OBJ.get()!;
  return CommonObject.getValueByRoute(dictionary, `${type}.${path}`);
};
