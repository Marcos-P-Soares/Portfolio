import Link from 'next/link'
import { Github, Linkedin } from "lucide-react"


export default function Home() {
  return (
    <section id="home" className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-4 font-roboto">Marcos Paulo Soares Moura Filho</h1>
      <h2 className="text-2xl mb-8 text-gray-600 font-poppins">Estudante e Desenvolvedor Júnior</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto font-poppins">
        Sempre gostei de tecnologia e estou sempre buscando evoluir. Desenvolvo projetos em Java com Spring e Next.js, e atualmente sou Cofundador da Startup easyCart.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="https://github.com/your-github-username" className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center hover:bg-gray-700 transition duration-300">
          <Github className="mr-2" />
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/your-linkedin-profile" className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center hover:bg-blue-500 transition duration-300">
          <Linkedin className="mr-2" />
          LinkedIn
        </Link>
      </div>
    </section>
  )
}

