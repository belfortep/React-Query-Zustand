import React from 'react'
import Card from './components/Card'
import { useFetchRepositories } from './hooks/useRepos'

export default function App() {
  const {data, isLoading} = useFetchRepositories()

  if (isLoading) return <div>Loading...</div>



  return (
    <div>
      {data?.map(repo => (
        <Card repository={repo}/>
      ))}
    </div>
  )
}
