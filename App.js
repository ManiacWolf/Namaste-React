import React from "react";
import ReactDOM from "react-dom/client";


// REACT ELEMENT

// const heading = React.createElement(
//     "div", 
//     {id: "heading"},
//     "Lecture 3"
//  );

//  console.log(heading);

 //JSX--> HTML-like or XML-like syntax
 // JSX => Babel transpiles it to React.createElement => React Element-JS Object => HTML Element(render)
//  const heading = (
//  <h1 id= "heading" tabIndex="5"> 
//     This is JSX, parsed by Babel.
//  </h1>
//  )

// console.log(heading);

// root.render(heading);


// REACT COMPONENTS
//Class based components--OLD
//Functional Components--NEW

// React Functional Components

// const HeadingFC1= () => {
//     return <h1>Writing Functional Components in React </h1>
// };

// // Both the upper and lower versions of the FC are same.

// const HeadingFC2 = () => (
//     <div id="container">
//         <h1 className="heading">Writing Functional Components in React </h1>
//     </div>
// );

const elem = <span>React Element</span>

const Title = () => (
        <h1 className="head" tabIndex="5">
            {elem}
            Writing Title
        </h1>
);

const Heading = () => (
    <div id="container">
        <h2>{100 + 200}</h2>
        {/* this helps us to use the title component inside the heading component, also called component composition*/}
        <Title/>   
        <h1 className="heading">Writing Heading</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);