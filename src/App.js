import React from "react";
import PropType from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };

  /*
    setState 함수를 실행하면 render 함수를 실행해서 state 값만 변경시켜준다.
    state 값을 변경할 때는 curent 을 사용하여 변경!
    (this.state.count + 1 처럼 직접 state 값을 변경하지 않도록 주의!)
  */
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("Mounting!");
  }

  componentDidUpdate() {
    console.log("Updateing");
  }

  componentWillUnmount() {
    console.log("Goodbye!");
  }

  render() {
    console.log("rendering!");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
