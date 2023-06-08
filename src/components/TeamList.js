import React, { useState, useEffect } from 'react';
import Team from './Team';

import { getAllTeams } from '../services/api-service';
import ScaleLoader from "react-spinners/ScaleLoader";
import "./TeamList.css";
import { AddTeam } from './AddTeam';

export default function PostList() {

  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);


  const getData = async () => {
    setLoading(true)
    const response = await getAllTeams()
    setTeams(response.data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='big-container'>
      <AddTeam getTeams={getData}/>
      <div className="post-container">

        {!loading && teams.length ?
          teams.map((team) =>
            <Team key={team._id} team={team} />

          ) : <ScaleLoader />}


      </div>
    </div>
  )
}