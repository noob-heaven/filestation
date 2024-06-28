import { IWindowPosition, IWindowSize } from "@src/common/@types/window";
import type React from "react";

export interface IMovableWindowProps {
  isSelected: boolean;
  isScalable: boolean;

  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setScalable: React.Dispatch<React.SetStateAction<boolean>>;

  position: IWindowPosition;
  size: IWindowSize;
}
