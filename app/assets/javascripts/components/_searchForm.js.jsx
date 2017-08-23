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
    return(

       <div className="input-group input-group-sm">
          <input ref= "query" type="text" className="form-control" onChange={this.handleSearch} id = "search" placeholder="Search for..."/>
          <span className="input-group-btn">
              <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
          </span>
       </div>
    )
  }
});