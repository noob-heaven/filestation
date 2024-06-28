import React from 'react';

import styles from "./page.module.css";
import MovableWindowReactor from '@src/components/window/movable/reactor/MovableWindowReactor';

export default function Home() {

  return (
    <main className={styles.main}>
      <MovableWindowReactor />
    </main>
  );
}
