import React from 'react';

import { IButtonProps } from '../@types/button.props';

import styles from './simpleButton.module.css';

// TODO: props 줘야댐
export default function SimpleDefaultButton({
  onClick,
  className,
  style,
  children,
}: IButtonProps) {
  
  return (
    <div className={styles.simpleButtonWrapper} style={style}>
      <button className={styles.defaultButtonStyle}>{children}</button>
    </div>
  );
}
