// this is a React exercise. 10/03/2025
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// the App component manages the state of the input field (name and input) and then updaets the state.
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          name: 'React Learner', 
          input: '', 
          history: []
        };
    }

    // state management based on input
    handleInputChange = (e) => {
      this.setState({ input: e.target.value });
    };
    
    // update state
    updateName = () => {
      if (this.state.input.trim() !== '') {
        this.setState((prevState) => ({
          name: prevState.input,
          history: [...prevState.history, prevState.input],
          input: ''
        }));
      }
    };

    // clear history
    clearHistory = () => {
        this.setState({ history: [] });
    };
  
    render() {
      return (
        <div>
          <Hello name={this.state.name} />
          <input type="text" value={this.state.input} onChange={this.handleInputChange} />
          <button onClick={this.updateName}>Update Name</button>
          <NameHistory history={this.state.history} clearHistory={this.clearHistory} />
        </div>
      );
    }
  }
  
    // 'Hello' component displays name using the 'name' property
    const Hello = ({ name }) => <h1>Hello, {name}!</h1>;

    // 'NameHistory' component displays the history of names
    const NameHistory = ({ history, clearHistory }) => (
        <div>
        <h2>Name History</h2>
        <ul>
            {history.map((name, index) => (
            <li key={index}>{name}</li>
            ))}
        </ul>
        <button onClick={clearHistory}>Clear History</button>
        </div>
    );
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);