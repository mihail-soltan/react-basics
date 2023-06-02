import "./Example.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { HashLoader } from "react-spinners"

const Example = () => {

    // CREATE, READ, UPDATE, DELETE
    // POST,   GET,  PUT,   DELETE
    const [name, setName] = useState("Human")
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const cuteRedditStuffAPI = "https://www.reddit.com/r/aww.json"

    const articleStyles = {
        display: "flex"
    }
    const onGetData = async () => {
        try {
            setLoading(true)
            const res = await axios.get(cuteRedditStuffAPI)
            setPosts(res.data.data.children)
            setLoading(false)
        }
        catch (err) {
            throw new Error(`Oops, failed to get posts: ${err}`)
        }
    }

    const changeName = () => {
        setName("Monke")
    }

    useEffect(() => {
        onGetData()
    }, [])

    useEffect(() => {
        console.log(`name was set to ${name}`)
    }, [name]) // dependency array

    return (
        <div className="articles">
            <h1>Hello, {name}</h1>
            <button onClick={changeName}>Do something</button>
            <ul>
                {!loading ? posts.map((post) =>
                    <div style={articleStyles}>
                        <img src={post.data.thumbnail} />
                        <li>
                            {post.data.title}
                        </li>
                        <button>Go to Post</button>
                    </div>
                ) :
                    <HashLoader />
                }
            </ul>

        </div>
    )
}

export default Example