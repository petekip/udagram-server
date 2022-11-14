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