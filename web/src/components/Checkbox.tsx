import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

interface Props extends CheckboxProps {}

export function CheckboxInput({...rest}: Props) {
  return (
    <Checkbox.Root {...rest} className="w-6 h-6 p-1 flex items-center justify-center rounded bg-zinc-900">
      <Checkbox.Indicator>
        <Check className="w-4 h-4 text-emerald-400" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}
