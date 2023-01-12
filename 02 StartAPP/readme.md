
2. Runtime files, such as .log files. They provide information on the Operating System’s usage activities and errors, as well as a history of events that have taken place within the OS


# - What is the difference between `package.json` and `package-lock.json` ?

## Package.json are the file which store our all dependencies which are required by our project. `But` Package.lock.json it will install the exact latest version of that package in your project and save the dependency in package.json with a carat (^) sign.

 when you or any other user will clone the project and run the command “npm i”, it will install the exact same version saved in package-lock.json file and you will able to generate the same results as you developed with that particular package.
