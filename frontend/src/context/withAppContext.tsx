import { modalManager } from "@app/ui/modal";
import { Client } from "@ihaz/js-ui-utils";
import { ComponentType } from "react";

interface WithAppContextOptions {}

export default function withAppContext<IProps>(
  Component: ComponentType<IProps>,
  options?: WithAppContextOptions
) {
  const isClient = Client.isClientSide();
  return (props: IProps) => {
    return (
      <>
        {isClient && <modalManager.Component />}
        <Component {...props} />
      </>
    );
  };
}
