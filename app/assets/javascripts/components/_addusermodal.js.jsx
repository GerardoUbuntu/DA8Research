var AddUser = React.createClass({
  
  getInitialState: function() {
    return {
      email: '',
      password: '',
      password_confirmation: '',
    }
  },
  handleAdd: function(e) {
    e.preventDefault();
    var self = this;
    if (this.validForm()) {
      $.ajax({
        url: '/users',
        method: 'POST',
        data: { user: self.state },
        success: function(data) {
          self.props.handleAdd();
          
        },
        error: function(xhr, status, error) {
          alert('Cannot add a new record: ', error);
        }
      })
    } else {
      alert('Please fill all fields.');
    }
  },
  validForm: function() {
    if (this.state.email && this.state.password_confirmation &&
        this.state.password ) {
      return true;
    } else {
      return false;
    }
  },
  handleChange: function(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({ [input_name] : value });
  },
    
    render(){ 
       var labelStyle = {
             marginTop: 10,
             fontSize: 12

        };

        var submitStyle = {
          marginTop: 20,
          marginLeft: 150
        }
        var inputStyle = {
             marginTop: 10
        };
            
      
     return(
      <div className="modal fade" id="addUser"  role="dialog">
         <div className="modal-dialog modal-md">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Add User</h4>
                </div>
                <div className="modal-body">
                    <form className="form-inline" onSubmit={this.handleAdd}>
                        <div className="form-group">
                            <label className="control-label col-sm-3" style={labelStyle} >Email:</label>
                            <div className="col-sm-9">
                                <input type="email" style = {inputStyle} className="form-control"  placeholder="Enter email" name="email" ref="email"
                                        value={this.state.email}
                                        onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-3" style={labelStyle} >Password:</label>
                            <div className="col-sm-9">
                                <input type="password" style = {inputStyle} className="form-control"   name="password" ref="password"
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-4" style={labelStyle} >Password_confirmation:</label>
                            <div className="col-sm-8">
                                <input type="password" style = {inputStyle} className="form-control"   name="password_confirmation" ref="password_confirmation"
                                    value={this.state.password_confirmation}
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        
                                <button type="submit" className="btn btn-primary"  style ={submitStyle} >Submit</button>
                        
                        </form> 
                </div>

              
            </div>
        </div>
    </div>
     )
    }
});