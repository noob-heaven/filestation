import { ITreeData } from "./tree.data";
import React from 'react';

export interface ITreeProps {
  data: ITreeData,
  isOpen: boolean,
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>
}