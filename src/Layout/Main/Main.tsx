import Painting from "../../components/Paintings/Paintings";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/store/store";
import { useEffect, useState } from "react";
import { IAuthors } from "../../global_interface/authors.interface";
import Pagination from "../../components/Pagination/Pagination";
import { IMain } from "./Main.props";
import { authorsApi } from "../../helpers/authorsApi";
import { getAuthorsAxios } from "../../components/getParams/getAuthorParams";

function Main({
  totalPages,
  perPage,
  paintingsData,
  locationsData,
  // authorsData,   Добавил по заданию Axios
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
    //Добавил по заданию Axios
  const [getAuthors, setgetAuthors] = useState<IAuthors[]>([]);

  //Добавил по заданию Axios
  // В данный момент коллбэк бесполезный из за того, просто написал...
  // const getAuthorsAxios = useCallback(
  //   async (
  //     url: string,
  //     setgetAuthors: React.Dispatch<React.SetStateAction<IAuthors[]>>
  //   ) => {
  //     try {
  //       const { data } = await axios.get(url);
  //       setgetAuthors(data);
  //     } catch (e) {
  //       const error = e as AxiosError;
  //       console.log(error);
  //       return;
  //     }
  //   },
  //   []
  // );
  // useEffect(() => {
  //   getAuthorsAxios(authorsApi,setgetAuthors);
  // }, [getAuthorsAxios]);
  
  useEffect(() => {
    getAuthorsAxios(authorsApi,setgetAuthors);
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

  const filterPainteing = paintingsData.map((item) => {
    const arr = {
      authorId: String(item.authorId),
      created: item.created,
      id: item.id,
      imageUrl: item.imageUrl,
      locationId: String(item.locationId),
      name: item.name,
    };
    const location = locationsData.find((i) => i.id === item.locationId);
    //без Axios
    //const author = authorsData.find((i) => i.id === item.authorId);
    // Добавил по заданию Axios
    const author = getAuthors.find((i) => i.id === item.authorId);
    if (author) {
      arr.authorId = author.name;
    }
    if (location) {
      arr.locationId = location.location;
    }
    return arr;
  });

  return (
    <>
      <Painting paintings={filterPainteing} />
      <Pagination
        setCountPage={setCountPage}
        prevCountPage={prevCountPage}
        totalPages={totalPages}
      />
    </>
  );
}
export default Main;
