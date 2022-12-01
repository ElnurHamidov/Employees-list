import React from 'react';
import Form from './Form';
import img from './employees.jpg';

class Forms extends React.Component{
    
    render(){
        if(this.props.workers.length===0)
        return(
            <img src={img} alt="employees list"/>
        );
        else
        return(
            <div className='row'>
                {this.props.workers.map((e)=> <Form delete={this.props.delete} edit={this.props.edit} key={e.id} workers={e}/>)} 
                {this.props.workers.length>0 && <button type='button' onClick={() => this.props.remove()}>Remove all</button>}
            </div>
        );
    }
}

export default Forms;