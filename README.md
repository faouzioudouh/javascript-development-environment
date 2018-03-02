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
* []()

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
