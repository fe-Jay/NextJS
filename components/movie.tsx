'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/movie.module.css';
import { useRouter } from 'next/navigation';

type IMovieProps = {
  id: number;
  poster_path: string;
  title: string;
};

const Movie = ({ id, poster_path, title }: IMovieProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`movies/${id}`);
  };

  return (
    <li key={id} className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`movies/${id}`}>
        {title}
      </Link>
    </li>
  );
};

export default Movie;
