import React from 'react';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import MovieInfo from '@/components/movie-info';
import MovieVideos from '@/components/movie-videos';
import { getMovie } from '@/components/movie-info';

type IParams = {
  params: { id: string };
};

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

const MovieDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <article>
      <Suspense fallback={<div>Loading Movie Info...</div>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading Movie Videos...</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </article>
  );
};

export default MovieDetail;
