import React from 'react';
import Forms from './Forms';
import Add from './Add';

class Employees extends React.Component{

    render(){
        return(
            <div className='body__row'>
                <Forms remove={this.props.remove} workers={this.props.workers} delete={this.props.delete} edit={this.props.edit}/>
                <Add add={this.props.add} />
            </div>
        );
    }
}

export default Employees;