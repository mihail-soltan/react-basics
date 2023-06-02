import './App.css';
import HelloWorldComponent from './components/HelloWorld';
import State from './components/State';
import ToDoList from './components/TodoList';
import Example from './components/Example';
import Home from './components/Home';
import Post from './components/Post';
import { Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>

      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/post/:id' element={<Post/>}/>
          <Route path='/hello-world' exact element={<HelloWorldComponent />} />
          <Route path='/state' element={<State />} />
          <Route path='/to-do-list' element={<ToDoList />} />
          <Route path='/example' element={<Example />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
