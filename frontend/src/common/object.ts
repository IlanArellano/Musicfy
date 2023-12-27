import { toPath } from "./lodash";

namespace CommonObject {
  export const getValueByRoute = <T extends { [key: string]: any }>(
    obj: T,
    route: string
  ): any => {
    let p = 0;
    const path = toPath(route);
    while (obj && p < path.length) {
      obj = obj[path[p++]];
    }

    if (p !== path.length && !obj) return undefined;

    return obj;
  };
}

export default CommonObject;
