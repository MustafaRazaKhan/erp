export type ClassObj = {
  _id?: string;
  className: string;
  roomNo: number;
  sectionName: string;
  // keep your other existing class fields here
};

export type ClassState = {
  loading: boolean;
  classObj: ClassObj;
  classList: ClassObj[];
  studentList: any[];
};
