import { Pencil1Icon } from "@radix-ui/react-icons";
import bearish from "../../assets/Bearish OS Logo_Orange@2x.png";

const Header = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <img src={bearish} alt="logo" className="h-10 w-10" />
        <h1 className="font-semibold">Company Name</h1>
      </div>
      <div className="flex space-x-3 items-center justify-start bg-amber-800 rounded-lg text-white w-[50%] h-10 p-2">
      <Pencil1Icon color="white"/>
      <h1>Create New</h1>
      </div>
    </div>
  );
};

export default Header;
