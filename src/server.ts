import express from 'express'
import {
  filterImageFromURL,
  deleteLocalFiles,
  isValidImage,
  isValidUrl
} from './util/util'
;(async () => {
  // Init the Express application
  const app = express()

  // Set the network port
  const port = process.env.PORT || 8082

  // Express parser middleware for get requests from the client
  app.use(express.json())

  // Endpoint to filter an image from a public url
  app.get(
    '/filter-image',
    async (req: express.Request, res: express.Response) => {
      if (
        req.query &&
        req.query.imageUrl &&
        typeof req.query.imageUrl === 'string'
      ) {
        const imageUrl: string = <string>req.query.imageUrl

        if (!isValidUrl(imageUrl)) {
          return res.status(400).send({ error: 'imageUrl is invalid' })
        }

        if (!isValidImage(imageUrl)) {
          return res
            .status(422)
            .send({ error: 'imageUrl is not a valid image' })
        }

        try {
          const image = await filterImageFromURL(imageUrl)
          return res.sendFile(image, async () => {
            await deleteLocalFiles([image])
          })
        } catch (error) {
          return res
            .status(422)
            .send({ error: 'imageUrl could not be processed' })
        }
      } else {
        res.status(200).send({ success: 'The API is up and running. Please provide your url as a parameter in the format: /?imageUrl=http://static.mawingu.dev.s3-website-us-east-1.amazonaws.com/images/ingredient1.jpg ' })
      }
    }
  )

  // Root Endpoint
  // Displays a simple message to the user
  app.post('/', async (req, res) => {
    res.send('try POST /filter-image?imageUrl={{}}')
  })

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`)
    console.log(`press CTRL+C to stop server`)
  })
})()
