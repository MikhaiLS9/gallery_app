import axios, { AxiosError } from "axios";
import { IAuthors } from "../../global_interface/authors.interface";

export const getAuthorsAxios =  async (url: string,setgetAuthors: React.Dispatch<React.SetStateAction<IAuthors[]>>
  ) => {
    try {
      const { data } = await axios.get(url);
      setgetAuthors(data);
    } catch (e) {
      const error = e as AxiosError;
      console.log(error);
      return;
    }
  }

