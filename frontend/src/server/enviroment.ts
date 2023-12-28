import { ValueHandler } from "@ihaz/js-ui-utils";
import dictionary from "@app/i18n/en-us.json";

namespace ServerEnviroment {
  let _Server_Language_: ValueHandler<string | null>;
  let _i18n_obj_: ValueHandler<typeof dictionary | null>;

  export const getServerLanguage = () => _Server_Language_;

  export const getI18nObj = () => _i18n_obj_;

  const initEnviroment = () => {
    console.log("init enviroment");
    _Server_Language_ = new ValueHandler<string | null>(null);
    _i18n_obj_ = new ValueHandler<typeof dictionary | null>(null);
  };

  initEnviroment();
}

export default ServerEnviroment;
