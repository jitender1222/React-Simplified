#  - What is `NPM`?

## We can call NPM as node package manager but it is not true their is no official full form of NPM. 

## NPM is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

# What are these Package Manager ?

## Lets say you have to build the payment gateway that uses stripe for payments.A Package Manager installs all the code that our product requires to communicate it with the stripe.

**Instead of writing or copy Pasting the code from the stripe docs we can simply install the package which has all the dependencies which our code needs.**

# - What is `NPX` ?

## We can call it as Node Package Executor with the help of this we can use any package without installing them.

## **Why use NPX?**

## There are number of ways by which we can install the package or we have choices that whether we have to store the package locally or globally .

**Sometimes, instead of using either of the two install methods above, you may just want to use the package and go.**

In these cases, ​instead of installing locally or globally, you can go straight to running those packages with `NPX`.

NPX comes bundled with NPM starting with version 5.2+. So, if your version of NPM is 5.2 or higher, then you have NPX installed.

When you run a package using NPX, it searches for the package in the local and global registry, and then it runs the package.

If the package is not already installed, NPX downloads the package files and installs the package, but it will only cache the files instead of saving it.

To use NPX, you would run a command like this:

`npx some-package`

## - What is difference between `dependencies` vs `devDependencies` ?

## When we Installed packages using NPM it will generate `2` types of dependencies.


**The difference between these two, is that `devDependencies` are modules which are only required during development, while `dependencies` are modules which are also required at runtime.**

`Example of dependencies are React, Redux, Express, and Axios.`

`Example of devdependencies are  Nodemon, Babel, ESLint.`

## - What is `.gitignore`? What should we add and not add into it?

## The `.gitignore` file is basically tells the git that which file or folder do we have to ignore or basically not push inside the git.

A local .gitignore file is usually placed in the root directory of a project. You can also create a global .gitignore file and any entries in that file will be ignored in all of your Git repositories.

**The types of files you should consider adding to a .gitignore file are any files that do not need to get committed.You may not want to commit them for security reasons or because they are local to you and therefore unnecessary for other developers working on the same project as you.**

`IGNORE FILES` -> 

1. Files that contain sensitive data and personal information. Some examples of such files are files with your credentials (username and password) and files with environment variables like .env files.

2. Runtime files, such as .log files. They provide information on the Operating System’s usage activities and errors, as well as a history of events that have taken place within the OS


# - What is the difference between `package.json` and `package-lock.json` ?

## Package.json are the file which store our all dependencies which are required by our project. `But` Package.lock.json it will install the exact latest version of that package in your project and save the dependency in package.json with a carat (^) sign.

 when you or any other user will clone the project and run the command “npm i”, it will install the exact same version saved in package-lock.json file and you will able to generate the same results as you developed with that particular package.

# - What is `node_modules` ? Is it a good idea to push that on git?

## Modules is basically a Javascript Code or a Directory which includes a .js files.Modules is just a piece of code which helps developers to follow `DRY`(Don't Repeat YourSelf) principle.They also helps developer to break down the complex logic into small simple steps.

## There are basically `3` types of nodeModules

1. Built-in modules

2. Local modules

3. Third-party modules

**It is not a good idea to push node_modules to the git beacuse node modules are very large in size and also If you commit node_modules it means any developer can change any dependency with ease (it's called “monkey patching”), and this definitely will lead to a problem: when you will update this changed dependency, old changes will be lost, and you have to solve that. You never will be sure that dependency of certain version have the same code that you got initially.**


# What is the `dist` folder?

## dist/: The shortform dist stands for distributable and it refers to a directory where files will be stored that can be directly used by others without the need to compile or minify the source code that is being reused.

**Example** -> If i want to use the source code of Javascript files usually js code is minified for use in production.Therefore if we want to use Js library it is advisable to put the plain source code into the src directory and the minified version into the dist (distributable) directoy, so others can grab the minified version right away without having to minify it themselves.

There may be a slight difference between these three:

1. build/-> is a compiled version of your src/ but not a production-ready.

2. dist/-> is a production-ready compiled version of your code.

3. public/-> usually used as the files runs on the browser. which it may be the server-side JS and also include some HTML and CSS.



