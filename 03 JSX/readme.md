
# What Is JSX?

## JSX stands for Javascript syntax extension. It is basically a extension of Javascript which allows us to describe React object tree by using the syntax which looks like to an HTML template.

`NOTE: JSX is not like HTML inside Javascript`.


# JSX With React in Scope

## Our browser didn't know this term JSX when we have to use JSX we have to use **Transpiler**(a compiler that translates one form of syntax into another which the browser can understand) like Babel or TypeScript to compile JSX into a browser-compatible version.


## In addition, when we write modern JavaScript, especially some of the features introduced in ECMAScript 6, some older browsers can’t make sense of these features. We need to use a transpiler to convert ES6 to ES5.


`Example`-> 

    import React from 'react'

    function Greet() {

    return <h1>Hello World!</h1>

    }


This is a simple component which prints Hello world. Here the h1 tag rendered by the Greet component is a pure JavaScript function call to React.createElement().


    import React from 'react'

        function Greet() {

            return React.createElement("h1", {}, "Hello, World!")
        }


Notice when compiled, it calls the React.createElement() function. So we need to have React in scope for JavaScript to know what to do with the compiled code.