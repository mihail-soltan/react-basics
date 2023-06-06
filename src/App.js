import './App.css'
import PostList from './components/PostList';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import TeamDetails from './components/TeamDetails';
export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/:teamId" element={<TeamDetails />} />
      </Routes>
    </Router>
  )
}
