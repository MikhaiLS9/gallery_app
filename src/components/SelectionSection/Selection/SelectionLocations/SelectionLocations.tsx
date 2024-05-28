import Button from "../../../Button/Button";
import styles from "./../../SelectionSection.module.css";
import vectorSvg from "../../../../../public/vector.svg";
import closeSvg from "../../../../../public/close.svg";
import { SelectionLocationsProps } from "./SelectionLocations.props";

function SelectionLocations({
  handleToggle,
  valueLocations,
  resetLocations,
  toggleStates,
  locations,
  setIdLocations,
  setValueLocations,
} : SelectionLocationsProps) {
  return (
    <ul className={styles.ul}>
      <div
        className={styles.header_wrapper}
        onClick={() => handleToggle("location")}
      >
        <h3 className={styles.header}> {valueLocations}</h3>
        <span className={styles.span_close_btn}>
          {valueLocations !== "Location" && (
            <Button onClick={resetLocations} appearance="close">
              {<img src={closeSvg} alt="close" />}
            </Button>
          )}
          <img className={styles.vector_svg} src={vectorSvg} alt="vector" />
        </span>
      </div>

      {toggleStates.location &&
        locations?.map((el) => (
          <li
            key={el.id}
            onClick={() => {
              setIdLocations(el.id.toString());
              setValueLocations(el.location);
              handleToggle("location");
            }}
          >
            {el.location}
          </li>
        ))}
    </ul>
  );
}

export default SelectionLocations;
