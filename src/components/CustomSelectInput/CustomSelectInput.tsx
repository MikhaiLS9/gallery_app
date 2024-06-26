import { useEffect, useState } from "react";
import styles from "./CustomSelectInput.module.css";

import Button from "../Button/Button";
import { onSubmitType } from "./CustomSelectInput.props";

import closeSvg from "../../../public/close.svg";
import vectorSvg from "../../../public/vector.svg";
import { useDebounce } from "../hooks/debounce/debounce";
import React from "react";

const CustomSelectInput = ({ before, from }: onSubmitType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fromValue, setFromValue] = useState<string>("");
  const [beforeValue, setBeforeValue] = useState<string>("");
  const debounceSearchFrom = useDebounce(fromValue);
  const debounceSearchValue = useDebounce(beforeValue);

  useEffect(() => {
    if (debounceSearchValue) {
      from(debounceSearchValue);
    }
  }, [from, debounceSearchValue]);

  useEffect(() => {
    if (debounceSearchFrom) {
      from(debounceSearchFrom);
    }
  }, [from, debounceSearchFrom]);

  const toggleOpen = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    from("");
    before("");
  };

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      setFromValue(value);
    }
  };

  const handleBeforeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBeforeValue(value);
  };

  return (
    <div className={styles.custom_select}>
      <div
        className={styles.label_styles}
        onClick={!isOpen ? toggleOpen : undefined}
      >
        Created
        <span className={styles.span_clouse_btn}>
          <Button appearance="close" onClick={toggleOpen}>
            {isOpen && <img src={closeSvg} alt="close" />}
          </Button>
          <img className={styles.vector_svg} src={vectorSvg} alt="vector" />
        </span>
      </div>

      {isOpen && (
        <>
          <div className={styles.inputs_container}>
            <input
              className={styles.input}
              type="number"
              name="from"
              placeholder="from"
              onChange={handleFromChange}
            />
            <span className={styles.span}></span>
            <input
              className={styles.input}
              type="number"
              name="before"
              placeholder="before"
              onChange={handleBeforeChange}
            />
          </div>
        </>
      )}
    </div>
  );
};


const MemoizedCustomSelectInput = React.memo(CustomSelectInput);

export default MemoizedCustomSelectInput;