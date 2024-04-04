import drive from '../../../assets/Drive.png'
import dropbox from '../../../assets/Dropbox.png'
import bearish from '../../../assets/Bearish OS Logo_Orange@2x.png'

import CardComponent from "./CardComponent"

const MyCloudStorages = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-semibold">
        My Cloud Storages
      </h1>
      <div className="flex space-x-6">
        <CardComponent logo={drive} text='Google Drive' color='bg-yellow-600'/>
        <CardComponent logo={dropbox} text='Dropbox' color='bg-blue-800'/>
        <CardComponent logo={bearish} text='Box' color='bg-green-800'/>
      </div>
    </div>
  )
}

export default MyCloudStorages