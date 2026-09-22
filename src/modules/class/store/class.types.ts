export type ClassObj = {
  _id?: string;
  name: string;
  no: number;
  section: string;
  // keep your other existing class fields here
};

export type ClassState = {
  loading: boolean;
  classObj: ClassObj;
  classList: ClassObj[];
  studentList: any[];
};
