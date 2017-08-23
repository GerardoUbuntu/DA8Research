var NewResearch = React.createClass({
     

    render(){

        var labelStyle = {
             marginTop: 10,
             fontSize: 12

        };
        var inputStyle = {
             marginTop: 10
        };
            
       var selectStyle = {
           width: 50
       }; 
        return(
            
           <div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} >Title:</label>
                            <div className="col-sm-10">
                                <input type="text" style = {inputStyle} className="form-control"  placeholder="Enter email" name="research[title]" required/>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label  style={labelStyle} >Abstract:</label>
                            <textarea name="research[abstract]" className="form-control" rows="5" ></textarea>
                        </div>

                         <div className="form-group">
                            <label for="sel1" className="control-label col-sm-2" style = {labelStyle}>Status:</label>
                            <div className = "col-sm-10">
                            <select name = "research[status]"style = {inputStyle} className="form-control" id="sel1" required>
                                <option>On-Going</option>
                                <option>Completed</option>
                            </select>
                            </div>         
                       </div>
                       <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} >Started:</label>
                            <div className="col-sm-10">
                                <input name="research[date_started]" type="date" style = {inputStyle} className="form-control"  placeholder="" required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} for="commodity">Commodity:</label>
                            <div className="col-sm-10">
                                <input name="research[commodity]" type="text"  style = {inputStyle} className="form-control" id="commodity" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} for="email">Zone:</label>
                            <div className="col-sm-10">
                                <input name="research[zone]" type="text" style = {inputStyle} className="form-control" id="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} for="email">Discipline:</label>
                            <div className="col-sm-10">
                                <input name="research[discipline]" type="text" style = {inputStyle} className="form-control" id="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} >Sector:</label>
                            <div className="col-sm-10">
                                <input type="text" name="research[sector]" style = {inputStyle} className="form-control" required />
                            </div>
                        </div>

                      
                        <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} >Fund source:</label>
                            <div className="col-sm-10">
                                <input name="research[fund_source]" type="text" style = {inputStyle} className="form-control"  required />
                            </div>
                        </div>
                        <div className = "row">
                           <div className = "col-sm-6 col-sm-offset-3">
                              <button type="submit" className="btn btn-primary" style = {inputStyle}>Submit</button>
                           </div>
                       </div>
               </div>
        )   
  
    }
}); 