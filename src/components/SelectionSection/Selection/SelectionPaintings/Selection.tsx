import Button from "../../../Button/Button";
import styles from "../../SelectionSection.module.css";

import vectorSvg from "../../../../../public/vector.svg";
import closeSvg from "../../../../../public/close.svg";
import { SelectionPaintingsProps } from "./SelectionPaintings.props";

function SelectionPaintings({
  handleToggle,
  valuePaintings,
  resetPaintings,
  toggleStates,
  setIdPaintings,
  setValuePaintings,
  paintings,
}: SelectionPaintingsProps) {
  return (
    <ul className={styles.ul}>
      <div
        className={styles.header_wrapper}
        onClick={() => handleToggle("painting")}
      >
        <h3 className={styles.header}>{valuePaintings}</h3>
        <span className={styles.span_clouse_btn}>
          {valuePaintings !== "Name" && (
            <Button appearance="close" onClick={resetPaintings}>
              {<img src={closeSvg} alt="close" />}
            </Button>
          )}
          <img className={styles.vector_svg} src={vectorSvg} alt="vector" />
        </span>
      </div>
      {toggleStates.painting &&
        paintings.map((el) => (
          <li
            onClick={() => {
              setIdPaintings(el.id.toString());
              setValuePaintings(el.name);
              handleToggle("painting");
            }}
            key={el.id}
          >
            {el.name}
          </li>
        ))}
    </ul>
  );
}

export default SelectionPaintings;
