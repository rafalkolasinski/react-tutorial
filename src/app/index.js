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
               <MovieItem item={ movie } key={ index }/>
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

// Creating MovieItem component
var MovieItem = React.createClass({
   render: function() {
       return(
           <li>
               <div className="movie-item">
                   <span className="movie-item-name">
                       { this.props.item }
                   </span>
               </div>
           </li>
       );
   }
});

// Putting cmp into HTML
ReactDOM.render(<MoviesComponent />, document.getElementById("movies-wrapper"));
