import {FC, ReactNode} from "react";

import styles from "./styles.module.scss";

interface ButtonProps {
  children: ReactNode | string;
  handleClick: () => void;
}

export const Button: FC<ButtonProps> = ({children, handleClick}) => {
  return (
    <div className={styles.btn} onClick={handleClick}>
      {children}
    </div>
  );
};
