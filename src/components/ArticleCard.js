import './ArticleCard.css'

function ArticleCard({ article }) {
    const months = [
        'Ianuarie',
        'Februarie',
        'Martie',
        'Aprilie',
        'Mai',
        'Iunie',
        'Iulie',
        'August',
        'Septembrie',
        'Octombrie',
        'Noiembrie'
    ]
    const convertDateToHumanFormat = (str) => {
        const newDate = new Date(str)
        const day = newDate.getDate()
        const month = months[newDate.getMonth()]
        const year = newDate.getFullYear()
        const humanFormat = `${day} ${month}, ${year}`
        return humanFormat
    }
    return (
        // pentru toate articolele
        // <>
        //     {articles.map((article) =>
        //         <div className="card">
        //             <h2>Title: {article.title}</h2>
        //             <div className='meta'>
        //                 <p>Author: {article.author} </p>
        //                 <p>Added on: {article.created_at}</p>
        //             </div>
        //             <a href={article.url} target="_blank">Read More...</a>
        //         </div>
        //     )}
        // </>
        <>
            <div className="card">
                <h2>Title: {article.title}</h2>
                <div className='meta'>
                    <p>Author: {article.author}</p>
                    <p>Added on: {convertDateToHumanFormat(article.created_at)} </p>
                </div>
                <a href={article.url} target="_blank">Read More...</a>
            </div>
        </>
    )
}

export default ArticleCard