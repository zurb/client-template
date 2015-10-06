# ZURB Client Template

This is the template for front-end coding projects done for ZURB clients. It uses [Assemble](https://github.com/assemble/assemble) to generate flat HTML files, [node-sass](https://github.com/sass/node-sass) to compile Sass, and [UglifyJS](https://github.com/mishoo/UglifyJS) to concatenate and compress JavaScript. The task runner [Grunt](https://github.com/gruntjs/grunt) ties it all together.

## Requirements

You'll need to have this software installed before continuing.

  - [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  - [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  - [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## First-time Setup

If you're setting up a brand-new project, follow these steps:

1. [Create a new GitHub repo](https://github.com/new).
2. Clone the repository: `git clone https://github.com/zurb/client-template [client-name]`
  - **Replace [client-name] with the name of your client. This changes the name of the folder Git creates.**
3. Open the folder: `cd [client-name]`
4. Run the setup script: `./setup.sh`
  - The script will ask you for the name of the repo you just created.
  - The script will also ask you if you need `sudo` to run `npm install`.

## Manual Setup

If you're setting up an existing project follow these steps instead:

1. Clone this repository: `git clone https://github.com/zurb/[repo-name]`
2. Open the folder: `cd [repo-name]`
3. Install dependencies: `npm install && bower install`
  - If `npm install` fails, try running it with `sudo` instead.

## Usage

With everything set up, run `grunt` to begin the build process. Grunt will re-run the build process when you save changes to files. You can also run `grunt build` to run the build process once.

**Make sure you view the pages from a server!** Some things will break if you view pages from the `file:///` protocol. At ZURB we serve our static code from OS X's built-in Apache server.

## Directory Structure

- `dist`: Static pages are assembled here. This is where you should view the site in your browser. **Don't edit these files directly. They will be overwritten!**
- `src`: This is the folder you'll work in.
  - `src/assets`: All assets (scss, images, fonts, js, etc) go here.
    - `src/assets/scss/_settings.scss`: Foundation configuration settings go in here.
    - `src/assets/scss/app.scss`: Application styles go here.
    - `src/assets/js/app.js`: Custom JavaScript goes here.
  - `src/layouts`: HTML files for your common template.
  - `src/pages`: HTML files for your individual pages.
  - `src/partials`: HTML files for HTML partials
