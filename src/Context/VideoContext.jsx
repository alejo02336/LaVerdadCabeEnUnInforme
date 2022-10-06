import React, { useState } from "react";

export const VideoContext = React.createContext();

export function VideoWrapper({ children }) {
  const videos = [
    {
      urls: [
        "https://www.youtube.com/watch?v=ro9_laKaPpE&ab_channel=JAlvarez",
        "https://www.youtube.com/watch?v=2",
      ],
      title: "Video 1",
      description: "Video 1 description",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <VideoContext.Provider value={{ currentVideo, setCurrentVideo, videos }}>
      {children}
    </VideoContext.Provider>
  );
}
