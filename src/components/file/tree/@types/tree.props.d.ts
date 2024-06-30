import React from 'react';

import { ITreeData } from "@components/tree/@types/tree.data";

export interface ITreeProps {
  data: ITreeData,
  isOpen: boolean,
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>
}
