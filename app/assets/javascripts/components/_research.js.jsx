Research = React.createClass({
    handleDelete(research) {
       this.props.handleDelete(research);
    },
    
    getInitialState() { return { 
        modal: "#" + this.props.research.id
    } },
    
    render() {
          var researchers = "";
          for(var i=0; i<this.props.research.users.length; i++){
              if(i == 0)
                researchers += this.props.research.users[i].email;
              else
                researchers += "," + this.props.research.users[i].email ;
          }

          return ( 
            <div key = {this.props.research.id}> 
                <hr/>
                <div className = "row">
                    <div className = "col-md-8">    
                        <a href={`/researches/${this.props.research.id}`} ><h2 className="blog-post-title">{this.props.research.title}</h2></a>
                        <p className="blog-post-meta">{this.props.research.date_started}</p>
                    </div>  
                    <div className = "col-md-4">
                          <button type="button" className="btn btn-danger" data-toggle="modal" data-target={this.state.modal} aria-label="Left Align">
                             <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                         </button>
                         <a href= {`/researches/${this.props.research.id}/edit`} type="button" className="btn btn-primary" aria-label="Left Align">
                             <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                         </a>
                    </div> 
                </div>    
                    <div className = "blog-post row" >  
                        <p> Researchers: {researchers} </p>  
                        <p> Summary: {this.props.research.abstract}</p>
                        <div className="row"> 
                            <div className="col-md-6">
                                <p> Status: {this.props.research.status}</p>
                            </div>    
                            <div className="col-md-6">
                                <p> Sector: {this.props.research.sector}</p>
                            </div>    
                        </div> 
                        <div className="row"> 
                            <div className="col-md-6">
                                <p> Discipline: {this.props.research.discipline}</p>
                            </div>    
                            <div className="col-md-6">
                                <p> Commodity: {this.props.research.commodity}</p>
                            </div>    
                        </div>            
                 </div> 
            </div>
        ) 
    }  
});
