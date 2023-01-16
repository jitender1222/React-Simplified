import React from "react";

import ReactDOM from "react-dom/client";

const heading=React.createElement(

    "h1",
    {
        id:"title",
    },
    "Heading 1 from Parcel"
);

const heading2=React.createElement(

    "h1",
    {
        id:"title"
    },
    "Heading2 from Parcel",
)

const container=React.createElement(

    "div",
    {
        id:"cont"
    },
    [heading,heading2],
)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(container);