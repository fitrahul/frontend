import { useState } from 'react';
import './App.css';
// import CounterWith from './components/CounterWith';
// import CounterWithout from './components/CounterWithout';
// import TodoReact from './components/TodoReact';
import TodoRedux from './components/TodoRedux';

function App() {

  const [isChecked, setIsChecked] = useState(false);

  // Event handler for checkbox change
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="App">
      {/* with useSelector and useDispatch */}
      {/* <CounterWith /> */}

      {/* with mapStateToProps and mapDispatchToProps */}
      {/* <CounterWithout /> */}

      {/* Todo with React */}
      {/* <TodoReact /> */}

      {/* Todo with Redux */}
      <TodoRedux />
      <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        Checkbox Label
      </label>
      <div>Checked: {isChecked.toString()}</div>
    </div>
    </div>
  );
}

export default App;
