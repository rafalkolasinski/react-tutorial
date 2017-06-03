var React = require("react");
require("./css/addNewMovie.css")

var AddNewMovie = React.createClass({
   render: function() {
       return(
           <form id="add-movie" onSubmit={this.handleSubmit}>
               <input type="text" required ref="newMovie"/>
               <input type="submit" value="Add movie"/>
           </form>
       );
   },

    // Custom functions
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.onAdd(this.refs.newMovie.value);
    }
});


module.exports = AddNewMovie;