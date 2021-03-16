import React from 'react';
import styles from './youtube_details.module.css'
function YoutubeDetails ({details, details:{snippet}}) {
    return (
        <div className={styles.details}>
            <iframe
                className={styles.iframe}
                type="text/html"
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${details.id}`}
                frameBorder="0" allowFullScreen/>
            <h2>{snippet.title}</h2>
            <h2>{snippet.channelTitle}</h2>
            <h2 className={styles.description}>{snippet.description}</h2>

        </div>
    );
}

export default YoutubeDetails;