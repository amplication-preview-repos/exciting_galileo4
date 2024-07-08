import { Explorer } from "../explorer/Explorer";

export type Commission = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  explorer?: Explorer | null;
};
