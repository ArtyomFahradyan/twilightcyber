// For preventing any warning if it's really need
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type TAny = any;

export type TGetDataRequestBody = {
  domains: string[];
  infection_date_from?: string;
  infection_date_to?: string;
  size?: number;
  next?: string;
};

export type TApiError = {
  request_id: string;
  error_message: string;
  details: [
    {
      msg: string;
      type: string;
    }
  ];
};

export type Credential = {
  url: string;
  creds: {
    username: string;
    password: string;
  }[];
};
export type TComputerInfo = {
  build_id: string;
  infection_date: string;
  ip: string;
  malware_path: string;
  username: string;
  country: string;
  os: string;
  hwid: string;
};

export type TLogObject = {
  id: string;
  log_checksum: string;
  log_file_name: string;
  stealer_type: string;
  computer_information: TComputerInfo;
  credentials: Credential[];
};

export type TDataResponse = {
  search_id: string;
  search_consumed_credits: number;
  credits_left: number;
  next: string;
  total_items_count: number;
  items_count: number;
  data: TLogObject[];
};
