import styles from "./ShowsSection.module.scss";
import Youtube from "react-youtube";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const ShowsSection = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 700px)' })


  useEffect(() => {
    fetch("https://api.npoint.io/4dd87a042b58a4727240")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  const onHandleClick = (video) => {
    setSelectedVideo(video);
  };

  const getVideoId = (link) => {
    const url = new URL(link);
    return url.searchParams.get("v");
  };

  const showPlayer = () => {
    if (selectedVideo) {
      const opts = {
        height: isSmallScreen ? '195' : '390',
        width: isSmallScreen ? '320' : '640', 
        playerVars: {
          autoplay: 1,
        },
      };
      return (
        <Youtube
          videoId={getVideoId(selectedVideo.link)}
          opts={opts}
          onReady={handleReady}
        />
      );
    } else {
      return <h2>Seleziona un video</h2>;
    }
  };

  const handleReady = (event) => {
    event.target.pauseVideo();
  };

  const showList = () => {
    return (
      <ul className={styles.ListaTot}>
        {videos.map((video) => (
          <li className={styles.singleVideo} key={video.id} onClick={() => onHandleClick(video)}>
            <img src={video.img} alt={video.videoname}  />
            <p>{video.videoname}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.ShowsSection}>
      <div>
        <h1>Mishap Show</h1>
        <div className={styles.Player}>{showPlayer()}</div>
        <div className={styles.Lista}>{showList()}</div>
      </div>
    </div>
  );
};
export default ShowsSection;
