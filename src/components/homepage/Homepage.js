import React, { Component } from 'react';
import Axios from 'axios';

const API = ('https://morning-falls-3769.herokuapp.com/api/messages')

class Homepage extends Component {
    state = {
        messages: []
    }
    componentDidMount() {
        Axios.get(API)
          .then(res => {
            const messages = res.data;
            this.setState({ messages });
          })
      }
    
      render() {
        return (
            <div>
                <ul>
                { this.state.messages.map(message => <li>{message.id} {message.from}</li>)}
                </ul>
            </div>
        );
      
    }
}

export default Homepage;