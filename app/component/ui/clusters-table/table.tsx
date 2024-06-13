"use client";

import React from "react";
import { SearchIcon } from "./searchicon";

import {
  Table,
  Input,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
} from "@nextui-org/react";
import { Link } from "lucide-react";

const rows = [
  {
    key: "1",
    status: "1% Completed",
    clusterid: "jhsfwsayfewoief9873k3jr",
    typecomputehrsremaining: "1 Hr 30 Mins",
    chipgpus: "200Gps",
  },
  {
    key: "2",
    status: "2% Completed",
    clusterid: "jhsfwsayfewoief9873k3jr",
    typecomputehrsremaining: "1 Hr 30 Mins",
    chipgpus: "200Gps",
  },
  {
    key: "3",
    status: "3% Completed",
    clusterid: "jhsfwsayfewoief9873k3jr",
    typecomputehrsremaining: "1 Hr 30 Mins",
    chipgpus: "200Gps",
  },
  {
    key: "4",
    status: "4% Completed",
    clusterid: "jhsfwsayfewoief9873k3jr",
    typecomputehrsremaining: "1 Hr 30 Mins",
    chipgpus: "200Gps",
  },
  {
    key: "5",
    status: "5% Completed",
    clusterid: "jhsfwsayfewoief9873k3jr",
    typecomputehrsremaining: "1 Hr 30 Mins",
    chipgpus: "200Gps",
  },
  {
    key: "6",
    status: "6% Completed",
    clusterid: "jhsfwsayfewoief9873k3jr",
    typecomputehrsremaining: "1 Hr 30 Mins",
    chipgpus: "200Gps",
  },
  {
    key: "7",
    status: "7% Completed",
    clusterid: "jhsfwsayfewoief9873k3jr",
    typecomputehrsremaining: "1 Hr 30 Mins",
    chipgpus: "200Gps",
  },
  {
    key: "8",
    status: "8% Completed",
    clusterid: "jhsfwsayfewoief9873k3jr",
    typecomputehrsremaining: "1 Hr 30 Mins",
    chipgpus: "200Gps",
  },
  {
    key: "9",
    status: "9% Completed",
    clusterid: "jhsfwsayfewoief9873k3jr",
    typecomputehrsremaining: "1 Hr 30 Mins",
    chipgpus: "200Gps",
  },
  {
    key: "10",
    status: "10% Completed",
    clusterid: "jhsfwsayfewoief9873k3jr",
    typecomputehrsremaining: "1 Hr 30 Mins",
    chipgpus: "200Gps",
  },
];

const columns = [
  {
    key: "status",
    label: "STATUS",
  },
  {
    key: "clusterid",
    label: "CLUSTER ID",
  },
  {
    key: "typecomputehrsremaining",
    label: "COMPUTE HRS REMAINING",
  },
  {
    key: "chipgpus",
    label: "CHIP/GPUS",
  },
];

export default function TableDemo() {
  return (
    <>
      <div className="m-10 border p-5 rounded-2xl shadow-lg">
        <div className=" flex items-center gap-5 justify-between">
          <div className="w-full ">
            <Input
              isClearable
              className="w-full mb-4 shadow-lg overflow-hidden rounded-2xl"
              placeholder="Search..."
              startContent={<SearchIcon />}
            />
          </div>
          <div className="text-sm gap-5 flex items-center w-[670px] bg-[#f4f4f5] p-3 rounded-2xl mb-5 shadow-lg">
            <a href="#">Show all</a>
            <a href="#" className=" flex items-center gap-1">
              {" "}
              <svg
                className=" w-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(79,227,194,1)"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
              </svg>
              Running
            </a>
            <a href="#" className=" flex items-center gap-1">
              <svg
                className=" w-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
              </svg>
              Completed
            </a>
            <a href="#" className=" flex items-center gap-1">
              <svg
                className=" w-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,0,0,1)"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
              </svg>
              Failed
            </a>
            <a href="#" className=" flex items-center gap-1">
              <svg
                className=" w-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(102,102,102,1)"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
              </svg>
              Destroyed
            </a>
          </div>
        </div>

        <Table
          className="overflow-hidden border rounded-2xl shadow-lg
        "
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn className="bg-white" key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>

          <TableBody className=" p-0" items={rows}>
            {(item) => (
              <TableRow className="border-y border-gray-200" key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
