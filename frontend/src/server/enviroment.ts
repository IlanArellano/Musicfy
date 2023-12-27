import { ValueHandler } from "@ihaz/js-ui-utils";
import dictionary from "@app/i18n/en-us.json";

export const SERVER_LANGUAGE = new ValueHandler<string | null>(null);

export const I18N_OBJ = new ValueHandler<typeof dictionary | null>(null);
