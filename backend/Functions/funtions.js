const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createFolder(folderName) {
  try {
    const folder = await prisma.folder.create({
      data: {
        name: folderName,
      },
    });
    return folder;
  } catch (error) {
    console.error("Error creating folder:", error);
    throw error;
  }
}

async function addFileToFolder(folderName, fileName, filePath) {
    try {
        const folder = await prisma.folder.findUnique({
            where: {
                name: folderName
            }
        })

        const file = await prisma.file.create({
            data: {
                folder: {
                    connect: {
                        id: folder.id
                    }
                },
                name: fileName,
                path: filePath
            }
        })
        return file;
    } catch (error) {
        console.log("Error while creating file", error)
    }
}

module.exports = {createFolder, addFileToFolder}
