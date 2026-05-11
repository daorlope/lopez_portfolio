import './App.css'

function Menu() {
  return (
    <nav className="fixed w-full bg-[#EDE8DC] border-b-2 p-4 text-lg mb-0">
      <ul className="flex list-none justify-end gap-10 px-7 m-0">
        <li className="hover:text-[#8A5F41] transition-colors"><a href="#home">Home</a></li>
        <li className="hover:text-[#8A5F41] transition-colors"><a href="#projects">Projects</a></li>
        <li className="hover:text-[#8A5F41] transition-colors"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Welcome() {
  return (
    <div id="home" className='flex pt-20 p-2 bg-[#EDE8DC] h-[90vh] border-b-2 gap-7 sm:gap-15 md:gap-25 lg:gap-50 items-center justify-center'>
        <img src="./me.jpeg" className='border-2 h-40 w-40 sm:h-40 sm:w-40 md:h-50 md:w-50 lg:h-65 lg:w-65 rounded-full'></img>
        <div>
          <div className="font-semibold m-0">
            <h1 className='py-1 text-4xl sm:text-5xl md:text-7xl lg:text-7xl'>Dante Lopez</h1>
            <h3 className='py-1 text-xs sm:text-xs md:text-base lg:text-lg'>Aspiring Embedded Systems Engineer</h3>
          </div>
          <div className='flex my-1 justify-start gap-3'>
            <a href="https://github.com/daorlope" target='_blank'><img src="./github.png" className='w-6 h-6'/></a>
            <a href="https://www.linkedin.com/in/dante-lopez-0a6073283/" target='_blank'> <img src="./linkedin.png" className='w-6 h-6'/></a>
            <a href="mailto:daorlope@ucsc.edu"><img src="./email.png" className='w-6 h-6'/></a>
          </div>
        </div>
    </div>
  );
}

function Project({img_link, info, skills}: any) {
  const {title, role, description} = info;
  return (
  <div id="projects" className='scroll-mt-35 justify-center px-full py-5 border-2 rounded m-0 h-auto w-8/10 sm:w-8/10 md:w-9/10 lg:w-45/100'>
      <img src={img_link} width="150" className="h-auto w-6/10 sm:w-6/10 md:w-6/10 lg:w-8/10 opacity-100 mx-auto rounded "></img>
      <section className='text-center'>
        <h1 className='font-semibold'>{title}</h1> {/* Project Title */}
        <h3>{role}</h3> {/* Role/Subtitle */}
        <p>{description}</p>   {/* Project Description */}
        <ul className='flex justify-center gap-3'>
          {skills.map((skill: string, index:number) => (
            <li className='border-1 rounded px-1' key={index}>{skill}</li>
          ))}
        </ul>
      </section>
  </div>
  )
}

function Contact()
{
  return(
    <div id="contact" className='h-auto pt-3 pb-5 text-center'>
      <h1 className='text-center underline font-semibold text-xl rounded w-2/5 m-auto'>Contact me</h1>
      <p className='py-2'>You can probably reach me through </p>
      <a href="https://www.linkedin.com/in/dante-lopez-0a6073283/" target='_blank'><img src="./linkedin.png" className='w-6 h-6 m-auto'/></a>
      <p className='items-center'>or</p>
      <span className='underline'><a href="mailto:daorlope@ucsc.edu">daorlope@ucsc.edu</a></span>
    </div>
  )
}

const ventilation_project = [

];

const project_1_info = {
  title: "Project Title",
  role: "My role",
  description: "Descrption of what I did in the project"
};

const project_1_skills = [
  "skill 1",
  "skill 2",
  "skill 3",
];

export default function Portfolio() {
  return (
    <div className='bg-[#EDE8DC]'>
      <Menu />
      <Welcome />
      <main className='h-full border-b-2 bg-[#EDE8DC] py-6'>
          <div className='w-10/10 sm:w-10/10 md:w-10/10 lg:w-8/10 m-auto bg-[#EDE8DC]'>
            <div className='bg-[#EDE8DC] mx-10 py-1 rounded-[1vw] border-2 text-center font-semibold justify-center'>
              <h1 className='text-2xl'>Projects</h1>
            </div>
          
            <section className='flex bg-[#EDE8DC] flex-wrap gap-3 justify-center py-3'>
              <Project img_link={"./ventilation.jpeg"} info={project_1_info} skills={project_1_skills} />
              <Project img_link={"./lunabotics.jpeg"} info={project_1_info} skills={project_1_skills}/>
              <Project img_link={"./sensor_system.jpeg"} info={project_1_info} skills={project_1_skills}/>
            </section>
          </div>
      </main>
      <Contact />
    </div>
  );
}
