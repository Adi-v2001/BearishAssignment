import { Progress } from "@/components/ui/progress";

const CardComponent = ({
  logo,
  text,
  color,
}: {
  logo: string;
  text: string;
  color: string;
}) => {
  return (
    <div className="flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white h-[180px] w-[280px] rounded-lg p-4 space-y-4">
      <div className="flex justify-between w-full items-center">
        <img src={logo} alt="logo" className="h-10 w-10"/>
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
      </div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-sm ml-1">{text}</h1>
        <h1 className="text-slate-400 text-xs">100 files</h1>
      </div>
      <div className="h-full flex flex-col justify-end space-y-2">
        <h1 className="text-xs text-slate-600 mt-auto">100 Gb of 15 Gb used</h1>
        <Progress value={40} indicatorColor={color} className="h-[10px] bg-slate-300"/>
      </div>
    </div>
  );
};

export default CardComponent;
