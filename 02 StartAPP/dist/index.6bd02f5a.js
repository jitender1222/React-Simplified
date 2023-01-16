const heading = React.createElement("h1", {
    id: "title"
}, "Heading 1");
const heading2 = React.createElement("h1", {
    id: "title"
}, "Heading2");
const container = React.createElement("div", {
    id: "cont"
}, [
    heading,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
