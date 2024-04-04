import { EyeOpenIcon, Link1Icon, TriangleRightIcon } from "@radix-ui/react-icons";
import folder from '../../../assets/Light 1px-folder.png'

const DrawerCards = () => {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-32 rounded-lg w-[90%] p-3 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <Link1Icon color="brown" width={24} height={24} />
          <h1 className="font-semibold">Link Name One</h1>
        </div>
        <TriangleRightIcon color="blue" height={23} width={23} />
      </div>

      <div className="ml-6">
        <div className="flex space-x-2 items-center">
            <img src={folder} alt="folder" className="h-6 w-6"/>
            <h1 className="text-xs">Folder of file linked...</h1>
        </div>
        <div className="flex space-x-2 items-center">
            <EyeOpenIcon height={20} width={20} color="brown" className="ml-0.5"/>
            <h1 className="text-xs">10 total views</h1>
        </div>
      </div>
    </div>
  );
};

export default DrawerCards;
