var React = require("react");
require("./css/movieItem.css");

// Creating MovieItem component
var MovieItem = React.createClass({
    render: function() {
        return(
            <li>
                <div className="movie-item">
                   <span className="item-name">
                       {this.props.item}
                   </span>
                    <span className="item-delete" onClick={this.handleDelete}>X</span>
                </div>
            </li>
        );
    },

    // Custom functions
    handleDelete: function() {
        this.props.onDelete(this.props.item);
    }
});

module.exports = MovieItem;