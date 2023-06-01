import React, { useState, useEffect } from 'react';
import "./State.css";
import ArticleCard from './ArticleCard';
import axios from 'axios';
import PacmanLoader from "react-spinners/PacmanLoader";
function State() {
    //  HOOKS -
    // useState
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)

    const api = "https://hn.algolia.com/api/v1/search?query=&hitsPerPage=25"

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const containerStyles = {
        backgroundColor: "green",
        width: "250px",
        height: "250px"
    }

    // const fetchData = async () => {
    //     try {
    //         const res = await fetch(api)
    //         const jsonData = await res.json()
    //         setArticles(jsonData.hits)
    //     }
    //     catch (err) {
    //         throw new Error(`Failed to fetch articles: ${err}`)
    //     }
    // }

    const fetchWithAxios = async () => {
        try {
            setLoading(true)
            const res = await axios.get(api)
            setArticles(res.data.hits)
            setLoading(false)
        }
        catch (err) {
            throw new Error(`Failed to fetch articles: ${err}`)
        }
    }

    useEffect(() => {
        fetchWithAxios()
    }, [])
    return (
        <div>
            <p>
                Count: {count}
            </p>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decrement</button>

            <div className='input-value'>
                <h2> Get value from input</h2>
                <input type="text" value={name} onChange={handleChange} />
                <h3>Hello, {name}</h3>
            </div>
            {/* <div>
                <h2>Stylish Fancy Elements</h2>
                <div className='container-1'>

                </div>
                <div style={{ backgroundColor: "red", width: "250px", height: "250px" }} className='container-2'>

                </div>
                <div style={containerStyles} className='container-3'>

                </div>
            </div> */}
            <div className='article-container'>
                <h1>Articles</h1>
                {/* pasam toate articolele */}
                {/* <ArticleCard articles={articles}/> */}
                {
                    !loading ? articles.map((article) =>
                        <ArticleCard article={article} />

                    ) : <PacmanLoader size={30} />}
            </div>
        </div>
    )
}

export default State