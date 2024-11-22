// 'use client'

import React, { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Movie from '../../components/movie';
import styles from '@/app/styles/home.module.css';

export const metadata: Metadata = {
  title: '⚡️ Home',
};

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';
async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

const HomePage = async () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [movies, setMovies] = useState<Movie[]>([]);
  // const getMovies = async () => {
  //   const res = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies`);
  //   const data = await res.json();
  //   setMovies(data);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);
  const movies = await getMovies();
  return (
    <>
      {/* {isLoading ? <h1>⏳ Loading...</h1> : JSON.stringify(movies)} */}
      <article>
        <h1>Movies</h1>
        <ul className={styles.container}>
          {movies.map((movie: Movie) => {
            const { id, poster_path, title } = movie;
            return <Movie id={id} poster_path={poster_path} title={title} />;
          })}
        </ul>
      </article>
    </>
  );
};

export default HomePage;
