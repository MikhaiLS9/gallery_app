import { useCallback, useState } from "react";

import styles from "./SelectionSection.module.css";
import CustomSelectInput from "../CustomSelectInput/CustomSelectInput";
import { IHandleToggle, ISelectionSection } from "./SelectionSection.props";
import SelectionPaintings from "./Selection/SelectionPaintings/Selection";
import SelectionAuthors from "./Selection/SelectionAuthors/SelectionAuthors";
import SelectionLocations from "./Selection/SelectionLocations/SelectionLocations";

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
  const resetLocations = () => {
    setValueLocations("Location");
    setIdLocations("");
  };
  return (
    <section className={styles.section}>
      <SelectionPaintings
        handleToggle={handleToggle}
        valuePaintings={valuePaintings}
        resetPaintings={resetPaintings}
        toggleStates={toggleStates}
        setIdPaintings={setIdPaintings}
        setValuePaintings={setValuePaintings}
        paintings={paintings}
      />
      <SelectionAuthors
        handleToggle={handleToggle}
        valueAuthors={valueAuthors}
        resetAuthors={resetAuthors}
        toggleStates={toggleStates}
        setIdAuthors={setIdAuthors}
        setValueAuthors={setValueAuthors}
        authors={authors}
      />
      <SelectionLocations
        handleToggle={handleToggle}
        valueLocations={valueLocations}
        resetLocations={resetLocations}
        toggleStates={toggleStates}
        locations={locations}
        setIdLocations={setIdLocations}
        setValueLocations={setValueLocations}
      />

      <CustomSelectInput before={setBeforeValue} from={setFromValue} />
    </section>
  );
}

export default SelectionSection;
