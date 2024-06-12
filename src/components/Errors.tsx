import { ReactNode } from "react";

type ErrorsProps = {
  children: ReactNode;
};

export const Errors = ({ children }: ErrorsProps) => {
  return <p className="text-sm text-red-300">{children}</p>;
};
