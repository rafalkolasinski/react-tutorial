var React = require("react");
var ReactDOM = require("react-dom");
require("./css/index.css");

// Module requires
var MovieItem = require("./movieItem");
var AddNewItem = require("./addNewMovie");

// Creating Movies component
var MoviesComponent = React.createClass({
    getInitialState: function () {
        return {
            movies: ["Kill Bill", "The Hateful Eight", "Pulp Fiction", "Reservoir Dogs"]
        }
    }, // getInitialState

    render: function () {
        var movies = this.state.movies.map(function(movie, index) {
           return(
               <MovieItem item={movie} key={index} onDelete={this.onDelete}/>
           );
        }.bind(this));

        return(
            <div id="movies-list">
                <h1>The best QT movies in the world!</h1>
                <p>{this.state.rating}</p>
                <ul>
                    {movies}
                </ul>
                <AddNewItem onAdd={this.onAdd}/>
            </div>
        );
    }, // render

    // Custom functions
    onDelete: function(removedMovie) {
        var updatedMovies = this.state.movies.filter(function(movie, index) {
            return movie !== removedMovie;
        });

        this.setState({
            movies: updatedMovies
        });
    },

    onAdd: function(newMovie) {
        var updatedMovies = this.state.movies;
        updatedMovies.push(newMovie);

        this.setState({
            movies: updatedMovies
        })
    },

    // Lifecycle functions
    componentWillMount: function() {
        console.log("Component will mount.");
    },

    componentDidMount: function() {
        console.log("Component did mount.");
        // good moment for loading external data
    },

    componentWillUpdate: function() {
        console.log("Component will update.");
    }
});

// Putting cmp into HTML
ReactDOM.render(<MoviesComponent />, document.getElementById("movies-wrapper"));
