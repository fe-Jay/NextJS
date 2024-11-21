import React from 'react';
import { API_URL } from '@/app/(home)/page';

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  const { title, tagline, overview, poster_path } = movie;
  return (
    <div>
      <h1>🎞️ {title}</h1>
      <h2>{tagline}</h2>
      <p>{overview}</p>
    </div>
  );
};

export default MovieInfo;
