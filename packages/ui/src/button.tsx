"use client";

import "./styles.css";
import "../styles/button.css";
import React from "react";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const mode = props.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${props.size}`, mode].join(' ')}
      style={{backgroundColor: props.backgroundColor}}
      {...props}
    >
      {props.label}
    </button>
  )
};
