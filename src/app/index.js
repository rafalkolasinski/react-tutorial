var React = require("react");
var ReactDOM = require("react-dom");

// Creating cmp
var TodoComponent = React.createClass({
    render: function () {
        return(
            <div>
                <h1>MOVIES LIST</h1>
                <p>
                    <strong>Movie name:&nbsp;</strong>{ this.props.movie.name }
                </p>
                <p>
                    <strong>Movie rating:&nbsp;</strong>{ this.props.movie.rating }
                </p>
                <p>
                    <strong>Movie income:&nbsp;</strong>{ this.props.movie.income }
                </p>

            </div>
        );
    }
});

var myMovie = {
    name: "Movie 1",
    rating: 9.75,
    income: "10M"
}

// Putting cmp into HTML
ReactDOM.render(<TodoComponent movie={ myMovie }/>, document.getElementById("todo-wrapper"));
