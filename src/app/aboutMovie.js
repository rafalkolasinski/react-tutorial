var React = require("react");
import {Link} from "react-router-dom";

var AboutMovie = React.createClass({
    render: function() {
        return(
            <div>
                <Link to={"/"}>Movie list</Link>
                <h2>About movie</h2>
            </div>
        );
    }
});

module.exports = AboutMovie;