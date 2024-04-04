import { SizeIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import { Drawer } from "vaul";
import DrawerCards from "./DrawerCards";
import bear from '../../../assets/Screenshot 2024-04-05 020750.png'

const DrawerComp = () => {
  return (
    <Drawer.Root direction="right">
    <Drawer.Trigger asChild>
      <div className='absolute right-4 top-[370px] rounded-xl h-20 w-8 bg-black hover:bg-slate-900 cursor-pointer flex items-center justify-center'>
        <TriangleRightIcon color="white" height={30} width={30}/>
      </div>
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full w-[330px] mt-24 fixed bottom-0 right-0">
        <div className="p-6 space-y-6 overflow-auto">
          <div className="flex justify-end">
            <div className="space-y-2 mr-auto">
              <h1 className="font-semibold">Cloud Analytics</h1>
              <h1 className="text-xs text-slate-500">5 active analytic links</h1>
            </div>
            <SizeIcon />
          </div>
          <div className="space-y-4">
            <DrawerCards/>
            <DrawerCards/>
            <DrawerCards/>
          </div>
          <img src={bear} alt="bear" />
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
  )
}

export default DrawerComp
