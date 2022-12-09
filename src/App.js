import './App.css';
import React from "react"

//start task react-0-1
function GoodbyeWorld(){
  return (
    <h2>GoodbyeWorld</h2>
  );
}

function Hello(props){
  return (
    <h2>Hello, {props.name} {props.secondName}</h2>
  );
}

class Bye extends React.Component{
  constructor(){
    super();    
    this.state = {
      state1: "Goodbye",
      state2: 0
    };
    this.Update = this.Update.bind(this);
    this.Reset = this.Reset.bind(this);
  }

  Update(){
    if (this.state.state1 === "Goodbye") 
      this.setState({
        state1: "Hello"    
      });
      else  this.setState({
        state1: "Goodbye"
      });

      this.setState({
        state2: this.state.state2 += 1
      })
  }

  Reset(){
    this.setState({
      state2: 0
    })
  }

  render(){
    return(
      <div>
        <h2>{this.state.state1}, {this.props.hone}</h2>
        <h2>{this.state.state2}</h2>
        <button onClick={this.Update}>Click me</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    );
  }
}
//end task react-0-1

//start task react-0-2
class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      intervalId: 0,
      count: 0
    };
    
    console.log('constructor(): props:', props);
  }
  
  componentDidMount() {
    const newIntervalId = setInterval(() => {
      this.setState(prevState => {
        this.props.funcHandle()
        return {
          ...prevState,
          count: 1,
        };
      });
    }, 1000);
  
    this.setState(prevState => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  }
   
  componentWillUnmount(){
    clearInterval(this.state.intervalId);
    console.log("interval clear")
  }
  
  render() {
    console.log('render(): this.props:', this.props, ', this.state:', this.state);
    return (<div>
      <h2>{this.props.state}</h2>{/*here was in task 5 this.state.count*/}      
      </div>);
  }
}

class Parent extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      state: 0
    };
    this.handleCounterTick = this.handleCounterTick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(){
    this.setState({state: 0});
    console.log("Reset button was clicked")
  }

  handleCounterTick(){   
    this.setState({state: this.state.state+=1});
    console.log("Some text " + this.state.state)
  }

  render() {
    return (<>
    <Counter funcHandle={this.handleCounterTick} state={this.state.state}/>
    <Reset funcReset = {this.handleReset}/> {/*task 7 complete*/}
    </>);
  }
}

class Reset extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      state: 0
    };
    this.buttonEvent = this.buttonEvent.bind(this);
  }

  buttonEvent(){
    this.setState({count: 0});
    console.log(this.props.funcReset)
    this.props.funcReset()
  }

  render(){
    return(<button onClick={this.buttonEvent}>onClick</button>);
  }
}
//end task react-0-2

//start task react-0-3 (to use location in this task we will need to use ReactRouter)
const Child1 = (props) => <h1>Child1</h1>;
const Child2 = (props) => <h1>Child2</h1>;
const Child3 = (props) => <h1>Child3</h1>;

class Parent1 extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      childNo: 1,
    };
  }
  
  handleButtonClick(e) {
    let childNom = this.state.childNo > 2
      ? 1
      : this.state.childNo+1;     
    this.setState({ childNo: childNom });
  }
  

  renderSwitch(param) {
    switch(param) {
      case 1:
        return <Child1/>
      case 2:
        return <Child2/>
      case 3:
        return <Child3/>
      default:
        return <div>Not found</div>;
    }
  }

    render() {    
      return (
        <div>
          <button onClick={this.handleButtonClick.bind(this)} >Switch</button>
          {
            this.renderSwitch(this.state.childNo)
          }
        </div>
      );
    }
  
}
//end task react-0-3

function App() {
  return (
    <div className="App-header">
      {/*TASK1*/}
      <GoodbyeWorld/> 
      <Hello name = "Nick" secondName = "Sviridov"/>
      <Bye hone = "nik0rai"/>

      {/*TASK2*/}
      <Parent/>  

      {/*TASK3*/}
      <Parent1/>
    </div>
  );
}

export default App;