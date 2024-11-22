// 'use client'

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Movie from '../../components/movie';
import styles from '@/app/styles/home.module.css';
import { API_URL } from '@/utils/constants';

export const metadata: Metadata = {
  title: '⚡️ Home',
};

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

const HomePage = async () => {
  const movies = await getMovies();
  return (
    <>
      <article>
        <h1>Movies</h1>
        <ul className={styles.container}>
          {movies.map((movie: Movie) => {
            const { id, poster_path, title } = movie;
            return <Movie key={id} id={id} poster_path={poster_path} title={title} />;
          })}
        </ul>
      </article>
    </>
  );
};

export default HomePage;
