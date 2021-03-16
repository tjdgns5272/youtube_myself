class Youtube {
    constructor(key) {
        this.key = key
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    search(query) {
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${query}&regionCode=US&chart=mostPopular&type=video&order=viewCount&key=${this.key}`
            ,this.getRequestOptions
        )
            .then(response => response.json())
            .then(result => result.items.map(item => ({...item, id:item.id.videoId})))
    }
    mostPopular() {
        return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=25&key=${this.key}`
            , this.getRequestOptions)
            .then(response => response.json())
            .then(result => (result.items))
    }
}

export default Youtube
