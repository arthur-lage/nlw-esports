import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: Props) {
  return (
    <input
      className={`h-[3.125rem] bg-zinc-900 py-3 px-4 font-roboto text-sm text-zinc-500 rounded-[.25rem]`}
      {...props}
    />
  );
}
