var UserTable = React.createClass({
  handleDeleteRecord: function() {
    this.props.handleDeleteRecord();
  },
  handleUpdateRecord: function(old_user, user) {
    this.props.handleUpdateRecord(old_user, user);
  },
  handleSortColumn: function(name, order) {
    this.props.handleSortColumn(name, order);
  },
  render: function() {
    var users = [];
    this.props.users.map(function(user) {
      users.push(<User user={user}
                         key={user.id}
                         handleDeleteRecord={this.handleDeleteRecord}
                         handleUpdateRecord={this.handleUpdateRecord} />)
    }.bind(this));
    return(
        <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2 sortable">
                Email
            </th>
            <th className="col-md-2 sortable">
                 Role
            </th>
            
            <th className="col-md-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users}
        </tbody>
      </table>
    )
  }
});