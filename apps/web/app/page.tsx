import {Button} from "@repo/ui";
import React from "react";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold underline">
        Hello world!
      </h1>
      <Button label={'라벨'} />

      <button
        type="button"
        className={'bg-slate-50 text-white' }
      >
        {'hi'}
      </button>

      <div className={"bg-slate-50 text-custom-blue"}>테일윈드 확인용</div>
    </main>
  );
}
