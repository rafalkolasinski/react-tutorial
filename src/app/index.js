var React = require("react");
var ReactDOM = require("react-dom");

// Creating cmp
var TodoComponent = React.createClass({
    render: function () {
        return(
            <h1>REACT</h1>
        );
    }
});

// Putting cmp into HTML
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));
