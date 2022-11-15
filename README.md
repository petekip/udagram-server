# Udagram: Server App

> This app provides an endpoint built on NodeJs for filtering images and turning them into greyscale.
This is a backend application for processing images by resizing and turning them into greyscale. You can either directly append a URL on the end point or use the client side application to upload your image and the application will generate the greyscale image side-by-side

![](https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg)
![](https://raw.githubusercontent.com/petekip/petekip.github.io/main/AWS-Beanstalk.png)

## Udagram Image Filter App

![](originalimage.jpg)![](filteredimage.jpg)

## Deployment

### Setup on local environment

#### First things First

You will need to set up the AWS SDK development environment. For this AWS has this great step-by-step
tutorial - Follow along and you'll be good.

[Set up AWS dev environment](https://docs.aws.amazon.com/rekognition/latest/dg/setting-up.html)

#### Once you have the SDK configured, continue below
```sh
$ git clone https://github.com/petekip/udagram-server.git
$ cd udagram-server
```

Install NodeJs (Assumption if you are using a Debian based system)
`nodejs`:

Use your package manager to install `npm`.

```sh
$ sudo apt-get install npm
```

Install project dependencies:

```sh
$ npm install
```

Start the development server:

```sh
$ npm run dev
```

### Deploying the application
#### Build & produce deployment artifacts
Build the project by running `npm run build` in your local directory. This will get the following done.
* Transpile typescript
* Collect and organize the source files
* Build an archive

#### Deploying the application to Elastic Beanstalk
* Create a new application on Elastic Beanstalk: `eb init`
* Create a new environment on Elastic Beanstalk: `eb create`
* Deploy to Elastic Beanstalk: `eb deploy`

## Built With

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - AWS deployment and scaling service used
- [Node.js®](https://nodejs.org/) - The JavaScript runtime used
- [Express.js®](https://nodejs.org/) - The web application framework used
## Screenshots
#### The application on AWS Elastic  Beanstalk
![App Screenshot](https://petekip.github.io/udagram-app-beanstalk-landing-zone.png)

#### To ensure the healthchecks on the load balancer are running successfully. I created a route on the express server for the load balancer to ping
![App Screenshot](https://petekip.github.io/udagram-app-beanstalk-enable-loadbalancer-healthchecks.png)

Providing an image link to the end point in the formart (http://udagram-app.us-east-1.elasticbeanstalk.com/filteredimage?image_url=http://static.mawingu.dev.s3-website-us-east-1.amazonaws.com/images/ingredient1.jpg) resizes your image proportionately and ads a greyscale] 
![App Screenshot](https://petekip.github.io/udagram-app-results.png)

#### Refactor the application to make a request from a client to the service for image processing

![App Screenshot](https://petekip.github.io/static-website-udagram-client.png)

**Client endpoint:** http://udagram-client.mawingu.dev.s3-website-us-east-1.amazonaws.com/
## Authors
* **[Peter Koech](https://github.com/petekip)** -(https://www.github.com/petekip) - *Base concept* [Udacity Lesson 5: Building & Deploying](https://classroom.udacity.com/nanodegrees/nd9990-alg-t2/parts/cd0353)

## License

[![License](http://img.shields.io/:license-mit-green.svg?style=flat-square)](http://badges.mit-license.org)

- This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
- Copyright 2022 © [Peter Koech](https://github.com/petekip).



