'use client';

import React, { useEffect, useState } from 'react';

import type { IWindowSize, IWindowPosition } from '$types/window';
import MovableWindowContainer from '@components/window/movable/container/MovableWindowContainer';
import {
  RESTRICT_HEIGHT_MAX,
  RESTRICT_HEIGHT_MIN,
  RESTRICT_MOVE_X_MAX_GAP,
  RESTRICT_MOVE_X_MIN_GAP,
  RESTRICT_MOVE_Y_MAX_GAP,
  RESTRICT_MOVE_Y_MIN_GAP,
  RESTRICT_WIDTH_MAX,
  RESTRICT_WIDTH_MIN,
} from '@constants/movableRestrict.constants';

import {
  INITIAL_WINDOW_HEIGHT,
  INITIAL_WINDOW_WIDTH,
} from '@constants/common.constants';

import { MovableWindowAction } from '../container/@types/movableWindow.props';
import styles from './movableWindowReactor.module.css';

export default function MovableWindowReactor() {

  // HACK: window 가 undefined 일 수 있으므로, 초기화 완료 여부 체크.
  let [isInitialized, setInitialized] = useState<boolean>(false);

  let [isSelected, setSelected] = useState<boolean>(false);
  let [isScalable, setScalable] = useState<boolean>(false);
  let [position, setPosition] = useState<IWindowPosition>({ left: 200, top: 200 });
  let [size, setSize] = useState<IWindowSize>({ width: INITIAL_WINDOW_WIDTH, height: INITIAL_WINDOW_HEIGHT });
  let [currentAction, setCurrentAction] = useState<MovableWindowAction>('none');

  // NOTE: On Window Mounted -> reset Pos!
  useEffect(() => {
    setInitialized(true);
    setPosition({
      left: (window.innerHeight / 2),
      top: (window.innerHeight / 2) - (size.height / 2),
    });
  }, []);

  const onWindowMouseMove = (e: React.MouseEvent) => {
    const { movementX, movementY } = e;

    // NOTE: 마우스 클릭된 상태가 아닌경우, 이동 / 스케일링 불가능.
    if (!isSelected) return;

    if (isScalable || currentAction === 'scale') {
      setCurrentAction('scale');
      setSize((prev) => {
        const nextWidth = prev.width + movementX;
        const nextHeight = prev.height + movementY;

        // INFO: WIDTH / HEIGHT에 대한 제약사항.
        if (nextWidth < RESTRICT_WIDTH_MIN || RESTRICT_WIDTH_MAX < nextWidth) return prev;
        if (nextHeight < RESTRICT_HEIGHT_MIN || RESTRICT_HEIGHT_MAX < nextHeight) return prev;

        return { width: nextWidth, height: nextHeight };
      });
    } else {
      setCurrentAction('move');
      setPosition((prev) => {
        const nextLeft = prev.left + movementX;
        const nextTop = prev.top + movementY;
        const checkingRight = nextLeft + size.width;
        const checkingBottom = nextTop + size.height;


        // INFO: LEFT / RIGHT / TOP / BOTTOM에 대한 제약사항.
        if (
          nextLeft < RESTRICT_MOVE_X_MIN_GAP
          || nextTop < RESTRICT_MOVE_Y_MAX_GAP
          || checkingRight > window.innerWidth - RESTRICT_MOVE_X_MAX_GAP
          || checkingBottom > window.innerHeight - RESTRICT_MOVE_Y_MIN_GAP
        ) return prev;
        
        return { left: nextLeft, top: nextTop };
      });
    }

  };

  const cleanUpState = () => {
    setSelected(false);
    setCurrentAction('none');
    setScalable(false);
  };

  return (
    <div
      className={styles.movableWindowReactor}
      onMouseMoveCapture={onWindowMouseMove}
      onMouseUp={cleanUpState}
    >

      { isInitialized &&
        <MovableWindowContainer
          currentAction={currentAction}
          isSelected={isSelected}
          setSelected={setSelected}

          isScalable={isScalable}
          setScalable={setScalable}

          position={position}
          size={size}
        /> 
      }
    </div>
  );
}
