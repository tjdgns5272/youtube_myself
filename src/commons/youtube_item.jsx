import React from 'react';
import styles from './youtube_item.module.css'

function YoutubeItem({video: {snippet}}) {
    return (
        <li className={styles.container}>
            <img
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