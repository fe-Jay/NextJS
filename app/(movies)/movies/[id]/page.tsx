import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '🍿 MovieDetail',
}

const MovieDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  // https://nextjs.org/docs/messages/sync-dynamic-apis

  return (
    <h1>🍿 Movie {id}</h1>
  )
}

export default MovieDetail