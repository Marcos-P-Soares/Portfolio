export default function Skills() {
  const skills = [
    { category: "Linguagens", items: ["Java", "Javascript", "Python"] },
    { category: "Frameworks e Ferramentas", items: ["Spring", "Next.js", "React Native", "Pytorch"] },
    { category: "Habilidades Técnicas", items: ["Desenvolvimento Backend (APIs REST)", "Frontend Moderno", "Modelos de IA", "Programação Mobile"] }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center font-roboto">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 font-roboto">{skillGroup.category}</h3>
              <ul className="list-disc list-inside space-y-2 font-poppins">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

