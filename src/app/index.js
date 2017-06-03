var React = require("react");
var ReactDOM = require("react-dom");

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
    }
});

// Creating MovieItem component
var MovieItem = React.createClass({
   render: function() {
       return(
           <li>
               <div className="movie-item">
                   <span className="item-name">
                       {this.props.item}
                   </span>
                   <span className="item-delete" onClick={this.handleDelete}>[X]</span>
               </div>
           </li>
       );
   },

    // Custom functions
    handleDelete: function() {
        this.props.onDelete(this.props.item);
    }
});

// Putting cmp into HTML
ReactDOM.render(<MoviesComponent />, document.getElementById("movies-wrapper"));
