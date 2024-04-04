import MainDashBoard from "../MainDashboard/MainDashBoard";

const Navbar = () => {
  return (
    <div className="h-full w-full">
      <div className="bg-white h-[9%] flex items-center p-2 justify-between w-full">
        <h1 className="font-semibold text-lg ml-2">Cloudstorage</h1>
        <div className="flex h-[98%] space-x-4 mr-2">
          <div className="w-[2px] bg-slate-300" />
          <div className="rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-12 w-12 flex items-center justify-center font-semibold">
            TU
          </div>
        </div>
      </div>
      <MainDashBoard/>
    </div>
  );
};

export default Navbar;
