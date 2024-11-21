import React from 'react';
import { API_URL } from '@/app/(home)/page';

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('Failed to fetch videos'); // 에러 처리 테스트
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);

  return <div>{JSON.stringify(videos)}</div>;
};
export default MovieVideos;
