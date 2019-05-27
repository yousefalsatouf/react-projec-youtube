import React, { Component } from 'react';
import './App.css';
import Client from "./Client";
import Form from "./Form";

class App extends Component
{
  state = {
    clients: [
      {id: 1, name: "person1"},
      {id: 2, name: "person2"},
      {id: 3, name: "person3"}
    ]
  };
  handleClick= () =>
  {
    //this.setState({counter: this.state.counter +1}) this is for counter thing .....
    //console.log(this.state);
    const clients = this.state.clients.slice();
    clients.push({id:4, name: "person4"});
    this.setState({clients: clients});
  };
  handleDelete = (id)=>{
    const clients = this.state.clients.slice();
    const index = clients.findIndex(function (client) {
      return client.id === id;
    });

    clients.splice(index, 1);
    this.setState({clients: clients});
  };

  handleAdd = client => {
    const clients = this.state.clients.slice();

    clients.push(client);
    this.setState({clients});
  };
  render()
  {
    const title = "List of client:";
    const elements = this.state.clients.map(client=>(
        <Client details={client} onDelete={this.handleDelete}/>
    ));
    return (
        <div className="container">
          <h1>{title}</h1>
          <ul>{elements}</ul>
          <Form onClientAdd={this.handleAdd}/>
        </div>
    )
  }
}

export default App;
