import React, { useEffect, useState } from 'react';
import type { IMovableWindowProps } from './@types/movableWindow.props';

import { IWindowPosition } from '@src/common/@types/window.position';

import styles from './movableWindowContainer.module.css';
import { debug } from '@common/utils/debug';

export default function MovableWindowContainer({
  isSelected,
  setSelected,
  position,
}: IMovableWindowProps) {

  useEffect(() => {
    debug('Selected updated:', isSelected);
    debug('Position updated:', position);
  }, [position, isSelected]);

  return (
    <div
      className={`${styles.movableWindowContainer} unselectable`}
      onMouseDown={() => setSelected(true)}
      onMouseUp={() => setSelected(false)}
      style={{
        left: position.left,
        top: position.top,
        background: isSelected ? 'red' : 'blue',
      }}
    >
      Draggable Window
    </div>
  );
}
