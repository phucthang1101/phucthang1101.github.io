import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      
    <Layout>
    
       <Header className="header-color">
          <div className="header_nav">
           <Link className="Home_Link" to="/"><i class="fa fa-home" aria-hidden="true"></i>
</Link>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
            </div>
        </Header>
       <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content> 
    </Layout>
</div>

    );
  }
}

export default App;
