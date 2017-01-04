import React, { Component } from 'react';
import './App.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.clickCheck = this.clickCheck.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div>
      <div className="header">
        <h1 className="h1">TODOLIST</h1><h1 className="h2">TODOLIST</h1>
        </div>
  
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
        <div className="ui input focus">
          <input type="text" placeholder="My todolist..." onChange={this.handleChange} value={this.state.text} />
          </div>
          <button className="positive ui button">{'Valider -->' + (this.state.items.length + 1)}</button>
        </form>
      
      
          </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

// clickCheck(e){
//   e.preventDefault();
//   setInterval( ()=> {document.getElementById("checkbox").click();
//   <a><li key={item.id}>
//   <input className="barre" type="checkbox" name="example"/>{item.text}</li></a>
//         ))};
// }, 1000);
// }

class TodoList extends React.Component {
  render() {
    return (
      <ul>
      <div className="ui ribbon label">
      <h3>My TODOLIST</h3>
  
        {this.props.items.map(item => (
          <a><li key={item.id}><input type="checkbox" name="example"/>{item.text}</li></a>
        ))}
        </div>
      </ul>
    );
  }
}


export default TodoApp;
