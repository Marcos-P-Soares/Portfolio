'use client'

import { useState } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center font-roboto">Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-poppins">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md font-poppins"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-poppins">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md font-poppins"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-poppins">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md font-poppins"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition duration-300 font-poppins">Enviar</button>
          </form>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600" />
              <a href="mailto:marcospaulo@example.com" className="text-blue-600 hover:text-blue-800 transition duration-300 font-poppins">marcospaulo@example.com</a>
            </div>
            <div className="flex items-center space-x-4">
              <Github className="text-blue-600" />
              <a href="https://github.com/Marcos-P-Soares" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300 font-poppins">GitHub</a>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="text-blue-600" />
              <a href="https://www.linkedin.com/in/marcos-paulo-s-70553612a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300 font-poppins">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

