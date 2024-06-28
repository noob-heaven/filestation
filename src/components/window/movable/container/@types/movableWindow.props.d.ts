import { IWindowPosition, IWindowSize } from "@src/common/@types/window";
import type React from "react";

export type MovableWindowAction = 'move' | 'scale' | 'none';
export interface IMovableWindowProps {
  currentAction: MovableWindowAction;
  isSelected: boolean;
  isScalable: boolean;

  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setScalable: React.Dispatch<React.SetStateAction<boolean>>;

  position: IWindowPosition;
  size: IWindowSize;
}
