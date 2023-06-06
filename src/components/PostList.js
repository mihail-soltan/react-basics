import React, {useState, useEffect} from 'react';
import Post from './Post';
import axios from 'axios';
import ScaleLoader from "react-spinners/ScaleLoader";
import "./PostList.css";
export default function PostList(){
  /*
 
  */
  const apiUrl = "https://team-manager-backend-production.up.railway.app/teams/"
  const [teams,setTeams]=useState([]);
  const [loading,setLoading]=useState(false);
  async function getData(){
    try { 
      setLoading(true)
      const response = await axios.get(apiUrl)
     setTeams(response.data)
      setLoading(false)
      
    }
  catch(err){
    throw new Error(`Something went wrong: ${err}`)
  }
  }
  
  useEffect(()=>{
  getData()
  }, [])
  return (
    <div className="post-container">
      {/* <Post team={team} /> */}
      {!loading?
        teams.map((team)=>
      <Post key={team._id} team={team}/>
        
                 ):<ScaleLoader/>}
                   
   
    </div>
  )
}