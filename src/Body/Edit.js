import React from 'react';

class Edit extends React.Component{
    constructor(props){
        super(props);
        this.id1=React.createRef();
        this.id2=React.createRef();
        this.id3=React.createRef();
    }

    render(){
        return(
            <div className='form'>
                <form action="#">
                    <label htmlFor='name'>Name</label>
                    <input defaultValue={this.props.com.name} type="text" id='name' ref={this.id1}/>
                    <label htmlFor="surname">Surname</label>
                    <input defaultValue={this.props.com.surname} type="text" id='surname' ref={this.id2}/>
                    <label htmlFor="age">Age</label>
                    <input defaultValue={this.props.com.age} type="number" id='age' ref={this.id3}/>
                    <button type='button' onClick={() => {
                        if(this.id1.current.value && this.id2.current.value && this.id3.current.value){
                        this.props.edit(this.props.id, {
                        name: this.id1.current.value,
                        surname: this.id2.current.value,
                        age: this.id3.current.value,
                    });
                    this.id1.current.value='';
                    this.id2.current.value='';
                    this.id3.current.value='';
                    this.props.onClose();
                    }}}>Edit</button>
                </form>
            </div>
        );
    }
}

export default Edit;