import React from 'react';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import MovieInfo from '@/components/movie-info';
import MovieVideos from '@/components/movie-videos';
import { getMovie } from '@/components/movie-info';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params }: PageProps) {
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
}
