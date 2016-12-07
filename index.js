
import React from 'react'
import ReactDom from 'react-dom'




let myStyle = {
     color: 'red',
};

class App extends React.Component {
    render() {
        return (
            <h1 style={myStyle}>Hello React</h1>
        );
    }
}


ReactDom.render(<App />,document.getElementById("root"));