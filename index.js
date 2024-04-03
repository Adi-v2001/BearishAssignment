const dotenv = require('dotenv');
const {createFolder, addFileToFolder} = require('./Functions/funtions')
dotenv.config()

const makeFileAndFolder = async () => {
    try {
        //Creating a folder first
        const folder = await createFolder('TestFolder');
        console.log("Folder created", folder);
        const file = await addFileToFolder('TestFolder', 'TestFile', 'C:/Assignment/dummyPath.exe')
        console.log("File created", file)
    } catch (err) {
        console.log("An error occured while creating folder", err)
    }
}

makeFileAndFolder();