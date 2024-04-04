import folder from '../../../assets/Light 1px-folder@2x.png'
import smallFolder from '../../../assets/Light 1px-folder.png'
import DrawerComp from '../Drawer/DrawerComp';

const renderFolderCards = () => {
    return (
        <div className='bg-white rounded-md h-12 w-72 flex items-center justify-between p-2'>
            <div className='flex space-x-2 items-center'>
                <img src={smallFolder} alt="small" className='h-6 w-6' />
                <h1 className='font-semibold'>Folder name</h1>
            </div>
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
    )
}

const Folders = () => {
  return (
    <div className='space-y-4'>
      <div className="flex space-x-2 items-center">
        <img src={folder} alt="folder" className='h-8 w-8'/>
        <h1 className="font-semibold text-lg">Folders</h1>
      </div>
      <div className='flex justify-between'>
      <div className='flex space-x-4'>
        {renderFolderCards()}
        {renderFolderCards()}
        {renderFolderCards()}
      </div>
      <DrawerComp />
      </div>
    </div>
  );
};

export default Folders;
