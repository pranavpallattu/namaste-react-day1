
// <div id="parent">
// <div id="child">
//     <h1>im h1 tag</h1>
//     <h2>im h2 tag</h2>
// </div>
// </div>


const parent= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"Im h1 tag"),React.createElement("h1",{},"Im h2 tag")]))
// root.render(parent)

const heading = React.createElement(
    "h1",
    {id: "heading",className:"heading1" },
    "Hello world from React"
  );

  console.log(heading);
  
      const root=ReactDOM.createRoot(document.getElementById("root"))
    //   console.log(root);
  
      root.render(parent)
      console.log(parent);
      