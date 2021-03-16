import React, {useState, useEffect} from "react";
import './app.module.css';
import YoutubeList from "./commons/youtube_list";
import styles from './app.module.css';
import YoutubeHeader from "./commons/youtube_header";
import YoutubeDetails from "./commons/youtube_details";

function App({youtube}) {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    const onClick = (item) => {
        setSelectedVideo(item)
    }
    const search = (query) => {
        setSelectedVideo('')
        youtube
            .search(query)
            .then(items => setVideos(items))
    }

    useEffect(() => {
        youtube
            .mostPopular()
            .then(items => setVideos(items))
    }, [])

    return (
        <div className={styles.app}>
            <YoutubeHeader onSearch={search}/>
            <div className={styles.detailBox}>
                {selectedVideo &&
                <div className={styles.details}>
                    <YoutubeDetails details={selectedVideo}/>
                </div>}
                <div className={styles.videos}>
                    <YoutubeList videos={videos}
                                 onClick={onClick}
                                 display={selectedVideo ? 'list' : 'index'}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;