export type CredentialsType = {
  email?: String;
  password?: String;
  token?: String;
};

export type AddressType = {
  id: Number;
  userId: Number;
  autonomousRegionId: Number;
  addressSizeSquareMeters: Number;
  addressType: String;
  addressUsagePercentageRange: String;
  addressOwnership?: any;
  streetAddress: String;
  city: String;
  postcode: String;
  countryId: Number;
  moveInDate?: any;
  addressOwnershipDescription?: any;
};
