import * as Toast from "@radix-ui/react-toast";
import { XCircle } from "phosphor-react";
import { ReactNode } from "react";

type ToastProps = {
  open: boolean;
  setOpen: (state: boolean) => void;
  title: string;
  description: string;
  type: string;
  icon: ReactNode;
};

export function ToastNotification({
  open,
  icon: Icon,
  setOpen,
  type,
  title,
  description,
}: ToastProps) {
  return (
    <Toast.Root
      className={`min-w-[25rem] mobile_m:min-w-[17.5rem] mobile_xl:min-w-[20rem] ${type === "error" && "mobile_xl:min-w-[10rem] mobile_xl:flex-col mobile_m:min-w-[12rem]"} left-1/2 translate-x-[-50%] toast-root-animation bg-zinc-900 rounded-md px-4 py-3 flex items-center gap-3 medium-shadow-toast absolute bottom-2 right-0 w-full`}
      open={open}
      onOpenChange={setOpen}
    >
      {Icon}
      <div className={`flex items-center justify-between w-full ${type === "error" && "mobile_xl:flex-col mobile_xl:gap-4"}`}>
        <div className="flex flex-col">
          <Toast.Title className={`mobile_m:text-sm font-bold mb-1 text-base font-inter text-white ${type === "error" && "mobile_xl:text-center"}`}>
            {title}
          </Toast.Title>
          <Toast.Description className={`mobile_m:max-w-[7rem] mobile_m:text-[.85rem] text-zinc-400 text-sm font-inter ${type === "error" && "mobile_xl:max-w-full text-center"}`}>
            {description}
          </Toast.Description>
        </div>

        <Toast.Close
          className={`border-2 rounded ${
            type === "error" &&
            "hover:bg-red-500 border-red-500 medium-shadow-red shadow-red-400 mobile_xl:w-full" 
          } ${
            type === "success" &&
            "hover:bg-green-500 border-green-500 medium-shadow-green shadow-green-400"
          } px-2 py-1 text-white cursor-pointer transition-all duration-150 ease-linear font-inter mobile_xl:text-sm`}
        >
          Dismiss
        </Toast.Close>
      </div>
    </Toast.Root>
  );
}
