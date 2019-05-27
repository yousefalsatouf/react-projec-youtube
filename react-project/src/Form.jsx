import React, {Component} from 'react';

class Form extends Component
{
    state = {
        newClient: ''
    };

    handleChange = e => {
        const value = e.currentTarget.value;
        this.setState({newClient: value});
    };

    handelSubmit = e =>{
        e.preventDefault();
        const id = new Date().getTime();
        const name = this.state.newClient;

        this.props.onClientAdd({id, name});
        this.setState({newClient: ""})
    };

    render(){
        return  <form onSubmit={this.handelSubmit}>
                    <input type="text" placeholder="add a client" value={this.state.newClient} onChange={this.handleChange}/>
                    <button>Confirm</button>
                </form>;
    }
}
export default Form;