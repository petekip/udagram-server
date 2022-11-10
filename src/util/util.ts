import fs from 'fs'
import Jimp = require('jimp')

export async function filterImageFromURL (inputURL: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    Jimp.read(inputURL)
      .then(async (photo: any) => {
        const outpath =
          '/tmp/filtered.' + Math.floor(Math.random() * 2000) + '.jpg'
        await photo
          .resize(300,Jimp.AUTO) // resize
          .quality(90) // set JPEG quality
          .greyscale() // set greyscale
          //  await photo.write(`./public/uploads/${req.body.photo}`);
          .write(__dirname + outpath, () => {
            resolve(__dirname + outpath)
          })
      })
      .catch((error: any) => {
        reject(error)
      })
  })
}

export async function deleteLocalFiles (files: Array<string>) {
  for (let file of files) {
    fs.unlinkSync(file)
  }
}

export const isValidImage = (imageUrl: string) => {
  return imageUrl.match(/\.(jpeg|jpg|gif|png)$/)
}

export const isValidUrl = (imageUrl: string) => {
  try {
    new URL(imageUrl)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
