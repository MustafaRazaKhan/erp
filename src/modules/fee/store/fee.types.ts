export type MonthlyObj = {
  monthFee: number | string;
  busFee: number | string;
};

export type MonthListItem = {
  selectedClass: string;
  monthFee: number;
  busFee: number;
};

export type FeeState = {
  feeObj: any;
  monthlyObj: MonthlyObj;
  monthList: MonthListItem[];
  feeList: any[];
  feeDetails: any;
};
