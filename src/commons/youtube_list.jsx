import React from 'react';
import YoutubeItem from "./youtube_item";
import styles from './youtube_list.module.css'
function YoutubeList({videos}) {
    return (
        <ul className={styles.videos}>
            {videos.map((video) =>
                <YoutubeItem
                    key={video.id}
                    video={video}
                />
            )}
        </ul>
    )
};

export default YoutubeList;