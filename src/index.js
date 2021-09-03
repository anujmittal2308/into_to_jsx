let React = require("react");
let ReactDom = require("react-dom");
let jq = require("jquery");
/* in line 1 and 2 what we do we taking a packge and 
put in the code by the help of data varibal 
ther one more type to do same thing 

import React from 'react';
import ReactDOM from 'react-dom';
*/
/* it means 
step 1 is 
# put the require packge in code  */
ReactDom.render(<h1> Hello world!</h1>, document.getElementById("root"));
//ReactDom.render( what we do , wher we do );
//
//ReactDom.jq.render(<h1> Hello world!</h1>,$("root"));  try to use jquery
/* in this line we add HTML text by using javascript 
and import in reactDom
 
we have one more methder to do same thing 
class Test extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
ReactDOM.render(<Test />, document.getElementById('root'));
*/
// one more type to do this thing
var h1 = document.createElement("h1");
h1.innerHTML = "hello world!";
document.getElementById("root").appendChild(h1);
