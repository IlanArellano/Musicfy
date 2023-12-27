import { Client } from "@ihaz/js-ui-utils";

export const getServerLanguage = (): string | null =>
  process.env.LC_ALL ||
  process.env.LC_MESSAGES ||
  process.env.LANG ||
  process.env.LANGUAGE ||
  null;

export const rejectClient = () => {
  if (Client.isClientSide())
    throw new Error("This method is only allow in server enviroment");
};
