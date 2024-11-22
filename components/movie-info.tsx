import React from 'react';
import { API_URL } from '@/utils/constants';
import styles from '@/app/styles/movie-info.module.css';

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  const { title, overview, poster_path, vote_average } = movie;
  return (
    <div className={styles.container}>
      <img src={poster_path} alt={title} className={styles.poster} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}🎞️</h2>
        <h3 className={styles.vote}>⭐️ {vote_average}</h3>
        <p>{overview}</p>
        <a href={movie.homepage} target={'_blank'}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
};

export default MovieInfo;
