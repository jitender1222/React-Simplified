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

2. Runtime files, such as .log files. They provide information on the Operating System’s usage activities and errors, as well as a history of events that have taken place within the OS.


# - What is the difference between `package.json` and `package-lock.json` ?

## Package.json are the file which store our all dependencies which are required by our project. `But` Package.lock.json it will install the exact latest version of that package in your project and save the dependency in package.json with a carat (^) sign.

 when you or any other user will clone the project and run the command “npm i”, it will install the exact same version saved in package-lock.json file and you will able to generate the same results as you developed with that particular package.
