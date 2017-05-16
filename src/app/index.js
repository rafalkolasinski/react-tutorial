var React = require("react");
var ReactDOM = require("react-dom");

// Creating cmp
var TodoComponent = React.createClass({
    getInitialState: function () {
        return {
            movies: ["Kill Bill", "The Hateful Eight", "Pulp Fiction"]
        }
    }, // getInitialState

    render: function () {
        return(
            <div id="movies-list">
                <h1>The best QT movies in the world!</h1>
                <ul>
                    <li>{ this.state.movies[0] }</li>
                    <li>{ this.state.movies[1] }</li>
                    <li>{ this.state.movies[2] }</li>
                </ul>
            </div>
        );
    } // render
});

// Putting cmp into HTML
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));
