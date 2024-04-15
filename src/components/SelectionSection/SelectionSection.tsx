import { useCallback, useState } from "react";

import styles from "./SelectionSection.module.css";
import CustomSelectInput from "../CustomSelectInput/CustomSelectInput";
import Button from "../Button/Button";
import { IHandleToggle, ISelectionSection } from "./SelectionSection.props";
import vectorSvg from "../../../public/vector.svg";
import closeSvg from "../../../public/close.svg";

function SelectionSection({
  paintings,
  authors,
  locations,
  setIdPaintings,
  setIdLocations,
  setIdAuthors,
  setFromValue,
  setBeforeValue,
}: ISelectionSection) {
  const [valuePaintings, setValuePaintings] = useState<string>("Name");
  const [valueLocations, setValueLocations] = useState<string>("Location");
  const [valueAuthors, setValueAuthors] = useState<string>("Author");

  const [toggleStates, setToggleStates] = useState({
    painting: false,
    location: false,
    author: false,
  });

  const handleToggle = useCallback(
    (type: IHandleToggle) => {
      setToggleStates((prevStates) => ({
        ...prevStates,
        [type]: !prevStates[type],
      }));
    },
    [setToggleStates]
  );

  const resetPaintings = () => {
    setValuePaintings("Name");
    setIdPaintings("");
  };
  const resetAuthors = () => {
    setValueAuthors("Author");
    setIdAuthors("");
  };
  const resetLocations= () => {
    setValueLocations("Location");
    setIdLocations("");
  };
  return (
    <section className={styles.section}>
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

      <ul className={styles.ul}>
        <div
          className={styles.header_wrapper}
          onClick={() => handleToggle("author")}
        >
          <h3 className={styles.header}> {valueAuthors}</h3>
          <span className={styles.span_clouse_btn}>
            {valueAuthors !== "Author" && (
              <Button appearance="close" onClick={resetAuthors}>
                {<img src={closeSvg} alt="close" />}
              </Button>
            )}
            <img className={styles.vector_svg} src={vectorSvg} alt="vector" />
          </span>
        </div>

        {toggleStates.author &&
          authors.map((el) => (
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
      <ul className={styles.ul}>
        <div
          className={styles.header_wrapper}
          onClick={() => handleToggle("location")}
        >
          <h3 className={styles.header}> {valueLocations}</h3>
          <span className={styles.span_clouse_btn}>
            {valueLocations !== "Location" && (
              <Button onClick={resetLocations} appearance="close">
                {<img src={closeSvg} alt="close" />}
              </Button>
            )}
            <img className={styles.vector_svg} src={vectorSvg} alt="vector" />
          </span>
        </div>

        {toggleStates.location &&
          locations.map((el) => (
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

      <CustomSelectInput before={setBeforeValue} from={setFromValue} />
    </section>
  );
}

export default SelectionSection;
