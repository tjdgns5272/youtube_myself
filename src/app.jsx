import React, {useState, useEffect} from "react";
import './app.css';
import YoutubeList from "./commons/youtube_list";
function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAvsKgkC1UZlZMVtg-sU7lMzB3YxplC93M", requestOptions)
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
  },[])

  return (
      <YoutubeList videos={videos}/>
  );

}

export default App;
