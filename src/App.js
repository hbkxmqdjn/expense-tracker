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
  render(){
    return(
      <div id="outside"> 
        <h1>Expense Tracker</h1>
        <form onSubmit={this.handleSubmit}>
        <input placeholder={"Enter expense"} value={this.state.expense} onChange={this.handleChange}></input>
        &nbsp;&nbsp;
        <button class="button" type='submit'>Submit!</button>
        </form>   
           
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Expense</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.table.map((item,index)=>{
                return(
                  <tr key={index}>
                  <td>No.{index +1}</td>
                  <td>{item}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {console.log(this.state.table)}
        <h1>Total: {total}</h1>
      </div>
    )
  }
}

export default App;
