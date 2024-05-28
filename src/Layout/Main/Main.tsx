import Painting from "../../components/Paintings/Paintings";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/store/store";
import { useEffect, useState } from "react";
import { IAuthors } from "../../global_interface/authors.interface";
import Pagination from "../../components/Pagination/Pagination";
import { IMain } from "./Main.props";
import { authorsApi } from "../../helpers/authorsApi";
import { getAuthorsAxios } from "../../components/getParams/getAuthorParams";
import { IPaintings } from "../../global_interface/paintings.interface";

function Main({
  totalPages,
  perPage,
  paintingsData,
  locationsData,
  setQuery,
}: IMain): JSX.Element {
  const {
    authors: authorsState,
    locations: locationsState,
    paintings: paintingsState,
    before: beforeState,
    from: fromState,
  } = useSelector((e: RootState) => e.paintings);

  const [prevCountPage, setCountPage] = useState<number>(1);
  const [getAuthors, setGetAuthors] = useState<IAuthors[]>([]);

  useEffect(() => {
    getAuthorsAxios(authorsApi, setGetAuthors);
  }, []);

  useEffect(() => {
    const queryParams = [];
    if (prevCountPage) queryParams.push(`?_limit=${perPage}`);
    if (prevCountPage) queryParams.push(`_page=${prevCountPage}`);
    if (paintingsState) queryParams.push(`id=${paintingsState}`);
    if (authorsState) queryParams.push(`authorId=${authorsState}`);
    if (locationsState) queryParams.push(`locationId=${locationsState}`);
    if (fromState) queryParams.push(`created_gte=${fromState}`);
    if (beforeState) queryParams.push(`created_lte=${beforeState}`);

    const queryString = queryParams.join("&");
    setQuery(queryString);
  }, [
    paintingsState,
    authorsState,
    locationsState,
    beforeState,
    fromState,
    prevCountPage,
    perPage,
    setQuery,
  ]);

  const filterPaintings = paintingsData.map((item): IPaintings => {
    const location = locationsData.find((i) => i.id === item.locationId);
    const author = getAuthors.find((i) => i.id === item.authorId);
    return {
      ...item,
      locationId: location ? String(location.location) : item.locationId,
      authorId: author ? String(author.name) : item.authorId,
    };
  });

  return (
    <>
   
        <Painting paintings={filterPaintings} />

        <Pagination
          setCountPage={setCountPage}
          prevCountPage={prevCountPage}
          totalPages={totalPages}
        />
     
    </>
  );
}
export default Main;
