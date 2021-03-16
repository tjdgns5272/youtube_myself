import React from 'react';
import styles from './youtube_item.module.css'

function YoutubeItem({video: {snippet}, onClick, video, display}) {

    const onVideoClick = () => {
        onClick(video)
    }
    const displayType = display === 'list' ? styles.list : styles.index
    return (

        <li className={`${styles.container} ${displayType}`} onClick={onVideoClick}>
            <img
                className={styles.thumbnails}
                src={snippet.thumbnails.medium.url}
                alt="thumbnails"/>
            <div className={styles.info}>
                <div className={styles.title}>
                    {snippet.title}
                </div>
                <div className={styles.channelTitle}>
                    {snippet.channelTitle}
                </div>
            </div>
        </li>
    )
}

export default YoutubeItem;