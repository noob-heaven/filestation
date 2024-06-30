import React, { memo } from 'react';

import { IButtonProps } from '../@types/button.props';

import styles from './simpleButton.module.css';

// TODO: props 줘야댐
export function SimpleDefaultButton({
  onClick,
  className,
  style,
  children,
}: IButtonProps) {
  const defaultOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = e.currentTarget.id;
    console.log(`defaultOnClick: ${targetName}`);
  }

  return (
    <div className={styles.simpleButtonWrapper} style={style}>
      <button
        className={`${styles.defaultButtonStyle} ${className}`}
        onClick={onClick || defaultOnClick}
      >
        {children}
      </button>
    </div>
  );
}

const MemoizedSimpleDefaultButton = memo(SimpleDefaultButton);

export default MemoizedSimpleDefaultButton;
