import { IPaintings } from "../../../../global_interface/paintings.interface";
import { IHandleToggle } from "../../SelectionSection.props";

export interface SelectionPaintingsProps {
  handleToggle: (value: IHandleToggle) => void;
  valuePaintings: string;
  resetPaintings: () => void;
  toggleStates: { painting: boolean; [key: string]: boolean };
  setIdPaintings: (id: string) => void;
  setValuePaintings: (value: string) => void;
  paintings: IPaintings[];
}
