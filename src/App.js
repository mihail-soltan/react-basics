import './App.css';
import HelloWorldComponent from './components/HelloWorld';
import State from './components/State';
import ToDoList from './components/TodoList';
function App() {
  const passedProp = "Jupiter"
  const fakeData = [
    {
      name: "Random Name",
      age: 100
    },
    {
      name: "Random Name",
      age: 100
    },
  ]
  return (
    <div className='App'>
      {/* <HelloWorldComponent groupName={passedProp} fakeData={fakeData} /> */}
      {/* <State /> */}
      <ToDoList/>
    </div>
  );
}

export default App;
