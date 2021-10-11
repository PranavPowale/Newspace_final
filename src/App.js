import './App.css';
import Hero from './comp/Hero';
import Navbar from './comp/Navbar';
import React, { Component } from 'react'
import News from './comp/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  newsSize = 10;
  apiKey=process.env.REACT_APP_NEWS_API

  state ={
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
    
  }
  render() {
    return (
      <>
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Switch>
        
          <Route  exact path="/"><Hero /></Route>
          <Route exact path="/home"><News  setProgress={this.setProgress} apiKey={this.apiKey} key='General'  newsSize={this.newsSize} country="in" category='general'/></Route>
          <Route exact path="/business"><News  setProgress={this.setProgress}  apiKey={this.apiKey} key='business' newsSize={this.newsSize} country="in" category='business'/></Route>
          <Route exact path="/entertainment"><News  setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment'  newsSize={this.newsSize} country="in" category='entertainment'/></Route>
          <Route exact path="/general"><News  setProgress={this.setProgress} apiKey={this.apiKey} key='general'  newsSize={this.newsSize} country="in" category='general'/></Route>
          <Route exact path="/health"><News  setProgress={this.setProgress} apiKey={this.apiKey} key='health'  newsSize={this.newsSize} country="in" category='health'/></Route>
          <Route exact path="/science"><News  setProgress={this.setProgress} apiKey={this.apiKey} key='science'  newsSize={this.newsSize} country="in" category='science'/></Route>
          <Route exact path="/sports"><News  setProgress={this.setProgress} apiKey={this.apiKey} key='sports'  newsSize={this.newsSize} country="in" category='sports'/></Route>
          <Route exact path="/technology"><News  setProgress={this.setProgress} apiKey={this.apiKey} key='technology'  newsSize={this.newsSize} country="in" category='technology'/></Route>
              
        </Switch>
        
        </Router>
      
      </>
    )
  }
}



