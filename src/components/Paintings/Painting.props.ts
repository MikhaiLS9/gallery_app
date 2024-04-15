interface IPaintings1 {
    authorId: string;
    created: string;
    id: number;
    imageUrl: string;
    locationId: string;
    name: string;
  }
  
 export interface IGetPaintings {
    paintings: IPaintings1[]
  }