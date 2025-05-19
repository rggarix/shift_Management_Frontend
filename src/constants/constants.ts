import { type FormObjectModel, type TableHeadersInterface } from '../interfaces/common.interface';
export const strings = {
  submit: 'Submit',
  actions: 'Actions',
  approve: 'Approve',
  reject: 'Reject',
  date: 'Date',
  schduleTime: 'Schedule Slot',
  personPerSlot: 'Persons Per Slot',
  viewDetails: 'View details',
};

export const ADD_SAMPLE_MODEL: FormObjectModel[] = [
  {
    id: 'name',
    value: '',
    placeholder: 'Enter Physician Name',
    label: 'Physician Name',
    type: 'input',
  },
  {
    id: 'departmentId',
    value: '',
    placeholder: 'Select Department Name',
    label: 'Department',
    type: 'dropdown',
    options: [],
    dependency: 'processIds',
  },
  {
    id: 'collectionDate',
    value: '',
    placeholder: 'Enter Collection Date',
    label: 'Collection Date',
    type: 'date',
  },
  {
    id: 'physicianName',
    value: '',
    placeholder: 'Enter Physician Name',
    label: 'Physician Name',
    type: 'input',
  },
  {
    id: 'tissueType',
    value: '',
    placeholder: 'Enter Tissue Type',
    label: 'Tissue Type',
    type: 'input',
  },
  {
    id: 'processIds',
    value: '',
    placeholder: 'Select Process',
    label: 'Select Process',
    type: 'multichip',
    isArray: true,
    multioptions: [],
  },
];

export const tableHeaders: TableHeadersInterface[] = [
  {
    label: 'Staff Name',
    key: 'name',
  },
  {
    label: 'Role',
    key: 'roleName',
  },
  {
    label: 'Contact Number',
    key: 'contactNumber',
  }
];