import { IAuthors } from "../../global_interface/authors.interface";
import { ILocations } from "../../global_interface/locations.interface";
import { IPaintings } from "../../global_interface/paintings.interface";

export interface ISelectionSection {
  paintings: IPaintings[] | undefined;
  authors: IAuthors[] | undefined;
  locations: ILocations[] | undefined;
  setIdPaintings: (value: string) => void;
  setIdLocations: (value: string) => void;
  setIdAuthors: (value: string) => void;
  setFromValue: (value: string) => void;
  setBeforeValue: (value: string) => void;
}


export type IHandleToggle = "painting" | "location" | "author";