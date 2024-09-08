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

export type Error = {
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

export const resData: TDataResponse = {
  search_id: "4e85ec56-341c-4a72-9b86-760baef14307",
  search_consumed_credits: 1,
  credits_left: 893,
  next: "1725531845000___a6c170c904a9ec9e1a6e244f9f747508",
  total_items_count: 33491,
  items_count: 10,
  data: [
    {
      id: "726202d52bae99f07f0977556e0fef1c",
      log_checksum: "726202d52bae99f07f0977556e0fef1c",
      log_file_name:
        "AO[76CEC2730B0BB3B5056C9F5747186538] [2024-09-06T14_00_21.4936473+03_00]",
      stealer_type: "RedLine",
      computer_information: {
        build_id: "logs cloud fate (supp - @ggfate)",
        infection_date: "2024-09-06T11:00:21Z",
        ip: "196.249.245.30",
        malware_path:
          "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
        username: "Achill DIP-CPPL",
        country: "AO",
        os: "Windows 11 Home Single Language x64",
        hwid: "76CEC2730B0BB3B5056C9F5747186538",
      },
      credentials: [
        {
          url: "https://www.google.com/android/find/",
          creds: [
            {
              username: "sergio",
              password: "230788",
            },
          ],
        },
      ],
    },
    {
      id: "c3d73a20188a761474c243b0227cc9da",
      log_checksum: "c3d73a20188a761474c243b0227cc9da",
      log_file_name:
        "LKSR177FN4QVOSMAE87GI3BVLM2JS4X19_2024_09_06T15_40_45_733322",
      stealer_type: "RedLine 12",
      computer_information: {
        build_id: "https://t.me/+uuz8-qLUNeU2ZmI0",
        infection_date: "2024-09-06T09:48:07Z",
        ip: "123.231.111.13",
        malware_path:
          "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\cfqYR7DCPx.exe",
        username: "SICT",
        country: "LK",
        os: "Windows 10 Pro x64",
        hwid: "FE0A5FB26FBBA16277D8D70895CBE4F0",
      },
      credentials: [
        {
          url: "https://www.google.com/",
          creds: [
            {
              username: "Honor X5 Plus",
              password: "sanjeewa123",
            },
            {
              username: "sandunnilmini45@gmail.com",
              password: "0774403982",
            },
            {
              username: "myphone",
              password: "NE0_f!qe60yDnmS",
            },
            {
              username: "sanjeewa89",
              password: "Ar_o5r6ze7DbwyR",
            },
            {
              username: "Galaxy J4+",
              password: "h",
            },
          ],
        },
      ],
    },
    {
      id: "004f12e4631e84e615bba0026889dcba",
      log_checksum: "004f12e4631e84e615bba0026889dcba",
      log_file_name:
        "DO[4B2FD356E5600DA8B641DE7D1DAF3271] [2024-09-06T05_03_57.2766977+03_00]",
      stealer_type: "RedLine 56",
      computer_information: {
        build_id: "Premium logs - @fatetraffic | support - @ggfate",
        infection_date: "2024-09-06T02:03:57Z",
        ip: "38.51.49.199",
        malware_path:
          "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
        username: "rony0331",
        country: "DO",
        os: "Windows 11 Pro x64",
        hwid: "4B2FD356E5600DA8B641DE7D1DAF3271",
      },
      credentials: [
        {
          url: "https://www.google.com/android/devicemanager",
          creds: [
            {
              username: "UNKNOWN",
              password: "qwertyuiop",
            },
          ],
        },
      ],
    },
    {
      id: "7eddb27a83b0ea6403948b6f951278aa",
      log_checksum: "7eddb27a83b0ea6403948b6f951278aa",
      log_file_name:
        "MX[27422A38A3E96D8E5EEAF2C8C7CE64AA] [2024-09-06T03_23_00.5323760+03_00]",
      stealer_type: "RedLine",
      computer_information: {
        build_id: "Premium logs - @fatetraffic | support - @ggfate",
        infection_date: "2024-09-06T00:23:00Z",
        ip: "189.216.18.228",
        malware_path:
          "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
        username: "cabal",
        country: "MX",
        os: "Windows 10 Home x64",
        hwid: "27422A38A3E96D8E5EEAF2C8C7CE64AA",
      },
      credentials: [
        {
          url: "https://www.google.com/android/find/",
          creds: [
            {
              username: "UNKNOWN",
              password: "melapelanputos",
            },
          ],
        },
      ],
    },
    {
      id: "541c578c1f5c48a33df0e79aeae6029d",
      log_checksum: "541c578c1f5c48a33df0e79aeae6029d",
      log_file_name:
        "BH[08ED21052F40E14D4176A5F7AE2E30E5] [2024-09-06T02_03_27.8312687+03_00]",
      stealer_type: "RedLine",
      computer_information: {
        build_id: "Premium logs - @fatetraffic | support - @ggfate",
        infection_date: "2024-09-05T23:03:27Z",
        ip: "37.131.110.200",
        malware_path:
          "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
        username: "Administrator",
        country: "BH",
        os: "Windows 10 Pro x64",
        hwid: "08ED21052F40E14D4176A5F7AE2E30E5",
      },
      credentials: [
        {
          url: "https://www.google.com/android/find/",
          creds: [
            {
              username: "UNKNOWN",
              password: "8998",
            },
          ],
        },
      ],
    },
    {
      id: "0622cd1eb30596e5b87f2867a0007392",
      log_checksum: "0622cd1eb30596e5b87f2867a0007392",
      log_file_name:
        "PK[DCFA24C6E7642E47648D247B2011EAFE] [2024-09-05T21_13_53.6383524+03_00]",
      stealer_type: "RedLine",
      computer_information: {
        build_id: "logs cloud fate (support - @ggfate)",
        infection_date: "2024-09-05T18:13:53Z",
        ip: "175.107.247.158",
        malware_path: "C:\\Users\\kk\\AppData\\Roaming\\3DsB0ZAH4e.exe",
        username: "kk",
        country: "PK",
        os: "Windows 10 Pro x64",
        hwid: "DCFA24C6E7642E47648D247B2011EAFE",
      },
      credentials: [
        {
          url: "https://www.google.com/android/find/",
          creds: [
            {
              username: "UNKNOWN",
              password: "12345",
            },
          ],
        },
      ],
    },
    {
      id: "4ea74e6ba1f786f8015997244c6940c5",
      log_checksum: "4ea74e6ba1f786f8015997244c6940c5",
      log_file_name:
        "ES[E617F37921D5A0B398E900E7B8BF3147] [2024-09-05T19_45_50.0928823+03_00]",
      stealer_type: "RedLine",
      computer_information: {
        build_id: "Premium logs - @fatetraffic | support - @ggfate",
        infection_date: "2024-09-05T16:45:50Z",
        ip: "82.159.151.160",
        malware_path:
          "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
        username: "arbel",
        country: "ES",
        os: "Windows 11 Pro x64",
        hwid: "E617F37921D5A0B398E900E7B8BF3147",
      },
      credentials: [
        {
          url: "https://www.google.com/",
          creds: [
            {
              username: "ea8bem@gmail.com",
              password: "05berta1937",
            },
          ],
        },
      ],
    },
    {
      id: "af1171ba9fa5b192b83b4833ab5f01bb",
      log_checksum: "af1171ba9fa5b192b83b4833ab5f01bb",
      log_file_name:
        "ID[10268872AE57BC07471AE5E87DAF98E8] [2024-09-05T18_16_09.6556477+03_00]",
      stealer_type: "RedLine",
      computer_information: {
        build_id: "Premium logs - @fatetraffic | support - @ggfate",
        infection_date: "2024-09-05T15:16:09Z",
        ip: "140.213.181.79",
        malware_path:
          "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
        username: "Intel",
        country: "ID",
        os: "Windows 10 Pro x64",
        hwid: "10268872AE57BC07471AE5E87DAF98E8",
      },
      credentials: [
        {
          url: "https://www.google.com/",
          creds: [
            {
              username: "Oppo A57",
              password: "aldhylollol",
            },
          ],
        },
        {
          url: "https://www.google.com/android/find",
          creds: [
            {
              username: "UNKNOWN",
              password: "terkunci",
            },
          ],
        },
      ],
    },
    {
      id: "0288e806553f71a15b64f7063b361129",
      log_checksum: "0288e806553f71a15b64f7063b361129",
      log_file_name:
        "BR4VWU65HYD2DAVN3LLDZQWLCU8LX6GWW_2024_09_05T12_32_92_979283",
      stealer_type: "RedLine",
      computer_information: {
        build_id: "https://t.me/+uuz8-qLUNeU2ZmI0",
        infection_date: "2024-09-05T11:31:07Z",
        ip: "170.80.83.188",
        malware_path:
          "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
        username: "HELANE",
        country: "BR",
        os: "Windows 7 Professional x64",
        hwid: "6C0E315ADE9E429F9F5D4B0836AA9708",
      },
      credentials: [
        {
          url: "https://google.com/",
          creds: [
            {
              username: "matheussousa123321m@gmail.com",
              password: "15092010@",
            },
          ],
        },
      ],
    },
    {
      id: "a6c170c904a9ec9e1a6e244f9f747508",
      log_checksum: "a6c170c904a9ec9e1a6e244f9f747508",
      log_file_name:
        "VN[12003B9FF05C979D9DCD20E0807DB51C] [2024-09-05T13_24_05.5934783+03_00]",
      stealer_type: "RedLine",
      computer_information: {
        build_id: "logs cloud fate (supp - @ggfate)",
        infection_date: "2024-09-05T10:24:05Z",
        ip: "112.197.115.156",
        malware_path:
          "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\RegAsm.exe",
        username: "PC",
        country: "VN",
        os: "Windows 10 Pro x64",
        hwid: "12003B9FF05C979D9DCD20E0807DB51C",
      },
      credentials: [
        {
          url: "https://google.com/",
          creds: [
            {
              username: "hoquocviet041969@gmail.com",
              password: "dgge8002",
            },
          ],
        },
      ],
    },
  ],
};
