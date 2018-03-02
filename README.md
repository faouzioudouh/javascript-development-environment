# javascript-development-environment

JavaScript Development Environment

# Starter Kit

why do you need a starter kit?

* Automated checklist
* Right thing become automoatic
* Rapid feedback

Your Starter Kit should consist of the following elements:

* [Editors and configuration](#1-editors-and-configuration)
* [Package Management](#2-package-management)
* [Development Web Server](#3-development-web-server)
* [Automation](#4-Automation)
* [Transpiling](#5-Transpiling)
* [Bundling](#6-Bundling)
* [Linting](#6-Linting)
* [Testing and Continious Integration](#7-testing-and-continious-integration)
* [HTTP Calls](#7-http-calls)
* [Project structure](#8-project-structure)
* [Production Build](#9-production-build)
* [Production Deploy](#10-production-deploy)

# 1. Editors and configuration

Choose an Editor.

### What to look for:

* Autocomplete
* Parse ES6 imports
* Report unused imports
* Automated refactoring
* built-in terminal

### Recommendation:

* [VSCode - Highly recommended for JS projects](https://code.visualstudio.com/)
* [Atom](https://atom.io/)
* [WebStorm - Not Free](https://www.jetbrains.com/webstorm/)
* [Brackets](http://brackets.io/)

### Editor Config

[EditorConfig](http://editorconfig.org/) helps developers define and maintain consistent coding styles between different editors and IDEs.

Your team don't have to use the same editors to enjoy all of its consistency
Here's how this works:

* Create a file called `.editorconfig` and place it in the root of your project.
* setup the rules you need!
* [Here's is an example of typical configuration](.editorconfig);

You can adjust or add [any rule](http://docs.editorconfig.org/en/master/editorconfig-format.html#properties) to fit your project requirements.

PS: Some of the listed editors above require [plugin](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) to support `EditorConfig`, E.g. VSCode.

# 2. Package Management

We wil ultimately go with NPM, but its not the only package manager we have in the wide javaScript land, have a variety of package managers to choose from.

### Package Managers

[npm](npmjs.com) is my recommendation for you without hesitation, but there are certainly other interesting players out there.

* [Bower](npmjs.com)
* [JSPM](https://jspm.io/)
* [Jam](http://www.jamjs.org/)
* [Volo](http://volojs.org/)

Next you have to install [Node](https://nodejs.org) & [npm](npmjs.com) and also create [package.json](package.json) file the bag of references to all the pckages we're going to use.

### Package Security

Packages can be published on npm by anyone, so that might make you a little bit paraniod!
[Node security platform](https://nodesecurity.io/) offers a simply command line interface that you can automate checking for security vulnerabilities automatically. All you do is call nsp check as part of your build and then it reports the number of vulnerabilities found if any.

how to install & run:

`npm install -g nsp`

`cd your-awesome-app`

`nsp check`

You might want to consider adding `nsp check` in your start script whithin your [package.json](package.json)

# 3. Development Web Server

### Development Webserver Options

Here are six interesting web servers to consider for JavaScript development.
Let's discuss the merits of each. The absolute simplest way I've found to get this done is an MPM package called [http-server](https://www.npmjs.com/package/http-server)

* [http-server](https://www.npmjs.com/package/http-server)

  * Ultra-simple
  * Single command serve current directory

* [live-server](https://www.npmjs.com/package/live-server)

  * Lightweight
  * Support live-reloading, you hit save your changes are immediately visible.

* [express](https://www.npmjs.com/package/express)

  * Comprehensive
  * Highly configurable
  * unlike http-server & live-server it's not just serving static files, You can serve up to complex APIs via node.
  * Production grade, you can use it in production as well.
  * Can run it everywhere

* [budo](https://www.npmjs.com/package/budo)
  * Integrates with Browserify
  * Includes hot reloading, which means you can immediately see your changes reflected in the browser the moment you hit save.

- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)

  * If you choose a more comprehensive bundler, you can enjoy its built-in web server.
  * Serves from memory, because it doesn't require generating any physical files.
  * Just like budo, it also supports hot reloading.

- [browsersync](https://www.npmjs.com/package/browsersync)

  * Dedicated IP for sharing work on Your local network LAN, so that you, or anyone that can hit the IP on your LAN can see your app.
  * All intercations remain in sync, you can hit that same IP on multiple devices and all the devices will remain in sync.
  * Great for cross-device testing, so you can assure that your work is rendering properly on a variety of devices.
  * There are detaild examples of using Browsersync with a varriety of setups published [here](https://browsersync.io/docs/recipes)
  * Integrates with Webpack, Express

Except for Express, **these servers are not for production**. They're merely for hosting your application for development on your local machine.

### Configure a Dev Webserver (Express)

Why [express](https://www.npmjs.com/package/express) because it is powerful, highly configurable, and extremely popular.

* Install Express
  `npm i express --save-dev`

* Configure Express
  Let's create a folder called `buildScripts`inside, let's create a new file and call it `srcServer.js`, so we are going to follow the popular onvention of abbreviating source as S-R-C

### Services for sharing your work

Browsersync is a handy way to share your work with coworkers. However, Browsersync doesn't expose a public IP for testing outside of your local network. So, what if you want to quickly share your work on the public web so that your client can review your work-in-progress.
Here are some ultra-low friction options for easily showing your customers your work along the way.

* [Localtunnel](https://localtunnel.me/)

  * EASIEST SETUP!
  * Easily share work on your local machine, localtunnel punches a hole on your firewall,
    so that your local machine can operate as a web server.
  * Setup:

    1.  `npm i localtunnel -g`
    2.  start your app
    3.  `lt --port 3000`: I'm exposing my app which is running on port 3000 with this command.

- [ngrok](https://ngrok.com/)

  * Secure tunnel to your local machine

  1.  Sign up
  2.  Install ngrok
  3.  Install authtoken
  4.  Start your app
  5.  `./ngrok http 80`

  * Advantage over Localtunnel is that you can password protect access.

- [surge](https://surge.sh/)

  * Quickely host static files to public URL.
  * Extrem simple
  * Setup:
    1.  `npm i -g surge`
    2.  `surge`, now the first time you run `Surge` you will be propmted to provide an mail and password on the command line
    3.  You can use your own domain name, so with that approach, Surge becomes an easy way to do automated deployment via the command line.

* [now](https://zeit.co/now)

  * Doesn't punch a hole in your firewall.
  * Quickly deploy Node.js to the cloud
  * Any directory the contains a `package.json` can be uploaded to the cloud using one command: `now`.
  * Each time you deploy to now you're assigned a new unique url.
  * Setup:
    1.  `npm i -g now`
    2.  Create a start script to open your web server such as Express.
    3.  Then anytime you want to deploy the app you just type `now`.
