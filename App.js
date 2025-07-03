import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id: "parent"}, [
        React.createElement("div", {id: "child1", key: "child1"}, [
        React.createElement("h1", { key: "h1"}, "H1 Parent Tag"),
        React.createElement("h2", { key: "h2"}, "H2 Child Tag"),
        ]),
        // here I have used the key because of same elements and that was showing an error
    React.createElement("div", {id: "child2", key: "child2" }, [
        React.createElement("h1", { key: "h1"}, "H1 Parent Tag"),
        React.createElement("h2", { key: "h2"}, "H2 Child Tag"),
        ]),
    ]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);