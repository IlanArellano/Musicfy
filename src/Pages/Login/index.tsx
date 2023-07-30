import { VIEW_CONTEXT } from "../../constants/context";
import { viewManager } from "../../ui/view";

function Login() {
  return <article></article>;
}

export default viewManager.createViewContextComponent(
  Login,
  VIEW_CONTEXT.LOGIN
);
