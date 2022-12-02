import React from 'react';
import './App.css';
import { BsFacebook,  BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub,} from 'react-icons/ai';
import Header from './Header/Header';
import Employees from './Body/Employees';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      employees:[
        
      ]
    }
    this.onAdd=this.onAdd.bind(this);
    this.onDelete=this.onDelete.bind(this);
    this.onEdit=this.onEdit.bind(this);
    this.removeAll=this.removeAll.bind(this);
  }

  onAdd(a){
    let id=this.state.employees.length + 1;
    let obj = a;
    obj.id=id;
    let arr=this.state.employees.slice();
    arr.push(obj);
    this.setState({
      employees: arr,
    })
  }

  onDelete(id){
    let arr=this.state.employees.filter((e, i)=> e.id !==id);
    this.setState({
      employees: arr,
    })
  }

  removeAll(){
    this.setState({
      employees: [],
    })
  }

  onEdit(id, obj){
      let arr=this.state.employees.map( (e) =>{ 
        if (e.id!==id ){
          return e;
        }else{
          let a=obj;
          a.id=id;
          return a;
        }

      }
      )
      this.setState({
        employees: arr,
      })
  }

  render(){
  return (
    <>
    <Header />
      <div className='wrapper'>
        <div className="container">
            <Employees remove={this.removeAll} add={this.onAdd} workers={this.state.employees} delete={this.onDelete} edit={this.onEdit} />
        </div>
        <div className='footer'>
            <footer className="text-center text-white" style={{background: 'rgba(0, 0, 0, .5)'}}>
            <div className="container pt-4">
            <section className="mb-4">
            <a
                target="_blank" rel="noopener noreferrer"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.facebook.com/elnur.gamidov.54"
                role="button"
                data-mdb-ripple-color="dark"
                ><i className="fab fa-facebook-f"><BsFacebook className="icon" /></i
              ></a>
              <a
                target="_blank" rel="noopener noreferrer"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href=" https://wa.me/+994708221706"
                role="button"
                data-mdb-ripple-color="dark"
                ><i className="fab fa-twitter"><BsWhatsapp className="icon"/></i
              ></a>
              <a
                target="_blank" rel="noopener noreferrer"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.instagram.com/gamidovelnur"
                role="button"
                data-mdb-ripple-color="dark"
                ><i className="fab fa-instagram">< BsInstagram className="icon"/></i
              ></a>
              <a
                target="_blank" rel="noopener noreferrer"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.linkedin.com/in/elnur-hamidov-685737216/"
                role="button"
                data-mdb-ripple-color="dark"
                ><i className="fab fa-linkedin"><AiFillLinkedin className="icon"/></i
              ></a>
              <a
                target="_blank" rel="noopener noreferrer"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://github.com/ElnurHamidov"
                role="button"
                data-mdb-ripple-color="dark"
                ><i className="fab fa-github"><AiFillGithub className="icon"/></i
              ></a>
            </section>
          </div>
          <div className="text-center  p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            <p>My Contacts</p>
          </div>
      </footer>
            </div>
      </div>
    </>
  );
}
}

export default App;
