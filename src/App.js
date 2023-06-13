import './App.css'
import TeamList from './components/TeamList';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import TeamDetails from './components/TeamDetails';
import PlayerDetails from './components/PlayerDetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamList />} />
        <Route path="/:teamId" element={<TeamDetails />} />
        <Route path="/:teamId/:playerId" element={<PlayerDetails/>} />
      </Routes>
    </Router>
  )
}
