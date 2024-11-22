import React from 'react';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { API_URL } from '@/app/(home)/page';
import MovieInfo from '@/components/movie-info';
import MovieVideos from '@/components/movie-videos';
import { getMovie } from '@/components/movie-info';
type IParams = {
  params: { id: string };
};

// 동적 메타데이터 생성
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

// https://nextjs.org/docs/messages/sync-dynamic-apis
const MovieDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  // solution 1: async function (순차 요청)
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  // solution 2: Promise.all (동시 요청 but, 모든 요청이 완료되어야 렌더링)
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  // solution 3: react Suspense (로딩상태 분리)

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
