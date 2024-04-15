// import styles from "./Main.module.css";
import Painting from "../../components/Paintings/Paintings";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/store/store";
import { IPaintings } from "../../global_interface/paintings.interface";
import { ILocations } from "../../global_interface/locations.interface";
import { useEffect, useState } from "react";
import { IAuthors } from "../../global_interface/authors.interface";
import Pagination from "../../components/Pagination/Pagination";

interface IMain {
  setQuery: (value: string) => void;
  paintingsData: IPaintings[];
  locationsData: ILocations[];
  authorsData: IAuthors[];
  perPage: number;
  totalPages: number;
}

function Main({
  totalPages,
  perPage,
  paintingsData,
  locationsData,
  authorsData,
  setQuery,
}: IMain): JSX.Element {
  const {
    authors: authorsState,
    locations: locationsState,
    paintings: paintingsState,
  } = useSelector((e: RootState) => e.paintings);

  const [prevCountPage, setCountPage] = useState<number>(1);

  useEffect(() => {
    if (paintingsState) {
      setQuery(`?id=${paintingsState}`);
    } else if (authorsState) {
      setQuery(`?authorId=${authorsState}`);
    } else if (locationsState) {
      setQuery(`?locationId=${locationsState}`);
    } else {
      setQuery(`?_limit=${perPage}&_page=${prevCountPage}`);
    }
  }, [
    authorsState,
    locationsState,
    paintingsState,
    perPage,
    prevCountPage,
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
    const author = authorsData.find((i) => i.id === item.authorId);
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
