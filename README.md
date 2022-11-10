# Udagram: Server App

> This app provides an endpoint built on NodeJs for filtering images and turning them into greyscale.
This is a backend application for processing images by resizing and turning them into greyscale. You can either directly append a URL on the end point or use the client side application to upload your image and the application will generate the greyscale image side-by-side

![](https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg)
![](https://raw.githubusercontent.com/petekip/petekip.github.io/main/AWS-Beanstalk.png)

## Udagram Image Filter App

![](originalimage.jpg)![](filteredimage.jpg)

## Installation

### Setup

#### First things First

You will need to set up the AWS SDK development environment. For this AWS has this great step-by-step
tutorial - Follow along and you'll be good.

[Set up AWS dev environment](https://docs.aws.amazon.com/rekognition/latest/dg/setting-up.html)

#### Once you have the SDK configured, continue below
```sh
$ git clone https://github.com/petekip/udagram-server.git
$ cd udagram-server
```

If you're on Debian or Ubuntu, you'll also need to install
`nodejs-legacy`:

Use your package manager to install `npm`.

```sh
$ sudo apt-get install npm nodejs-legacy
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

* Create a new application on Elastic Beanstalk: `eb init`
* Create a new environment on Elastic Beanstalk: `eb create`
* Deploy to Elastic Beanstalk: `eb deploy`

## Built With

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - AWS deployment and scaling service used
- [Node.js®](https://nodejs.org/) - The JavaScript runtime used
- [Express.js®](https://nodejs.org/) - The web application framework used


## Authors

* **[Peter Koech](https://github.com/petekip)** -(https://www.github.com/petekip) - *Base concept* [Udacity Lesson 5: Building & Deploying](https://classroom.udacity.com/nanodegrees/nd9990-alg-t2/parts/cd0353)

## License

[![License](http://img.shields.io/:license-mit-green.svg?style=flat-square)](http://badges.mit-license.org)

- This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
- Copyright 2022 © [Peter Koech](https://github.com/petekip).




## 🚀 About Me
I'm a full stack developer...


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

