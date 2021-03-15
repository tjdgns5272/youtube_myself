import React, {useRef} from 'react';
import styles from './youtube_header.module.css'

function YoutubeHeader({onSearch}) {

    const inputRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const inputValue = inputRef.current.value
        inputValue && onSearch(inputValue)
        inputRef.current.value = ''
    }

    return (
        <header className={styles.header}>
            <i className="fab fa-youtube youtubeIcon"/>
            <span>Youtube</span>
            <form className={styles.form} onSubmit={onSubmit}>
                <input
                    className={styles.input}
                    ref={inputRef}
                    type="text"
                    placeholder="Search.."/>
                <button>
                    <i className="fas fa-search"/>
                </button>
            </form>
        </header>
    );
}

export default YoutubeHeader;


