export interface tableDataType {
  maxRecord: number;
  tableData: any[];
  lovContent: any[];
  lovData: any[];
  lovName: string;
  lovSelected: any;
  tableDataById: any;
  tableDataByIdPopUp: any;
  tableContent: any;
  operations: any[];
  onChangeItem: any[];
  onChangeColumn: string;
  createModal: boolean;
  operationListForm: any[];
  indexTemporary: number;
  tableTemporary: any[];
  searchPagingForm: any[];
  toolbarTableState: any;
  fileUpload: any;
  lovColumn: string;
  status: {
    getTableDataSearchPaging: "idle" | "loading" | "succeeded" | "failed";
    getLovData: "idle" | "loading" | "succeeded" | "failed";
    getTableContent: "idle" | "loading" | "succeeded" | "failed";
    deleteTableData: "idle" | "loading" | "succeeded" | "failed";
    handleOperation: "idle" | "loading" | "succeeded" | "failed";
  };
  error: {
    getTableDataSearchPaging: string | null;
    getLovData: string | null;
    getTableContent: string | null;
    deleteTableData: string | null;
    handleOperation: {};
  };
}

export interface sideBarMenuType {
  sideBarMenu: any[];
  status: {
    getSidebarMenu: "idle" | "loading" | "succeeded" | "failed";
  };
  error: {
    getSidebarMenu: string | null;
  };
  sidebarWidth: number;
  sideBarOpen: boolean;
  init_param: any;
}

export interface profileSelected {
  name: string;
  division: string;
  role: string;
}

export interface viewState {
  tableCheckedItem: string[];
  lovModal: boolean;
  dialogBoxModal: boolean;
  dialogBoxContent: any;
  dialogBoxInitial: any;
  modalUpload: boolean;
  titleApps: string;
  subTitleApps: string;
  modalLogout: boolean;
  darkMode: boolean;
  modalApplicationSetup: boolean;
  modalTableSetting: boolean;
  modalBiSummary: boolean;
  profileSelected: profileSelected;
  modalManagementReport: boolean;
  selectedMenu: any;
  biData: any;
  userState: any;
  modalCompany: boolean;
  color: {
    background_light_primary: string;
    background_light_secondary: string;
    background_dark_primary: string;
    background_dark_secondary: string;
    icon_header: string;
    chat_bubble_dark_1: string;
    chat_bubble_dark_2: string;
    text_light_primary: string;
    text_dark_primary: string;
    text_light_secondary: string;
    text_dark_secondary: string;
    brand_hrk: string;
  };
}

type ColorUpdate = {
  [K in keyof viewState["color"]]?: string; // Ini membatasi kunci ke yang ada di dalam `color` dan nilai menjadi string
};
