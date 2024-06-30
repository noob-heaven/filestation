import React from 'react';

import MovableWindowReactor from '@components/window/movable/reactor/MovableWindowReactor';

import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.main}>
      <MovableWindowReactor />
    </main>
  );
}
