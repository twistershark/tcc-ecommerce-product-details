import React, { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "outline" | "full";
}

export function Button({ variant = "full", ...rest }: Readonly<ButtonProps>) {
  const baseStyles =
    "pd-flex pd-items-center pd-justify-center pd-px-10 pd-py-4 pd-transition-all hover:pd-scale-y-105 pd-w-full pd-font-serif";
  const variants = {
    outline: "pd-border pd-border-black pd-text-black",
    full: "pd-bg-black pd-text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...rest}></button>
  );
}
