import React from 'react';

class App extends React.Component{
  state = {
    num : 0
  }
  plus = () => {
    this.setState(count => ({num : count.num + 1}));
  };
  minus = () => {
    this.setState(count => ({num : count.num -1}));
  };
  remove = () => {
    this.setState(count => ({num : 0}));
  };
  render(){
    return (
      <div>
       <h1>The Number = {this.state.num}</h1>
       <button onClick={this.plus}>plus</button><br/>
       <button onClick={this.minus}>minus</button><br/>
       <button onClick={this.remove}>remove</button>
      </div>
    );
  }
}

export default App;
 