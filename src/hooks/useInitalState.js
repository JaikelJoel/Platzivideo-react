import { useState, useEffect } from 'react';

const useInitalState = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);
  return videos;
};

export default useInitalState;
