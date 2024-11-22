import React from 'react';
import { API_URL } from '@/app/(home)/page';
import styles from '@/app/styles/movie-video.module.css';

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('Failed to fetch videos'); // 에러 처리 테스트
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map((video: { id: string; key: string; name: string }) => {
        const { id, key, name } = video;
        return (
          <iframe key={id} src={`https://youtube.com/embed/${key}`} title={name} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        );
      })}
    </div>
  );
};
export default MovieVideos;
