'use client';

import React, { useEffect, useState } from 'react';

import type { IWindowPosition } from '@types/window.position';
import { debug } from '@common/utils/debug';
import MovableWindowContainer from '@components/window/movable/container/MovableWindowContainer';

import styles from './movableWindowReactor.module.css';

export default function MovableWindowReactor() {

  let [isSelected, setSelected] = useState<boolean>(false);
  let [position, setPosition] = useState<IWindowPosition>({ left: 0, top: 0 });

  useEffect(() => {
    debug('Position updated:', position);
  }, [position]);

  useEffect(() => {
    debug('Selected updated:', isSelected);
  }, [isSelected]);

  const onWindowMouseMove = (e: React.MouseEvent) => {
    if (!isSelected) return;
    const { movementX, movementY } = e;
    console.log(movementX, movementY);
    setPosition((prev) => ({
      left: prev.left + movementX,
      top: prev.top + movementY,
    }));
  };

  return (
    <div
      className={styles.movableWindowReactor}
      onMouseMoveCapture={onWindowMouseMove}
      onMouseUp={() => setSelected(false)}
    >
      <MovableWindowContainer
        isSelected={isSelected}
        setSelected={setSelected}
        position={position}
      />
    </div>
  );
}
