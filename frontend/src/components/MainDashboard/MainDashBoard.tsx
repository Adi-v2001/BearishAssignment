import Files from "./Files/Files"
import Folders from "./Folders/Folders"
import MyCloudStorages from "./MyCloudStorages/MyCloudStorages"

const MainDashBoard = () => {
  return (
    <div className="p-4 space-y-8">
        <MyCloudStorages />
        <Folders />
        <Files />
    </div>
  )
}

export default MainDashBoard