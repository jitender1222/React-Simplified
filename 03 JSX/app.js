
import React from "React";

import ReactDOM  from "react-dom";


// created a heading which is nested over h1 and h2 tag

/* 
const heading=React.createElement(
    "h1",
    {
        id:"title"
    },
    "Hello"
);
const heading2=React.createElement(
    "h1",
    {
        id:"title"
    },
    "Hello world"
);

const container=React.createElement(
    "div",
    {
        id:"cont"
    },
    [heading,heading2]
)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

*/

//**************************By using JSX  ****************************//

// const heading=(
    
//     <h1>Hello world from heading-1</h1>
// );

// const heading2=(
//     <h1>Hello world from heading2</h1>
// )

// const container=React.createElement(
//     "div",
//     {
//         id:"cont"
//     },
//     [heading,heading2]
// )

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);



//********************** Component ************************** *//


const heading=(
    
    <h1>Hello world from heading-1</h1>
);

const heading2=(
    <h1>Hello world from heading2</h1>
)

const container=React.createElement(
    "div",
    {
        id:"cont"
    },
    [heading,heading2]
)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(container);




