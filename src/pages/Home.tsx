import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Pagination,
  Select,
  Typography,
  type SelectChangeEvent
} from "@mui/material";
import DynamicTable from "../components/Table/TableComponent";
// import Forms from "../components/Layout/Form";
import {tableHeaders} from '../constants/constants'
import type { AllStaffDataInterface } from "../interfaces/common.interface";
import { BASE_URL } from "../constants/URL";
import axios from "axios";

const Home: React.FC = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [staffModalOpen, setStaffModalOpen] = useState<boolean>(false);
  const [staffData, setStaffData] = useState<AllStaffDataInterface[]>(false);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<string>('10');
  const [count, setcount] = useState<number>(0);

  useEffect(() => {
    getAllStaffData();
  },[page,limit])

  const getAllStaffData = async () => {
    const res = await axios.get(`${BASE_URL}/api/staff/getAllStaff?limit=${limit}&page=${page}`);
    console.log(res?.data?.data?.data)
    setStaffData(res?.data?.data?.data)
    console.log(res);
  }

  const handleAddStaff = () => {
    setStaffModalOpen(true);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    console.log(event);
    setPage(value);
  };

  const handleChangePageSize = (event: SelectChangeEvent) => {
    console.log('event,', event.target.value as string);
    setLimit(event.target.value as string);
    setPage(1);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full justify-between border-b-2 mb-5 h-[10%]">
        <div className="text-[30px]">All Staff</div>
        <IconButton
          onClick={handleAddStaff}
          style={{ color: "black", borderColor: "white" }}
        >
          Add Staff
        </IconButton>
      </div>
      <div className="flex w-full flex-1 justify-between border-0 mb-5 overflow-auto rounded-[10px]">
            <DynamicTable<AllStaffDataInterface> data={staffData} headers={tableHeaders} />
          </div>

          <div className="flex flex-row h-[4%] justify-center align-middle">
            <FormControl>
              <InputLabel id="demo-simple-select-label">Page Size</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={limit}
                label="Page Size"
                onChange={handleChangePageSize}
                style={{
                  width: '100px',
                  height: '40px',
                  color: 'black',
                }}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
            <Pagination count={count} page={page} onChange={handleChangePage} />
          </div>
      <Modal
        open={staffModalOpen}
        onClose={() => {
          setStaffModalOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Add New Staff</Typography>
          <div className="flex flex-col w-full h-full justify-center p-5">
            <div className="flex w-full h-[500px] overflow-auto mb-10">
              {/* <Forms
                fields={FormModelData}
                onSubmitFn={onSubmitFn}
                onContextualChange={handleContexualChange}
              /> */}
            </div>
            <div className="flex flex-row w-full">
              <Button
                onClick={() => {
                  setStaffModalOpen(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
