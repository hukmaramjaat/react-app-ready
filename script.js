// // use React
// const container = React.createElement(
//   "div",
//   { className: "container", id: "container" },
//   [
//     React.createElement("section", { key: 1 }, [
//       React.createElement(
//         "p",
//         { key: 2 },
//         "The library for web and native user interfaces"
//       ),
//       React.createElement("h2", { key: 3 }, "The library for web page"),
//       React.createElement("img", {
//         key: 4,
//         style: {width: '100px'},
//         src:
//           "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
//       }),
//     ]),
//     React.createElement('section',{key:2},[
//         React.createElement('form',{key:1},[
//             React.createElement('div',{className: 'input-group',key:1},[
//                 React.createElement("label",{key:1,htmlFor:'username'},'User name'),
//                 React.createElement("input",{key:2,id:'username'} ),
//             ]),
//             React.createElement('div',{className: 'input-group',key:2},[
//                 React.createElement("label",{key:1,htmlFor:'password'},'Password'),
//                 React.createElement("input",{key:2,id:'password',type:"password"} 
//                     ),
//             ]),
//         ])
//     ])
    
//   ]
// );
// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(container);

// const root = document.querySelector("#root");
 
// // use Js
// const p = document.createElement("p");
// p.innerText = "The library for web and native user interfaces";

// root.append(p);

// const img = document.createElement("img");
// img.src = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
// root.append(img);


// use babel

// const user = 'Hukma Ram'

// const h2 = <h2>welcom to {user} in babel</h2>

// // const root = ReactDOM.createRoot(document.querySelector('#root'));

// // root.render(h2)
// console.log(h2);



const container = (
    <div className="container" id="container">
      <section>
        <p>The library for web and native user interfaces</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          style={{
            width: 200,
            backgroundColor: 'teal',
            borderRadius: 8,
            padding: 16,
          }}
        />
      </section>
      <section>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input id="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
        </form>
      </section>
    </div>
  )
  
  console.log(container);
  
  const root = ReactDOM.createRoot(document.querySelector('#root'))
  
  root.render(container)