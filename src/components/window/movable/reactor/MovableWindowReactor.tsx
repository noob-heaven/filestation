'use client';

import React, { useEffect, useState } from 'react';

import { IWindowSize, type IWindowPosition } from '@src/common/@types/window';
import { debug } from '@common/utils/debug';
import MovableWindowContainer from '@components/window/movable/container/MovableWindowContainer';

import styles from './movableWindowReactor.module.css';

export default function MovableWindowReactor() {

  let [isSelected, setSelected] = useState<boolean>(false);
  let [isScalable, setScalable] = useState<boolean>(false);
  let [position, setPosition] = useState<IWindowPosition>({ left: window.innerWidth / 2, top: window.innerHeight / 2 });
  let [size, setSize] = useState<IWindowSize>({ width: 100, height: 100 });

  const onWindowMouseMove = (e: React.MouseEvent) => {
    if (!isSelected) return;
    const { movementX, movementY } = e;
    console.log(movementX, movementY);

    if (isScalable) {
      setSize((prev) => ({
        width: prev.width + movementX,
        height: prev.height + movementY,
      }));
    } else if (isSelected) {
      setPosition((prev) => ({
        left: prev.left + movementX,
        top: prev.top + movementY,
      }));
    }

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

        isScalable={isScalable}
        setScalable={setScalable}

        position={position}
        size={size}
      />
    </div>
  );
}
