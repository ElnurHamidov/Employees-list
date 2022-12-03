import React from 'react';
import Forms from './Forms';
import Add from './Add';

class Employees extends React.Component{

    render(){
        return(
            <div className='row'>
                <div className="col-md-7">
                    <Forms remove={this.props.remove} workers={this.props.workers} delete={this.props.delete} edit={this.props.edit}/>
                </div>
                <div className="col-md-5">
                    <Add add={this.props.add} />
                </div>
            </div>
        );
    }
}

export default Employees;