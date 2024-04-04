import { GearIcon } from "@radix-ui/react-icons";
import file from "../../../assets/Light 1px-document@2x.png";
import coloredFile from "../../../assets/coloredFile.png";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const allData = [
  {
    name: () => {
      return (
        <div className="flex space-x-2">
          <img src={coloredFile} alt="file" className="h-6 w-6" />
          <h1>Name of the file</h1>
        </div>
      );
    },
    owner: "Name",
    lastOpened: "6 days ago",
  },
  {
    name: () => {
      return (
        <div className="flex space-x-2">
          <img src={coloredFile} alt="file" className="h-6 w-6" />
          <h1>Name of the file</h1>
        </div>
      );
    },
    owner: "Name",
    lastOpened: "6 days ago",
  },
  {
    name: () => {
      return (
        <div className="flex space-x-2">
          <img src={coloredFile} alt="file" className="h-6 w-6" />
          <h1>Name of the file</h1>
        </div>
      );
    },
    owner: "Name",
    lastOpened: "6 days ago",
  },
  {
    name: () => {
      return (
        <div className="flex space-x-2">
          <img src={coloredFile} alt="file" className="h-6 w-6" />
          <h1>Name of the file</h1>
        </div>
      );
    },
    owner: "Name",
    lastOpened: "6 days ago",
  },
];

const renderTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Last Opened</TableHead>
          <TableHead className="flex items-center">{<GearIcon />}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allData.map((data, index) => (
          <TableRow key={index} className=" bg-white">
            <TableCell className="font-medium">{data.name()}</TableCell>
            <TableCell>{data.owner}</TableCell>
            <TableCell>{data.lastOpened}</TableCell>
            <TableCell className="text-right">
              <svg
                id="Light_1px_more_horizontal"
                data-name="Light 1px/more_horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <rect
                  id="Light_1px_more_horizontal_background"
                  data-name="Light 1px/more_horizontal background"
                  width="20"
                  height="20"
                  fill="#fff"
                  opacity="0"
                />
                <path
                  id="Combined_Shape"
                  data-name="Combined Shape"
                  d="M13.854,5.209c-1.091,0-1.979-1.168-1.979-2.6S12.763,0,13.854,0s1.979,1.168,1.979,2.6S14.945,5.209,13.854,5.209Zm0-4.167A1.416,1.416,0,0,0,12.667,2.6a1.415,1.415,0,0,0,1.187,1.562A1.416,1.416,0,0,0,15.042,2.6,1.416,1.416,0,0,0,13.854,1.042ZM7.917,5.209c-1.091,0-1.979-1.168-1.979-2.6S6.825,0,7.917,0,9.9,1.168,9.9,2.6,9.008,5.209,7.917,5.209Zm0-4.167A1.416,1.416,0,0,0,6.729,2.6,1.416,1.416,0,0,0,7.917,4.166,1.416,1.416,0,0,0,9.1,2.6,1.416,1.416,0,0,0,7.917,1.042ZM1.979,5.209C.888,5.209,0,4.04,0,2.6S.888,0,1.979,0,3.959,1.168,3.959,2.6,3.071,5.209,1.979,5.209Zm0-4.167A1.416,1.416,0,0,0,.792,2.6,1.416,1.416,0,0,0,1.979,4.166,1.415,1.415,0,0,0,3.166,2.6,1.416,1.416,0,0,0,1.979,1.042Z"
                  transform="translate(2.083 7.785)"
                />
              </svg>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const Files = () => {
  return (
    <div className="space-y-2">
      <div className="flex space-x-2 items-center">
        <img src={file} alt="file" className="h-8 w-8" />
        <h1 className="font-semibold text-lg">Files</h1>
      </div>
      {renderTable()}
    </div>
  );
};

export default Files;
