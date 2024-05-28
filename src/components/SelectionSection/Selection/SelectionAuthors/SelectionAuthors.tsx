import Button from "../../../Button/Button";
import styles from "../../SelectionSection.module.css";

import vectorSvg from "../../../../../public/vector.svg";
import closeSvg from "../../../../../public/close.svg";
import { SelectionAuthorsProps } from "./SelectionAuthors.props";

function SelectionAuthors({
  handleToggle,
  valueAuthors,
  resetAuthors,
  toggleStates,
  setIdAuthors,
  setValueAuthors,
  authors,
}: SelectionAuthorsProps) {
  return (
    <ul className={styles.ul}>
        <div
          className={styles.header_wrapper}
          onClick={() => handleToggle("author")}
        >
          <h3 className={styles.header}> {valueAuthors}</h3>
          <span className={styles.span_close_btn}>
            {valueAuthors !== "Author" && (
              <Button appearance="close" onClick={resetAuthors}>
                {<img src={closeSvg} alt="close" />}
              </Button>
            )}
            <img className={styles.vector_svg} src={vectorSvg} alt="vector" />
          </span>
        </div>

        {toggleStates.author &&
          authors?.map((el) => (
            <li
              key={el.id}
              onClick={() => {
                setIdAuthors(el.id.toString());
                setValueAuthors(el.name);
                handleToggle("author");
              }}
            >
              {el.name}
            </li>
          ))}
      </ul>
  );
}

export default SelectionAuthors;
