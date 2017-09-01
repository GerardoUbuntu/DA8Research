var AdvanceSearch = React.createClass({
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
      var labelStyle = {
        fontSize: 12
      };
      var inputStyle = {
         marginTop: 10
      };
            
      var selectStyle = {
          marginLeft: 20
      }; 
      
      return(
         <div> 
           Advance Search    
              <form>
               <div className="row">

                 <label for="sel1" className="control-label col-sm-2" style = {labelStyle}>Status:</label>
                 <div className = "col-sm-10">
                     <select name = "status" ref="status" style = {selectStyle}  id="sel1">
                        <option value="On-Going">On-Going</option>
                        <option value="Completed">Completed</option>
                     </select>
                   </div>
                 </div>    
                 <div className="row">
                     <label  className="control-label col-sm-2" style = {labelStyle}>Status:</label>
                        <div className = "col-sm-10">
                            <select name = "commodity" ref= "commodity" style = {selectStyle} >
                                    <option value="On-Going">On-Going</option>
                                    <option value="Completed">Completed</option>
                            </select>
                     </div>
                 </div>
                 <div className="row">
                     <label  className="control-label col-sm-2" style = {labelStyle}>Status:</label>
                        <div className = "col-sm-10">
                            <select name = "sector" ref="sector" style = {selectStyle}>
                                    <option value="On-Going">On-Going</option>
                                    <option value="Completed">Completed</option>
                            </select>
                    </div>
                 </div>
                 <div className="row">
                     <label  className="control-label col-sm-2" style = {labelStyle}>Status:</label>
                        <div className = "col-sm-10">
                            <select name="fund_source" style = {selectStyle} >
                                    <option value="On-Going">On-Going</option>
                                    <option value="Completed">Completed</option>
                            </select>
                    </div>
                 </div>

                 <div className = "row">
                           <div className = "col-sm-6 col-sm-offset-3">
                              <button type="submit"  style = {inputStyle}>Search</button>
                           </div>
                       </div>
              </form>       
         </div> 
      )
    }
  });