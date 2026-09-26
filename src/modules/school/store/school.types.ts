export type SchoolObj = {
  name: string;
  code: string;
  contact: string;
  email: string;
  address: string;
  photo: File | null;
};

export type SchoolState = {
  loading: boolean;
  schoolObj: SchoolObj;
  schoolList: SchoolObj[];
};
