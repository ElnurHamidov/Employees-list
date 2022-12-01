import React from 'react';
import './App.css';
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
      </div>
    </>
  );
}
}

export default App;
