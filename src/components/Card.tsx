
import React from 'react'
import { Repository } from '../hooks/types'

type CardProps = {
        repository: Repository
}

export default function Card({repository}: CardProps) {
  return (
    <div>
        <h1>{repository.name}</h1>
        <button>
                Like
        </button>
    </div>
  )
}
