import React from "react";
import styles from "./page.module.css";
import {Button} from "@repo/ui";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline text-yellow-500 bg-glow-conic">
          Hello world!
        </h1>

        <Button label={'이것은 버튼'} size={'medium'} primary={true}/>
      </main>
    </div>
=======
    <main>
      <h1 className="text-4xl font-bold underline">
        Hello world!
      </h1>

      <div className={"bg-blue-500 text-custom-blue"}>테일윈드 확인용</div>
    </main>
>>>>>>> 9712037 (repository pull)
  );
}
