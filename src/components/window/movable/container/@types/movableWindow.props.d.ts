import { IWindowPosition } from "@src/common/@types/window.position";
import type React from "react";

export interface IMovableWindowProps {
  isSelected: boolean;

  setSelected: React.Dispatch<React.SetStateAction<boolean>>;

  position: IWindowPosition;
}
