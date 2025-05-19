import type { Option } from "../components/Chip/Chip";

export interface User {
  email: string;
  role: string;
  name?: string;
  username?: string;
  _id: string;
}

export interface StatusDropdown
    { label: string; value: string }

export interface FormObjectModel{
    id:string,
    value?: string,
    placeholder?: string,
    label: string,
    type: string,
    options?: StatusDropdown[]  ,
    multioptions?:StatusDropdown[]  |Option[] | undefined,
    isArray?:boolean,
    inputType?:string,
    dependency?: string;
  };

  
export interface TableHeadersInterface {
  label: string,
  key: string
}

export interface StaffActionsInterface {
    type: string,
    label: string,
    function: (data: AllStaffDataInterface) => void
    disabled?: boolean
}

 export interface AllStaffDataInterface {
  _id?:string;
    name?: string;
    roleId?: string;
    contactNumber?: number;
    shiftPrefrenceId?: string;
    roleName?: string;
}