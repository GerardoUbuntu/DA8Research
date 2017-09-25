var EditResearch = React.createClass({
     
getInitialState: function() {
    return { 
       users: this.props.users,
       sectors: this.props.sectors,
       technologies: this.props.technologies,
       commodities: this.props.commodities,
       disciplines: this.props.disciplines,
       sources: this.props.sources
    };
},
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
        var options =[];
        var value = [];
        var commoditiesOpt = [];
        var sectorsOpt = [];
        var technologiesOpt = [];
        var disciplinesOpt = [];
        for(var i= 0; i<this.props.users.length; i++){
            options.push({id: this.props.users[i].id, label: this.props.users[i].email, value: this.props.users[i].email});
        }

        for(var i= 0; i<this.props.research.users.length; i++){
            value.push(this.props.research.users[i].email)
        }

        for(var i= 0; i<this.props.commodities.length; i++){
            commoditiesOpt.push({id: i, label: this.props.commodities[i], value: this.props.commodities[i]});
        }
       
        for(var i= 0; i<this.props.sectors.length; i++){
            sectorsOpt.push({id: i, label: this.props.sectors[i], value: this.props.sectors[i]});
        }

        for(var i= 0; i<this.props.technologies.length; i++){
            technologiesOpt.push({id: i, label: this.props.technologies[i], value: this.props.technologies[i]});
        }

        for(var i= 0; i<this.props.disciplines.length; i++){
            disciplinesOpt.push({id: i, label: this.props.disciplines[i], value: this.props.disciplines[i]});
        }

        var sectorItems = sectorsOpt.map((item) => { return (<option key={item.id} value={item.value}>{item.label}</option>) });
        var commodityItems = commoditiesOpt.map((item) => { return (<option key={item.id} value={item.value}>{item.label}</option>) });
        var technologyItems = technologiesOpt.map((item) => { return (<option key={item.id} value={item.value}>{item.label}</option>) });
        var disciplineItems = disciplinesOpt.map((item) => { return (<option key={item.id} value={item.value}>{item.label}</option>) });
        var items = options.map((item) => { return (<option key={item.id} value={item.value}>{item.label}</option>) }); 
        return(
            
           <div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} >Title:</label>
                            <div className="col-sm-10">
                                <input type="text" style = {inputStyle} className="form-control"  placeholder="Enter email" name="research[title]" defaultValue ={this.props.research.title}/>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label  style={labelStyle} >Abstract:</label>
                            <textarea name="research[abstract]" defaultValue ={this.props.research.abstract} className="form-control" rows="5" ></textarea>
                        </div>

                         <div className="form-group">
                            <label for="sel1" className="control-label col-sm-2" style = {labelStyle}>Status:</label>
                            <div className = "col-sm-10">
                            <select name = "research[status]"style = {inputStyle} defaultValue ={this.props.research.status} className="form-control" id="sel1">
                                <option value="On-Going">On-Going</option>
                                <option value="Completed">Completed</option>
                            </select>
                            </div>         
                       </div>
                       <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} >Started:</label>
                            <div className="col-sm-10">
                                <input name="research[date_started]" defaultValue ={this.props.research.date_started} type="date" style = {inputStyle} className="form-control"  placeholder=""/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} for="commodity">Commodity:</label>
                            <div className="col-sm-10">
                                <select name = "research[commodity]"style = {inputStyle} defaultValue ={this.props.research.commodity} className="form-control" id="sel1">
                                    {commodityItems}    
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} for="email">Zone:</label>
                            <div className="col-sm-10">
                                <input name="research[zone]" defaultValue ={this.props.research.zone} type="text" style = {inputStyle} className="form-control" id="email"  />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} for="email">Discipline:</label>
                            <div className="col-sm-10">
                                <select name = "research[discipline]"style = {inputStyle} className="form-control"  defaultValue ={this.props.research.discipline} id="sel1">
                                        {disciplineItems}
                                </select>
                            </div>
                            
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} >Sector:</label>
                            <div className="col-sm-10">
                                <select name = "research[sector]"style = {inputStyle} defaultValue ={this.props.research.sector}  className="form-control" id="sel1">
                                        {sectorItems}
                                </select>
                            </div>
                        </div>

                      
                        <div className="form-group">
                            <label className="control-label col-sm-2" style={labelStyle} >Fund source:</label>
                            <div className="col-sm-10">
                                <input name="research[fund_source]" type="text" defaultValue ={this.props.research.fund_source} style = {inputStyle} className="form-control"  />
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="sel1" className="control-label col-sm-2" style = {labelStyle}>Researches:</label>
                            <div className = "col-sm-10">
                            <select defaultValue ={value} multiple  name = "research[users][]"style = {inputStyle} className="form-control" id="sel1" required>
                                {items}
                            </select>
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