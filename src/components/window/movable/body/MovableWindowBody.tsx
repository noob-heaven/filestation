import React from 'react';
import styles from  './movableWindowBody.module.css';
import TRICKY_CONSTANT from '@constants/tricky.constant';
import MovableWindowLeftPane from '../left-pane/MovableWindowLeftPane';
import MovableWindowRightPane from '../right-pane/MovableWindowRightPane';

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
        <div id="paneContainer" className={styles.paneContainer}>
          <div id="leftPane" className={`${styles.paneContainer} ${styles.pane}`}>
            <MovableWindowLeftPane  />
          </div>
          <div id="rightPane" className={`${styles.paneContainer} ${styles.pane}`}>
            <MovableWindowRightPane />
          </div>
        </div>
      </div>
  </div>
  )
}
