import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-roboto">MP</Link>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="hover:text-green-300 transition duration-300">About</Link></li>
          <li><Link href="#experience" className="hover:text-green-300 transition duration-300">Experience</Link></li>
          <li><Link href="#skills" className="hover:text-green-300 transition duration-300">Skills</Link></li>
          <li><Link href="#projects" className="hover:text-green-300 transition duration-300">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-green-300 transition duration-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

