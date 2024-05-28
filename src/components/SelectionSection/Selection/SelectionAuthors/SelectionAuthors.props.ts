import { IAuthors } from "../../../../global_interface/authors.interface";
import { IHandleToggle } from "../../SelectionSection.props";

export interface SelectionAuthorsProps {
  handleToggle: (value: IHandleToggle) => void;
  valueAuthors: string;
  resetAuthors: () => void;
  toggleStates: { painting: boolean; [key: string]: boolean };
  setIdAuthors: (id: string) => void;
  setValueAuthors: (value: string) => void;
  authors: IAuthors[] | undefined;
}
