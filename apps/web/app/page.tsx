import React from "react";
import styles from "./page.module.css";
import {Button} from "@repo/ui";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline text-yellow-500 bg-glow-conic">
          Hello world!
        </h1>

        <Button appName={'webapp'}>{'이것은 버튼'}</Button>
      </main>
    </div>
  );
}
