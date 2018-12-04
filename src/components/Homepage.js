import React, { Component } from 'react';
import MessageList from './MessageList';
import Sidebar from './Sidebar';
import Grid from 'react-css-grid';


class HomePage extends Component{
    render (){
        return(
            <Grid
                width={320}>
                <Sidebar />
                <MessageList />
            </Grid>
        );
    }

}
export default HomePage;