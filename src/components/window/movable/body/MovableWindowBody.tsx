import React from 'react';
import styles from  './movableWindowBody.module.css';
import TRICKY_CONSTANT from '@constants/tricky.constant';

export default function MovableWindowBody() {

  const bodyRef = React.useRef<HTMLDivElement>(null);
  const stopPropagation = (e: React.MouseEvent) => {
    const boundary = bodyRef.current!.getBoundingClientRect();
    const gap = TRICKY_CONSTANT.TRICKY_COLLISION_SAFETY_GAP;
    const isColliding= (
      (
        e.clientX <= (boundary.left + gap) || e.clientX >= (boundary.right - gap)
      )
      || (
          e.clientY <= (boundary.top + gap) || e.clientY >= (boundary.bottom - gap)
      )
    );
    if (isColliding) return;
    console.log('stopPropagation');
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      id="movableWindowBody"
      ref={bodyRef}
      className={styles.bodyContainer}
    >
      <div
        id="restrictedArea"
        className={styles.restrictedArea}
        onMouseMoveCapture={stopPropagation}
        onMouseDownCapture={stopPropagation}
      >
        ????
      </div>
  </div>
  )
}
