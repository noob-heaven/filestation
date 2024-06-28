import React, { useEffect, useState } from 'react';
import type { IMovableWindowProps } from './@types/movableWindow.props';

import TRICKY_CONSTANT from '@constants/tricky.constant';

import styles from './movableWindowContainer.module.css';
import { debug } from '@common/utils/debug';

export default function MovableWindowContainer({
  isSelected,
  isScalable,
  setSelected,
  setScalable,
  position,
  size,
}: IMovableWindowProps) {

  useEffect(() => {
    debug('Selected updated:', isSelected);
    debug('Position updated:', position);
  }, [position, isSelected]);

  const containerRef = React.useRef<HTMLDivElement>(null);

  const actionWhenMouseOnBoundary = (e: React.MouseEvent) => {
    const boundary = containerRef.current!.getBoundingClientRect();
    // HACK: 왼쪽 / 오른쪽 / 위 / 아래 4px 이내로 마우스가 들어오는경우, gap 을 두어 느린 랜더링을 방지.
    const gap = isScalable ? TRICKY_CONSTANT.TRICKY_COLLISION_SCALING_GAP : TRICKY_CONSTANT.TRICKY_COLLISION_NORMAL_GAP;
    const isColliding= (
      (
        e.clientX <= (boundary.left + gap) || e.clientX >= (boundary.right - gap)
      )
      || (
          e.clientY <= (boundary.top + gap) || e.clientY >= (boundary.bottom - gap)
      )
    );
    setScalable(isColliding);
};


  return (
    <div
      id="movableWindowContainer"
      ref={containerRef}
      className={`${styles.movableWindowContainer} unselectable`}
      onMouseDown={() => setSelected(true)}
      onMouseUp={() => setSelected(false)}
      onMouseMove={actionWhenMouseOnBoundary}
      style={{
        left: position.left,
        top: position.top,
        width: size.width,
        height: size.height,
        background: isSelected ? 'red' : 'blue',
        cursor: isScalable ? 'nwse-resize' : 'move',
      }}
    >
      Draggable Window
    </div>
  );
}
