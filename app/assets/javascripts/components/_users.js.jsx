var Users = React.createClass({
  getInitialState: function() {
    return { users: this.props.data,
             page: this.props.page,
             pages: this.props.pages 
           };
  },
 
  getDataFromApi: function(page) {
    var self = this;
    $.ajax({
      url: '/users/paging',
      data: { page: page },
      success: function(data) {
        self.setState({ users: data.users, pages: parseInt(data.pages), page: parseInt(data.page) });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  },
  
  handleSearch: function(events) {
    this.setState({ events: events });
  },
  
  handleAdd: function() {
    this.getDataFromApi(this.state.page);
  },
  
  handleDeleteRecord: function() {
    this.getDataFromApi(this.state.page);
  },
  
  handleUpdateRecord: function(old_user, user) {
    var users = this.state.users.slice();
    var index = users.indexOf(old_user);
    users.splice(index, 1, user);
    this.setState({ users: users });
  },
  
  handleSortColumn: function(name, order) {
    if (this.state.sort != name) {
      order = 'asc';
    }
    $.ajax({
      url: '/api/events',
      data: { sort_by: name, order: order, page: this.state.page },
      method: 'GET',
      success: function(data) {
        this.setState({ events: data.events, sort: name, order: order });
      }.bind(this),
      
      error: function(xhr, status, error) {
        alert('Cannot sort events: ', error);
      }
    });
  },
  handleChangePage: function(page) {
    this.getDataFromApi(page);
  },
  render: function() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            Users
          </div>     
          <div className="col-md-2 col-md-offset-4">
                <a className="btn btn-success btn-sm"  data-toggle="modal" data-target="#addUser" aria-label="Left Align">
                  <span className="glyphicon glyphicon-plus"/> Add User
                </a>
          </div>

          <div className="col-md-2">
                <input ref= "query" type="text" className="form-control" onChange={this.handleSearch} id = "search" placeholder="Search for..."/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <UserTable users={this.state.users}
                        handleDeleteRecord={this.handleDeleteRecord}
                        handleUpdateRecord={this.handleUpdateRecord}
                         />
            <Pagination page={this.state.page}
                        pages={this.state.pages}
                        handleChangePage={this.handleChangePage} />
            <AddUser handleAdd={this.handleAdd}/>
          </div>
        </div>
      </div>
    )
  }
});