var React = require("react");
var ReactDOM = require("react-dom");

// Creating cmp
var TodoComponent = React.createClass({
    getInitialState: function () {
        return {
            movies: ["Kill Bill", "The Hateful Eight", "Pulp Fiction", "Reservoir Dogs"]
        }
    }, // getInitialState

    render: function () {
        var movies = this.state.movies.map(function(movie, index) {
           return(
               <li key={movie.toString()}>
                   <strong>{ index + 1 }&#58;</strong> { movie }
               </li>
           );
        });

        return(
            <div id="movies-list">
                <h1>The best QT movies in the world!</h1>
                <p>{ this.state.rating }</p>
                <ul>
                    { movies }
                </ul>
            </div>
        );
    } // render
});

// Putting cmp into HTML
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));
