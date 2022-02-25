import { useState } from "react";
import NavBar from "../../components/navbar";
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const NewPage = () => {

    const [news, setNews] = useState([]);

    const loadNews = () => {
        fetch('http://localhost:5000/api/news')
            .then(res => res.json())
            .then(allNews => setNews(allNews));
    }

    loadNews();

    // Archive news
    const archiveNews = (id) => {
        Axios
            .put('http://localhost:5000/api/archiveNews', { id: id })
            .then(() => {
                window.location.reload(false);
            })
            .catch(() => {
                alert('It didnt worked.');
            });
    };

    return (
        <main>
            <NavBar />

            {news
                .filter(eachNews => eachNews.archiveDate === null || eachNews.archiveDate === '')
                .map(eachNews => {
                    return (
                        <div className='center'>
                            <div className='card m-4 justify-content-md-center align-items-center'>
                                <div className='card-body'>
                                    <h2 className='card-title'>{eachNews.title}</h2>
                                    <p className='card-subtitle mb-2 text-muted'>Written by {eachNews.author} · {eachNews.date.substring(0, 10)}</p>
                                    <p className='card-text'><strong>{eachNews.description}</strong></p>
                                    <p className='card-text'>{eachNews.content}</p>
                                    <button onClick={() => { archiveNews(eachNews._id) }} className='btn btn-primary'>Archive news</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </main>
    );

}

export default NewPage