import React, { useEffect } from 'react';

import TRICKY_CONSTANT from '@constants/tricky.constant';
import { debug } from '@common/utils/debug';

import MovableWindowBody from '../body/MovableWindowBody';
import MovableWindowTitle from '../title/MovableWindowTitle';
import styles from './style.module.css';
import type { IMovableWindowProps } from './@types/movableWindow.props';

const temporaryTitle = 'Unidentified Object Explorer';

export default function MovableWindowContainer({
  currentAction,
  isSelected,
  isScalable,
  setSelected,
  setScalable,
  position,
  size,
}: IMovableWindowProps) {

  useEffect(() => {
    debug('Position updated:', position);
  }, [position]);

  useEffect(() => {
    debug('Size updated:', size);
  }, [size]);

  useEffect(() => {
    debug('Selected:', isSelected);
  }, [isSelected]);

  const containerRef = React.useRef<HTMLDivElement>(null);

  /**
  * @description Scaling
  */
  const actionWhenMouseOnBoundary = (e: React.MouseEvent) => {
    if (currentAction !== 'none' && currentAction !== 'scale') return;

    const boundary = containerRef.current!.getBoundingClientRect();
    // HACK: 왼쪽 / 오른쪽 / 위 / 아래 4px 이내로 마우스가 들어오는경우, gap 을 두어 느린 랜더링을 방지.
    const gap = currentAction === 'scale' ? TRICKY_CONSTANT.TRICKY_COLLISION_SCALING_GAP : TRICKY_CONSTANT.TRICKY_COLLISION_NORMAL_GAP;
    const isColliding= (
      (e.clientX <= (boundary.left + gap) || e.clientX >= (boundary.right - gap))
      || (e.clientY <= (boundary.top + gap) || e.clientY >= (boundary.bottom - gap))
    );
    setScalable(isColliding);
  };


  return (
    <div
      id="movableWindowContainer"
      ref={containerRef}
      className={`${styles.movableWindowContainer} G-unselectable`}
      onMouseDown={() => setSelected(true)}
      onMouseUp={() => setSelected(false)}
      onMouseMove={actionWhenMouseOnBoundary}
      style={{
        left: position.left,
        top: position.top,
        width: size.width,
        height: size.height,
        background: isSelected ? 'red' : '#fff',
        cursor: isScalable ? 'nwse-resize' : 'move',
      }}
    >
      <div className={styles.innerContainer}>
        <MovableWindowTitle title={temporaryTitle} />
        <MovableWindowBody />
      </div>
    </div>
  );
}
