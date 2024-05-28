import { ILocations } from "../../../../global_interface/locations.interface";
import { IHandleToggle } from "../../SelectionSection.props";

export interface SelectionLocationsProps {
  handleToggle: (value: IHandleToggle) => void;
  valueLocations: string;
  resetLocations: () => void;
  toggleStates: { painting: boolean; [key: string]: boolean };
  setIdLocations: (id: string) => void;
  setValueLocations: (value: string) => void;
  locations: ILocations[] | undefined;
}
