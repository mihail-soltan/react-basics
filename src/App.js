import './App.css'
import TeamList from './components/TeamList';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import TeamDetails from './components/TeamDetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamList />} />
        <Route path="/:teamId" element={<TeamDetails />} />
      </Routes>
    </Router>
  )
}
