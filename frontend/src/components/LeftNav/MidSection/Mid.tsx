import { GearIcon } from "@radix-ui/react-icons";
import drive from "../../../assets/Drive.png";
import bearish from "../../../assets/Bearish OS Logo_Orange@2x.png"
import dropbox from "../../../assets/Dropbox.png";

const returnColumn = (logo: string, text: string) => {
  return (
    <div className="flex justify-between items-center w-[95%]">
      <div className="flex space-x-2 items-center">
        <img src={logo} alt="logo" className="h-6 w-6"/>
        <h1 className="font-semibold text-slate-400 text-sm">{text}</h1>
      </div>
      <GearIcon />
    </div>
  );
};

const Mid = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-semibold">Cloud Storage</h1>
      {returnColumn(bearish, 'Bearish OS')}
      {returnColumn(drive, "Google Drive")}
      {returnColumn(dropbox, "Dropbox")}
    </div>
  );
};

export default Mid;
