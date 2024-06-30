import React from 'react';

import { IButtonProps } from '../@types/button.props';

import styles from './simpleButton.module.css';

// TODO: props 줘야댐
export default function SimpleDefaultButton(props: IButtonProps) {

  const {
  } = props;
  
  return (
    <div className={styles.simpleButtonWrapper} style={props.style}>
      <button className={styles.defaultButtonStyle}>{props.text}</button>
    </div>
  );
}
