
import React from "React";

import ReactDOM  from "react-dom";

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
