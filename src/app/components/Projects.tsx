"use client";

import { useState, useEffect } from 'react'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/Marcos-P-Soares/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching repositories:', error))
  }, [])

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center font-roboto">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map(repo => (
            <div key={repo.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 font-roboto">{repo.name}</h3>
              <p className="text-gray-600 mb-4 font-poppins">{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

