# Udagram: Your Own Instagram image filter on AWS

> This app demonstrates image filtering similar to Instagram on AWS.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/200px-Node.js_logo.svg.png)
![](aws-ebs.png)

![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

## Udagram Image Filter App

![](originalimage.jpg)![](filteredimage.jpg)

## Installation

### Setup

Clone the source locally:

```sh
$ git clone https://github.com/thepembeweb/udagram-image-filter.git
$ cd udagram-image-filter
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

### Deploying the system

* Create a new application on Elastic Beanstalk: `eb init`
* Create a new environment on Elastic Beanstalk: `eb create`
* Deploy to Elastic Beanstalk: `eb deploy`

## Built With

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - AWS deployment and scaling service used
- [Node.js®](https://nodejs.org/) - The JavaScript runtime used
- [Express.js®](https://nodejs.org/) - The web application framework used

## Authors

* **[Pemberai Sweto](https://github.com/thepembeweb)** - *Initial work* - [Udagram Image Filter App](https://github.com/thepembeweb/udagram-image-filter)

## License

[![License](http://img.shields.io/:license-mit-green.svg?style=flat-square)](http://badges.mit-license.org)

- This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
- Copyright 2020 © [Pemberai Sweto](https://github.com/thepembeweb).

