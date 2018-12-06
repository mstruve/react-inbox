import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: ''
        };
    }
    
    async componentDidMount() {
        const messages = (await axios.get('https://morning-falls-3769.herokuapp.com/api/messages')).data;
        this.setState({
            messages,
        });
    }


    render() {
        return (
            <div className='container'>
                <div className='row'>
                {this.state.messages === null && <p>Loading messages</p>}
                {
                    this.state.messages && this.state.messages.map(message => (
                        <div key={message.id}>
                            <Link to={`/messages/${message.id}`}>
                                <h1>From: {message.from}</h1>
                                <h3>Subject: {message.subject}</h3>
                            </Link>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }

    
}

export default MessageList;