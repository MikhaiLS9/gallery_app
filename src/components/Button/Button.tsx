import { IButton } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

function Button({ children, appearance, isActive, onClick }: IButton) {
  return (
    <button
      className={cn(styles.button, {
        [styles.close]: appearance === "close",
        [styles.pagination]: appearance === "pagination",
        [styles.isActive]: isActive,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
