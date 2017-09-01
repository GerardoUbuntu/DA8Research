var SearchForm = React.createClass({
  handleSearch() {
    var query = this.refs.query.value;
    var self = this;
    $.ajax({
      url: '/researches/search',
      data: { query: query },
      success: function(data) {
        self.props.handleSearch(data);
      },
      error: function(xhr, status, error) {
        alert('Search error: ', status, xhr, error);
      }
    });
  },
  render() {
    var style = {
       marginTop: 10, 
       marginBottom: 10 
    };
    return(

       <div style= {style}  >
          <input ref= "query" type="text" className="form-control" onChange={this.handleSearch} id = "search" placeholder="Search for..."/>
       </div>
    )
  }
});