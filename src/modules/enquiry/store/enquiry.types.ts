export type EnquiryObj = {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  comment?: string;
  message: string;
  status?: string;
};

export type EnquiryState = {
  loading: boolean;
  enquiryObj: EnquiryObj;
  enquiryList: EnquiryObj[];
  totalEnquiries?: number;
  error?: string;
};
