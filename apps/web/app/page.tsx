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

        <Button label={'이것은 버튼'} size={'medium'} primary={true}/>
      </main>
    </div>
  );
}
