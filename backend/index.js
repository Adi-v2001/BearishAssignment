const dotenv = require('dotenv');
const {createFolder, addFileToFolder} = require('./Functions/funtions')
dotenv.config()

const makeFileAndFolder = async () => {
    try {
        //Creating a folder first
        const folder = await createFolder('TestFolder'); //Folder name
        console.log("Folder created", folder);
        //Providing name of the folder to which the file is to be added
        const file = await addFileToFolder('TestFolder', 'TestFile', 'C:/Assignment/dummyPath.exe') //Foldername, filename, path of the file
        console.log("File created", file)
    } catch (err) {
        console.log("An error occured while creating folder", err)
    }
}

makeFileAndFolder();