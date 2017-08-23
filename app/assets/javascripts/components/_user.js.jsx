var User = React.createClass({
  getInitialState: function() {
    return { edit: false };
  },

  handleDelete: function(e) {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/users/' + this.props.user.id,
      success: function(data) {
        this.props.handleDeleteRecord();
      }.bind(this),
      error: function(xhr, status, error) {
        alert('Cannot delete requested record: ', error);
      }
    });
  },
  handleToggle: function(e) {
    e.preventDefault();
    this.setState({ edit: !this.state.edit });
  },
  recordValue: function(field) {
    return this.refs[field].value;
  },
  handleUpdate: function(e) {
    e.preventDefault();
    if (this.validRecord()) {
      var user_data = {
        email: this.recordValue("email"),
        role: this.recordValue("role")
      };
      $.ajax({
        method: 'PUT',
        url: '/users/' + this.props.user.id,
        data: { user: user_data },
        success: function(data) {
          this.props.handleUpdateRecord(this.props.user, data);
          this.setState({ edit: false });
        }.bind(this),
        error: function(xhr, status, error) {
          alert('Cannot update requested record: ', error);
        }
      });
    } else {
      alert('Please fill all fields.');
    }
  },
  validRecord: function() {
    if (this.recordValue("email") &&
        this.recordValue("role") 
     ) {
      return true;
    } else {
      return false;
    }
  },

  checkValue(name){
      this.props.role == name
  },
  renderForm: function() {
    var options = [
        { value: 'user', label: 'user', id: 1 },
        { value: 'admin', label: 'admin', id: 2 }
    ]; 
     var items = options.map((item) => { return (<option key= {item.id} selected = {this.checkValue(item.value)?"selected":"unselected"} >{item.value}</option>) }); 
    return(
      <tr>

        <td>
          <input name="email"
                 defaultValue={this.props.user.email}
                 className="form-control"
                 type="text"
                 ref="email"
          />
        </td>
        <td>
            <select className="form-control" name="role" ref="role" >
                 {items}
            </select>    
            
        </td>
        
        <td>
          <a className="btn btn-success btn-sm"
             onClick={this.handleUpdate}>
            Save
          </a>
          <a className="btn btn-default btn-sm"
             onClick={this.handleToggle} >
            Cancel
          </a>
        </td>
      </tr>
    );
  },
  renderRecord: function() {
    var user = this.props.user;
    return(
      <tr>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
          <a className="btn btn-danger btn-xs"
             onClick={this.handleDelete} >
            Delete
          </a>
          <a className="btn btn-primary btn-xs"
             onClick={this.handleToggle} >
             Edit
          </a>
        </td>
      </tr>
    );
  },
  render: function() {
    if (this.state.edit) {
      return(this.renderForm());
    } else {
      return(this.renderRecord());
    }
  }
});