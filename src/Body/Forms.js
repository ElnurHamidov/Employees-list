import React from 'react';
import Form from './Form';

class Forms extends React.Component{
    
    render(){
        if(this.props.workers.length===0)
        return(
            <div className="display-2" style={{color: '#fff' , textAlign: 'center', fontWeight: 'bold'}}>You don't have employees</div>
        );
        else
        return(
            <div className='row'>
                {this.props.workers.map((e)=> <Form delete={this.props.delete} edit={this.props.edit} key={e.id} workers={e}/>)} 
                {this.props.workers.length>0 && <button style={{margin: '20px auto', width: '60%'}} type='button' onClick={() => this.props.remove()}>Remove all</button>}
            </div>
        );
    }
}

export default Forms;