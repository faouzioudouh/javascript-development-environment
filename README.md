# javascript-development-environment

JavaScript Development Environment

# Starter Kit

why do you need a starter kit?

* Automated checklist
* Right thing become automatic
* Rapid feedback

Your Starter Kit should consist of the following elements:

* [Editors and configuration](#1-editors-and-configuration)
* [Package Management](#2-package-management)
* [Development Web Server](#3-development-web-server)
* [Automation](#4-automation)
* [Transpiling](#5-transpiling)
* [Bundling](#6-bundling)
* [Linting](#6-linting)
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

We wil ultimately go with NPM, but it's not the only package manager we have in the wide javaScript land, have a variety of package managers to choose from.

### Package Managers

[npm](npmjs.com) is my recommendation for you without hesitation, but there are certainly other interesting players out there.

* [Bower](npmjs.com)
* [JSPM](https://jspm.io/)
* [Jam](http://www.jamjs.org/)
* [Volo](http://volojs.org/)

Next you have to install [Node](https://nodejs.org) & [npm](npmjs.com) and also create [package.json](package.json) file the bag of references to all the pckages we're going to use.

### Package Security

Packages can be published on npm by anyone, so that might make you a little bit paranoid!
[Node security platform](https://nodesecurity.io/) offers a simple command line interface that you can automate checking for security vulnerabilities automatically. All you do is call nsp check as part of your build and then it reports the number of vulnerabilities found if any.

how to install & run:

`npm install -g nsp`

`cd your-awesome-app`

`nsp check`

You might want to consider adding `nsp check` in your start script within your [package.json](package.json)

# 3. Development Web Server

### Development Webserver Options

Here are six interesting web servers to consider for JavaScript development.
Let's discuss the merits of each. The absolute simplest way I've found to get this done is an NPM package called [http-server](https://www.npmjs.com/package/http-server)

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

# 4. Automation

Automation is a necessity to assure that development builds and related tooling are integrated and utilized in a consistent manner.
So there are a variety of options for automating your development, environment, and build process today. The three most popular options for JavaScript automation today are:

* [Grunt](https://gruntjs.com/)

  * Configuration over code
  * Writes intermediary files between steps
  * [Large plugin ecosystem](https://gruntjs.com/plugins)

* [Gulp](https://gulpjs.com/)

  * Focuses on in-memory streams which Gulp calls pipes
  * You don't have to write on disk after each step in a task.
  * Gulp typically Faster than Grunt!, beacuse it avoids writing to disk
  * Code over configuration
  * [Large plugin ecosystem](https://gulpjs.com/plugins/)

* npm scripts

  * Declared in package.json (No more files to maintain)
  * Directely use npm packages (You don't have to import anything, just hit install)
  * You can call separate Node scripts
  * Convention-based pre/post hooks
  * Leverage world's largest package manager.

I **recommed** using **npm scripts** over Gulp and Grunt!
Why?

* Use tools directly
* No need for separate plugins
* Simpler debugging
* Better docs
* Easy to learn
* Very Simple
* Packages called from `npm scripts`do not need to be installed globally
* [Read more](bit.ly/npmvsgulp)

### 4.1 Let's write some demos, Demons.

Now npm scripts allow you to make command line calls, utilize npm packages, or even call separate scripts that use Node, so they give us all the power that we need for creating a robust build process.

1.  npm script that will start our development environment :

In a previous module we created source server.js which configures express to serve up our index.html. Now let's create an npm script that will [start our development environment](package.json#L8).

By convention this script should be called start, that way by convention we can just type **npm start** and it will run this command.

**And since we are using `ES5`, we'll name our script `start:es5`, as we'll have the `ES6` later.**

#### `package.json`

```js
//...
  "scripts": {
    "start:es5": "node buildScripts/srcServer",
  }
//...
```

2.  Pre/post Hooks :

It would be nice if we received a helpful message when starting up our development environment. To do that lets create a file called start [startMessage.js](buildScripts/startMessage.js) here in build scripts.

We want to print this message before our server starts up!

#### `package.json`

```js
//...
  "scripts": {
    "prestart:es5": "node buildScripts/startMessage",
    "start:es5": "node buildScripts/srcServer",
  }
//...
```

By convention the script `pre[SCRIPT_NAME]`will be called **before** the script `[SCRIPT_NAME]`.
and also the script `post[SCRIPT_NAME]`will be called **after** the script `[SCRIPT_NAME]`.
which means `prestart:es5` will be called before the script `start:es5`.

3.  Security check npm script

#### `package.json`

```js
//...
  "scripts": {
    "security-check": "nsp check"
  }
//...
```

3.  Localtunnel npm script

it will just run local tunnel and open it on port 3000.

#### `package.json`

```js
//...
  "scripts": {
    "share": "lt --port 3000"
  }
//...
```

### 4.2 Concurrent Tasks (Parllel tasks)

The pre and post hooks are handy when you want to run something before or after a script, but you'll likely find that you also want to run multiple things at the same time.

To do that, we'll use a package called [npm run all](https://www.npmjs.com/package/npm-run-all)

Let's say that we'd like to run the security check each time we start the app at the same time we start up the web server.

#### `package.json`

```js
//...
  "scripts": {
    "prestart:es5": "node buildScripts/startMessage",
    "start:es5": "npm-run-all --parallel security-check serve:es5",
    "security-check": "nsp check",
    "serve:es5": "node buildScripts/srcServer",
  }
//...
```

# 5. Transpiling

People have complained about JavaScript for years. And justifiably so. It languished with no innovation for a full decade. It's a wonder it survived such stagnation. Yet, with the advent of ES6 in 2015, the language has finally grown up in a big way. And annual releases mean that we can look forward to more goodness every year. This is great, but it's also one of the many reasons transpiling has become so common.

### 5.1 JavaScript Versions

* ES1 _1997_
* ES2 _1998_
* ES3 _1999_
* ES5 _2009_
* ES6/ES2015 _2015_
* ES7/ES2016 _2016_
* ES8/ES2017 _2017_

### 5.2 Transpilers

[Babel](https://babeljs.io/) transpiles the latest version of JavaScript down to ES5 so that you can use all of these new features, but run them everywhere that ES5 is supported.

[TypeScript](https://www.typescriptlang.org/) is a superset of JavaScript. So just as ES6 added features to JavaScript, TypeScript adds additional functionality to JavaScript.

| [TypeScript](https://www.typescriptlang.org/) | [Babel](https://babeljs.io/)                |
| --------------------------------------------- | ------------------------------------------- |
| Enhanced Autocompletion                       | Write standard JS                           |
| Enhanced readability                          | Leverage full JS Ecosystem                  |
| additional non-standard features (Interfaces) | Use experimental features earlier           |
| Safer refactoring                             | No type defs, annotations required          |
| Clearer intent                                | ES6 imports are statically analyzable       |
|                                               | Test, Lint, Bbael, Great libs, IDE = safety |

### 5.3 Babel configuration

Babel offers two methods for configuration. A [.babelrc](.babelrc) file and within package.json. The most common approach is to use a dedicated .babelrc configuration file.
This configuration file should be placed in your project's root.
It's also worth noting that Babel can transpile experimental features. You can view links to the different experimental JavaScript features under the Plugins page on Babel's website. As you can see,JavaScript features progress through different stages.

| Stage   | what?                                                            |
| ------- | ---------------------------------------------------------------- |
| stage-0 | **Strawman**: Just an idea, possible Bbale plugin                |
| stage-1 | **Proposal**: This is worth working on                           |
| stage-2 | **Draft**: Initial spec                                          |
| stage-3 | **Candidate**: complete spec and initial browser implementations |
| stage-4 | **Finished** Will be added to the next yearly release            |

### 5.4 Setup Babel

All right, decision made. It's time to set up [Babel](https://babeljs.io/). Let's update our build process to transpile our code the moment that we hit Save. Since we've decided to use the latest version of JavaScript in our project we need to transpile down to ES5 to assure that it runs in environments that don't yet fully support the latest versions of JavaScript. To do that, we'll use [Babel](https://babeljs.io/).
Let's create a new file in the root of our project called [.babelrc](.babelrc).

#### `.babelrc`

```js
{
  "presets": [
    "latest"
  ]
}
```

And now since we have Babel we configured we can add `npm scripts` for ES6.
Notice that for all the ES6 script we have to run the command with `babel-node`.

#### `package.json`

```js
//...
  "scripts": {
    "preestart:es6": "babel-node buildScripts/startMessage-es6",
    "preestart:es5": "node buildScripts/startMessage-es5",
    "start:es6": "npm-run-all --parallel security-check serve:es6",
    "start:es5": "npm-run-all --parallel security-check serve:es5",
    "security-check": "nsp check",
    "serve:es6": "babel-node buildScripts/srcServer",
    "serve:es5": "node buildScripts/srcServer"  }
//...
```
