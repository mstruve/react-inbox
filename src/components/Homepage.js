import React, { Component } from 'react';
import MessageList from './MessageList';
import Sidebar from './Sidebar';
import Grid from 'react-css-grid';
import axios from 'axios';

class HomePage extends Component{
  // state = component like a todo list changes
  // props are like arguments set and should stay
  state = { messages: [], filteredMessages: [] }

  // like a callback happens after components are ready
  async componentDidMount() {
    const messages = (await axios.get('https://morning-falls-3769.herokuapp.com/api/messages')).data;
    this.setState({
      messages,
      filteredMessages: messages
    });
  }

  filterMessages(filter) {
    if(filter === "") {
      this.setState({ filteredMessages: this.state.messages });
    } else {
      const filteredMessages = this.state.messages.filter((message) => message.from === filter) || []
      this.setState({ filteredMessages })
    }
  }

  render (){
    const filterMessages = filter => {
      return () => {
        this.filterMessages(filter);
        console.log(filter);
      }
    }
    return(
      <Grid
        width={320}>
        <Sidebar filter={filterMessages}/>
        <MessageList messages={this.state.filteredMessages}/>
      </Grid>
    );
  }

}
export default HomePage;
