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

    getInitialState: function() {
      return { 
         sectors: this.props.sectors,
         technologies: this.props.technologies,
         commodities: this.props.commodities,
         disciplines: this.props.disciplines,
         sources: this.props.sources
      };
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

      var commoditiesOpt = [];
      var sectorsOpt = [];
      var technologiesOpt = [];
      var disciplinesOpt = [];
      
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
                     <label  className="control-label col-sm-2" style = {labelStyle}>Commodity:</label>
                        <div className = "col-sm-10">
                            <select name = "commodity" ref= "commodity" style = {selectStyle} >
                                {commodityItems}  
                            </select>
                     </div>
                 </div>
                 <div className="row">
                     <label  className="control-label col-sm-2" style = {labelStyle}>Sector:</label>
                        <div className = "col-sm-10">
                            <select name = "sector" ref="sector" style = {selectStyle}>
                                  {sectorItems}
                            </select>
                    </div>
                 </div>
                 <div className="row">
                     <label  className="control-label col-sm-2 " style = {labelStyle}>Discipline:</label>
                        <div className = "col-sm-10">
                            <select name="discipline" style = {selectStyle} >
                                 {disciplineItems}
                            </select>
                    </div>
                 </div>

                 <div className="row">
                     <label  className="control-label col-sm-2" style = {labelStyle}>Technology:</label>
                        <div className = "col-sm-10">
                            <select name="technology" style = {selectStyle} >
                                {technologyItems}  
                            </select>
                    </div>
                 </div>

                 <div className="row">
                     <label  className="control-label col-sm-2" style = {labelStyle}>Fund Source:</label>
                        <div className = "col-sm-10">
                            <select name="" style = {selectStyle} >
                                 
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