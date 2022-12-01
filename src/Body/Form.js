import React from "react";
import { AiFillTool, AiOutlineClose} from "react-icons/ai";
import Edit from "./Edit";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            click: false,
        }
        this.close=this.close.bind(this);
    }

    close(){
        this.setState({
            click: !this.state.click,
        })
    }

    render(){
        return(
            <>
            <div className="form-element">
                <div>
                    <h5>{this.props.workers.name} {this.props.workers.surname}</h5>
                    <p>Age : {this.props.workers.age}</p>
                </div>
                <div>    
                    < AiFillTool className="icon" onClick={() => this.close()}/>
                    <AiOutlineClose className="icon" onClick={ ()=> this.props.delete(this.props.workers.id)}/>
                </div>
            </div>
            <div>
                {this.state.click && <Edit com={this.props.workers} onClose={this.close} edit={this.props.edit} id={this.props.workers.id}/>}
            </div>
            </>
        );
    }
}

export default Form;