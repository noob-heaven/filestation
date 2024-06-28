import React from 'react';

import style from './MovableWindowTitle.module.css';
import { MovableWindowTitleProps } from './@types/movableWindowTitle.props';

export default function MovableWindowTitle({ title }: MovableWindowTitleProps) {
  return (
    <div id="titleContainer" className={style.titleContainer}>
      <div id="titleWrapper" className={`${style.titleItem} ${style.title}`}>{title}</div>
    </div> 
  );
}
