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
    '/filteredimage',
    async (req: express.Request, res: express.Response) => {
      if (
        req.query &&
        req.query.image_url &&
        typeof req.query.image_url === 'string'
      ) {
        const imageUrl: string = <string>req.query.image_url

        if (!isValidUrl(imageUrl)) {
          return res.status(400).send({ error: 'image_url is invalid' })
        }

        if (!isValidImage(imageUrl)) {
          return res
            .status(422)
            .send({ error: 'image_url is not a valid image' })
        }

        try {
          const image = await filterImageFromURL(imageUrl)
          return res.sendFile(image, async () => {
            await deleteLocalFiles([image])
          })
        } catch (error) {
          return res
            .status(422)
            .send({ error: 'image_url could not be processed' })
        }
      } else {
        res.status(400).send({ error: 'image_url is invalid' })
      }
    }
  )

  // Root Endpoint
  // Displays a simple message to the user
  app.post('/', async (req, res) => {
    res.send('try POST /filteredimage?image_url={{}}')
  })

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`)
    console.log(`press CTRL+C to stop server`)
  })
})()
