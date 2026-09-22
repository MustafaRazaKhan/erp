export type TransportType = {
  _id?: string;

  transportId: string;

  vehicleType: "" | "bus" | "van" | "car" | "other";

  registrationNumber: string;

  vehicleModel?: string;

  seatingCapacity: number | null;

  // Driver information
  name: string;

  phone: string;

  licenseNumber: string;
};

export type TransportState = {
  loading: boolean;
  transportObj: TransportType;
  transportList: TransportType[];
};
