Modal = React.createClass({
    handleDelete(research) {
        this.props.handleDelete(research);
        console.log(research)
    }, 

    render(){
        return(
            <div key={this.props.research.id} className="modal fade" id={this.props.research.id} role="dialog">
                <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Delete Research</h4>
                    </div>
                    <div className="modal-body">
                    <p>Are you sure you want to delete this?</p>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleDelete.bind(this, this.props.research)}>Yes</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>
                )
    }
})