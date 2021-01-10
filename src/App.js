import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Components/Video/Video";
import firebase from "firebase";
import db from "./Firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
          (
            { url, channel, description, song, likes, shares, messages },
            index
          ) => (
            <Video
              key={index}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
