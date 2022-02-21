import { useState } from "react";
import NavBar from "../../components/navbar";
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const ArchivedPage = () => {

    const [news, setNews] = useState([]);

    const loadNews = () => {
        fetch('http://localhost:5000/api/news')
            .then(res => res.json())
            .then(allNews => setNews(allNews));
    }

    loadNews();

    // Delete news
    const deleteNews = (id) => {
        Axios.delete(`http://localhost:5000/api/deleteNews/${id}`);
    };

    return (
        <main>
            <NavBar />

            {news
                .filter(eachNews => eachNews.archiveDate != null)
                .map(eachNews => {
                    return (
                        <div className='center'>
                            <div className='card m-4 justify-content-md-center align-items-center'>
                                <div className='card-body'>
                                    <h2 className='card-title'>{eachNews.title}</h2>
                                    <p className='card-subtitle mb-2 text-muted'>Written by {eachNews.author} · {eachNews.date.substring(0, 10)}</p>
                                    <p className='card-text'><strong>{eachNews.description}</strong></p>
                                    <p className='card-text'>{eachNews.content}</p>
                                    <button onClick={() => { deleteNews(eachNews._id) }} className='btn btn-danger'>Delete news</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </main>
    );

}

export default ArchivedPage