import { IAuthors } from "../../global_interface/authors.interface";
import { ILocations } from "../../global_interface/locations.interface";
import { IPaintings } from "../../global_interface/paintings.interface";

 export interface IMain {
    setQuery: (value: string) => void;
    paintingsData: IPaintings[];
    locationsData: ILocations[];
    authorsData: IAuthors[];
    perPage: number;
    totalPages: number;
  }