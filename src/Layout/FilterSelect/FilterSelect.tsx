import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useGetPaintingsApiQuery } from "../../service/PaintingsService";
import SelectionSection from "../../components/SelectionSection/SelectionSection";
import { useGetLocationsApiQuery } from "../../service/LocationsService";
import { useGetAuthorsApiQuery } from "../../service/AuthorsService";
import { addPaintings } from "../../reducer/paintingSlice";
import { IFilterSelect } from "./FilterSelect.props";




function FilterSelect(): JSX.Element {
  const dispatch = useDispatch();

  const { data: authorsData } = useGetAuthorsApiQuery("");
  const { data: locationsData } = useGetLocationsApiQuery("");
  const { data: paintingsData } = useGetPaintingsApiQuery("");

  const authors = authorsData ? authorsData : [];
  const locations = locationsData ? locationsData : [];
  const paintings = paintingsData ? paintingsData : [];

  const [idPaintings, setIdPaintings] = useState<string>("");
  const [idLocations, setIdLocations] = useState<string>("");
  const [idAuthors, setIdAuthors] = useState<string>("");
  const [fromValue, setFromValue] = useState<string>("");
  const [beforeValue, setBeforeValue] = useState<string>("");

  useEffect(() => {
    const newFilters: IFilterSelect = {
      authors: idAuthors,
      locations: idLocations,
      paintings: idPaintings,
      from: fromValue,
      before: beforeValue,
    };
    dispatch(addPaintings(newFilters));
  }, [beforeValue, dispatch, fromValue, idAuthors, idLocations, idPaintings]);


  return (
    <>
      <SelectionSection
        locations={locations}
        authors={authors}
        paintings={paintings}
        setIdPaintings={setIdPaintings}
        setIdLocations={setIdLocations}
        setIdAuthors={setIdAuthors}
        setFromValue={setFromValue}
        setBeforeValue={setBeforeValue}
      />
    </>
  );
}

export default FilterSelect;
