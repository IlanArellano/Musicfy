"use client";

import withAppContext from "@app/context/withAppContext";
import { modalManager } from "@app/ui/modal";
import type { ViewProps } from "@ihaz/react-ui-utils";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useEffect } from "react";

const Example = ({ onClose }: ViewProps) => {
  return (
    <Dialog
      header="Header"
      visible
      style={{ width: "50vw" }}
      onHide={() => onClose()}
    >
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </Dialog>
  );
};

function Home() {
  const onShowExample = () => {
    console.log("click");
    modalManager.showSync(Example, {}, () => console.log("close")).start();
  };

  return (
    <div>
      Holaa <Button onClick={onShowExample}>Abrir</Button>
    </div>
  );
}

export default withAppContext(Home);
