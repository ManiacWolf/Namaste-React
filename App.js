const parent = React.createElement(
    "div", 
    {id: "parent"}, [
        React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "H1 Parent Tag"),
        React.createElement("h2", {}, "H2 Child Tag"),
        ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "H1 Parent Tag"),
        React.createElement("h2", {}, "H2 Child Tag"),
        ]),
    ]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);