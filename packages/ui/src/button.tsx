"use client";

import "./styles.css";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={"text-amber-200 p-3"}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      <span
        className={"text-yellow-500 p-5 bg-purple-500"}
      >
        {children}
      </span>
    </button>
  );
};
