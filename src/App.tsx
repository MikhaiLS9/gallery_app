import FilterSelect from "./Layout/FilterSelect/FilterSelect";
import Main from "./Layout/Main/Main";
import MainHeader from "./Layout/MainHeader/MainHeader";
import { useGetPaintingsApiQuery } from "./service/PaintingsService";
import { useGetLocationsApiQuery } from "./service/LocationsService";
import { useEffect, useState } from "react";
import { useGetAuthorsApiQuery } from "./service/AuthorsService";
import "typeface-roboto";

function App() {
  const [query, setQuery] = useState<string>("");
  const [itemsPerPage, setPerPage] = useState<number>(12);

  const totalItems = 33;
  const totalPages = totalItems ? Math.ceil(totalItems / itemsPerPage) : 0;

  useEffect(() => {
    setQuery(query);
    setPerPage(itemsPerPage);
  }, [itemsPerPage, query, totalPages]);

  const {
    data: locationsData,
    error: locationsError,
    isLoading: locationsLoading,
  } = useGetLocationsApiQuery("");
  const {
    data: authorsData,
    error: authorsError,
    isLoading: authorsLoading,
  } = useGetAuthorsApiQuery("");

  const {
    data: paintingsData,
    isLoading: paintingsLoading,
    error: paintingsError,
  } = useGetPaintingsApiQuery(query);


  return (
    <>
      {paintingsError || authorsError || locationsError ? (
        <div>Oh no, there was an error</div>
      ) : paintingsLoading || authorsLoading || locationsLoading ? (
        <div>Loading...</div>
      ) : (
        paintingsData &&
        locationsData &&
        authorsData && (
          <>
            <MainHeader />
            <FilterSelect />
            <Main
            totalPages={totalPages}
            perPage={itemsPerPage}
              setQuery={setQuery}
              paintingsData={paintingsData}
              locationsData={locationsData}
              authorsData={authorsData}
            />
           
          </>
        )
      )}
    </>
  );
}

export default App;
