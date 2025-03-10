// This is a React exercise. 10/03/2025
// The App component manages the state of the input field (name and input) and then updaets the state.
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: 'React Learner', input: '' };
    }

    // state management
    handleInputChange = (e) => {
      this.setState({ input: e.target.value });
    };
    
    // update state
    updateName = () => {
      this.setState({ name: this.state.input });
    };
  
    render() {
      return (
        <div>
          <Hello name={this.state.name} />
          <input type="text" value={this.state.input} onChange={this.handleInputChange} />
          <button onClick={this.updateName}>Update Name</button>
        </div>
      );
    }
  }
  
  // Hello component displays name using the 'name' property
  const Hello = ({ name }) => <h1>Hello, {name}!</h1>;
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);