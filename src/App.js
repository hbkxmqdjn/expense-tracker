import React from 'react';
import './App.css';
import PropTypes from 'prop-types'

var total = 0;
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expense:'',
      table:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleChange(event){
    this.setState({
        expense: event.target.value,
        table: this.state.table
      })
  }
  handleSubmit(event){
    event.preventDefault();
    if(this.state.expense){
      this.setState({
        expense: '',
        table: [...this.state.table,this.state.expense]
      })
      total+=parseFloat(this.state.expense);
    }
  }

  handleDelete(index){
    const table = this.state.table;
    const expense = table.splice(index,1);
    this.setState({
      table: table
    })
    total-=parseFloat(expense);
  }
  handleEdit(index){
    const table = this.state.table;
    const expense = table.splice(index,1);
    this.setState({
      table: table,
      expense: expense
    })
    total-=parseFloat(expense);
    
  }
  render(){
    return(
      <div id="outside"> 
        <h1>Expense Tracker</h1>
        <input placeholder={"Enter expense"} value={this.state.expense} onChange={this.handleChange}></input>
        &nbsp;&nbsp;
        <button class="button" onClick={this.handleSubmit}>Submit!</button>
            
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Expense</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.table.map((item,index)=>{
                return(
                  <tr key={index}>
                  <td>No.{index +1}</td>
                  <td>{item}</td>
                  <td><button class = "btn btn-primary mb1 bg-blue" onClick={()=>this.handleDelete(index)}>Delete</button></td>
                  <td><button onClick ={()=>this.handleEdit(index)}>Edit</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <h1>Total: {total}</h1>
      </div>
    )
  }
}

export default App;
