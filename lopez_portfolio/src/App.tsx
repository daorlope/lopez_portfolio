import './App.css'

function Menu() {
  return (
    <nav className=" bg-[#EDE8DC] border-b-2 p-4 text-lg mb-0">
      <ul className="flex list-none justify-end gap-10 px-7 m-0">
        <li className="hover:text-[#8A5F41] transition-colors"><a href="#home">Home</a></li>
        <li className="hover:text-[#8A5F41] transition-colors"><a href="#projects">Projects</a></li>
        <li className="hover:text-[#8A5F41] transition-colors">Contact</li>
      </ul>
    </nav>
  );
}

function Welcome() {
  return (
    <div id="home" className='flex p-2 bg-[#EDE8DC] h-[80vh] border-b-2 gap-7 sm:gap-15 md:gap-25 lg:gap-50 items-center justify-center'>
        <img src="./me.jpg" className='border-2 h-40 w-40 sm:h-40 sm:w-40 md:h-50 md:w-50 lg:h-65 lg:w-65 rounded-full'></img>
        <div className="font-semibold m-0">
          <h1 className='py-1 text-4xl sm:text-5xl md:text-7xl lg:text-7xl'>Dante Lopez</h1>
          <h3 className='py-1 text-xs sm:text-xs md:text-base lg:text-lg'>Aspiring Embedded Systems Engineer</h3>
        </div>
    </div>
  );
}

function Project({img_link, info, skills}: any) {
  if (info.length == 2)
  {
    return (
    <div className='px-full border-1 rounded'>
        <img src={img_link} className="h-30 w-30 rounded"></img>
        <h1>{info[0]}</h1> {/* Project Title */}
        <p>{info[1]}</p>   {/* Project Description */}
        <ul>
          {skills.map((skill: string, index:number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
    </div>
   )
  }

  else
  {
    return (
    <div className='px-full border-2 rounded m-0 h-100 w-8/10 sm:w-8/10 md:w-9/10 lg:w-45/100'>
        <img src={img_link} className="h-30 w-30 rounded"></img>
        <h1>{info[0]}</h1> {/* Project Title */}
        <h3>{info[1]}</h3> {/* Role/Subtitle */}
        <p>{info[2]}</p>   {/* Project Description */}
        <ul>
          {skills.map((skill: string, index:number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
    </div>
   )
  }
}

const project_1_info = [
  "Project Title",
  "My role",
  "Descrption of what I did in the project"
];
const project_1_skills = [
  "skill 1",
  "skill 2",
  "skill 3",
];

export default function Portfolio() {
  return (
    <div className=''>
      <Menu />
      <Welcome />
      <main className='h-full bg-[#EDE8DC] py-6' id="projects">
          <div className='w-10/10 sm:w-10/10 md:w-10/10 lg:w-8/10 m-auto bg-[#EDE8DC]'>
            <div className='bg-[#EDE8DC] mx-10 py-1 rounded-[1vw] border-2 text-center font-semibold justify-center'>
              <h1 className='text-2xl'>Projects</h1>
            </div>
          
            <section className='flex bg-[#EDE8DC] flex-wrap gap-3 justify-center py-3'>
              <Project img_link={"./question.png"} info={project_1_info} skills={project_1_skills} />
              <Project img_link={"./question.png"} info={project_1_info} skills={project_1_skills}/>
              <Project img_link={"./question.png"} info={project_1_info} skills={project_1_skills}/>
              <Project img_link={"./question.png"} info={project_1_info} skills={project_1_skills}/>
            </section>
          </div>
      </main>
    </div>
  );
}
