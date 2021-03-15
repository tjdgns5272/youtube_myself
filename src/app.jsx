import React, {useState, useEffect} from "react";
import './app.module.css';
import YoutubeList from "./commons/youtube_list";
import styles from './app.module.css';
import YoutubeHeader from "./commons/youtube_header";

function App() {
    const [videos, setVideos] = useState([])

    const search = (query) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${query}&regionCode=KR&chart=mostPopular&type=video&order=viewCount&key=AIzaSyAvsKgkC1UZlZMVtg-sU7lMzB3YxplC93M`
            , requestOptions)
            .then(response => response.json())
            .then(result => result.items.map(item => ({...item, id:item.id.videoId})))
            .then(result => setVideos(result))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAvsKgkC1UZlZMVtg-sU7lMzB3YxplC93M"
            , requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className={styles.app}>
            <YoutubeHeader
                onSearch={search}/>
            <YoutubeList videos={videos}/>
        </div>
    );
}

export default App;
