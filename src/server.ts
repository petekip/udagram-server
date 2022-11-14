import express from 'express'
import {
  filterImageFromURL,
  deleteLocalFiles,
  isValidImage,
  isValidUrl
} from './util/util'
;(async () => {
  // Init the Express application configuration
  const app = express()

  // Set the network port
  const port = process.env.PORT || 8082

  // Express parser middleware for get requests from the client
  app.use(express.json())

  // Endpoint to filter an image from a public static image url
  app.get(
    '/filteredimage',
    async (req: express.Request, res: express.Response) => {
      if (
        req.query &&
        req.query.image_url &&
        typeof req.query.image_url === 'string'
      ) {
        const image_url: string = <string>req.query.image_url

        if (!isValidUrl(image_url)) {
          return res.status(400).send({ error: 'Image URL is invalid' })
        }

        if (!isValidImage(image_url)) {
          return res
            .status(422)
            .send({ error: 'The image formart is incrorrect' })
        }

        try {
          const image = await filterImageFromURL(image_url)
          return res.sendFile(image, async () => {
            await deleteLocalFiles([image])
          })
        } catch (error) {
          return res
            .status(422)
            .send({ error: 'The image could not be processed' })
        }
      } else {
        res.status(400).send({ error: 'Please provide your url as a parameter in the format: /?image_url=http://static.mawingu.dev.s3-website-us-east-1.amazonaws.com/images/ingredient1.jpg ' })
      }
    }
  )

  // Healthcheck enpoint for AWS Beanstalk loadbalancer
  app.get('/health-check', (req, res) => {
    res.status(200)
    res.send({success:'The app is up and running -- heath checks'})
  })

  // Root Endpoint
  app.post('/', async (req, res) => {
    res.send('try POST /filteredimage?image_url={{}}')
  })

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`)
    console.log(`press CTRL+C to stop server`)
  })
})()
