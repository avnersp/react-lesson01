import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

function soma(a, b) {
    return a + b;
}

function testJSX() {
    return (
        <div className="azul">
            asdf.
            Soma: {soma(1, 5)}
        </div>
    )
}

const App = () => {

    return (
        <div className="App">
            {testJSX()}
            {testJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
