"use client";
import { tv, type VariantProps } from "tailwind-variants";
import { motion } from "framer-motion";

export const button = tv({
  base: "px-4 py-1.5 rounded-full hover:opacity-80",
  variants: {
    type: {
      primary:
        "bg-blue-black text-white rounded-none font-halisMedium text-[13px] tracking-widest uppercase py-[11px] px-[60px] leading-4",
      secondary:
        "border-yellow border-[2px] rounded-none bg-transparent text-blue-black uppercase tracking-widest text-[11px] px-[15px] py-[5px] hover:border-green-light hover:text-blue-gray",
    },
    whiteText: {
      true: "text-white",
    },
  },
  defaultVariants: {
    type: "primary",
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
      className={button(props)}
    >
      {props.children}
    </motion.button>
  );
};
