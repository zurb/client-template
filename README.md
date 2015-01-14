# ZURB Client Template

This is the template for front-end coding projects done for ZURB clients. It's based on the "juiced" Foundation libsass template, and works exactly like that one.

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `sudo npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `sudo npm install -g bower`

## Getting Started

**Download the repository here.** Don't clone the project directly unless you want to make changes to how it works.

Once you've downloaded the files, you'll probably want to rename the folder to the name of your client.

Next, navigate into the directory:
```
cd client
```

Install all the dependincies (if `npm install` fails, you might need to run it as `sudo`):
```
npm install
bower install
```

While you're working on your project, run:
```
grunt
```

This will assemble all the pages and compile the Sass. You're all set to start working!

## Directory Structure

* `dist`: Static pages are assembled here. This is where you should view the site in your browser. **Don't edit these files directly. They will be overwritten!**
* `src`: This is the directory you'll work in. 
* `src/assets`: All assets (scss, images, fonts, js, etc) go here.
* `src/assets/scss/_settings.scss`: Foundation configuration settings go in here.
* `src/assets/scss/app.scss`: Application styles go here.
