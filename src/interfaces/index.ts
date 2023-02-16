export interface Categories {
  name: string;
  id: string;
  path: string;
}
export interface Links {
  name: string;
  count: string;
  paths: string;
}

// export interface IBook {
//   author?: string;
//   year?: number;
//   title?: string | undefined;
//   booked?: string;
//   isBooked?: boolean;
//   rating?: number;
//   listType?: string;
//   images?: string[] | undefined;
//   category?: string;
// }
export interface IState {
  burger: any;
  burgerSet: boolean;
}
export interface IAcordion {
  acardion: any;
  acardionSet: boolean;
}

export interface IBooks {
  issueYear?: string;
  rating?: number;
  title?: string;
  authors?: string[];
  image?: {
    url: string[];
  };
  categories?: string[];
  id?: number;
  booking?: {
    id: number;
    order: boolean;
    dateOrder: string;
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
  };
  delivery?: {
    id: number;
    handed: boolean;
    dateHandedFrom: string;
    dateHandedTo: string;
    recipientId: number;
    recipientFirstName: string;
    recipientLastName: string;
  };
  histories?: [
    {
      id: number;
      userId: number;
    }
  ];
}

export interface BooksState {
  books: IBooks[];
  loading: boolean;
  error: null | string;
}

// export interface IBook {
//   issueYear?: string;
//   rating?: number;
//   title?: string;
//   authors?: string[];
//   images?: BookImg[];
//   // images?: {
//   //   url: string[];
//   // };
//   categories?: string[];
//   id?: number;
//   booking?: {
//     id: number;
//     order: boolean;
//     dateOrder: string;
//     customerId: number;
//     customerFirstName: string;
//     customerLastName: string;
//   };
//   delivery?: {
//     id: number;
//     handed: boolean;
//     dateHandedFrom: string;
//     dateHandedTo: string;
//     recipientId: number;
//     recipientFirstName: string;
//     recipientLastName: string;
//   };
//   histories?: [
//     {
//       id: number;
//       userId: number;
//     }
//   ];
// }
export interface IBook {
  id?: number;
  title?: string;
  rating?: number;
  issueYear?: string;
  description?: string;
  publish?: string;
  pages?: string;
  cover?: string;
  weight?: string;
  format?: string;
  ISBN?: string;
  producer?: string;
  authors?: string[];
  images?: BookImg[];
  categories?: string[];
  comments?: BookComments[];
  booking?: {
    id: number;
    order: boolean;
    dateOrder: string;
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
  };
  delivery?: {
    id: number;
    handed: boolean;
    dateHandedFrom: string;
    dateHandedTo: string;
    recipientId: number;
    recipientFirstName: string;
    recipientLastName: string;
  };
  histories?: [
    {
      id: number;
      userId: number;
    }
  ];
}

export interface BookImg {
  url: string[];
}

export interface BookComments {
  id: number;
  rating: number;
  text: string;
  createdAt: string;
  user: BookCommentsUser;
}

export interface BookCommentsUser {
  commentUserId: number;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}
