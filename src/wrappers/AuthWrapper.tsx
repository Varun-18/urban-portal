import { ReactNode } from "react";

type ChildrenProps = {
  children?: ReactNode;
};

export const AuthWrapper: React.FC<ChildrenProps> = ({ children }) => {
  return <>{children}</>;
};
