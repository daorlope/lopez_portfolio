import './App.css'

function Menu() {
  return (
    <nav className=" bg-[#B17F59] p-4 text-[#EDE8DC] text-lg mb-0">
      <ul className="flex list-none justify-end gap-10 px-7 m-0 menu">
        <li className="hover:text-[#b8b3a9] transition-colors menu-item">Home</li>
        <li className="hover:text-[#b8b3a9] transition-colors menu-item">Projects</li>
        <li className="hover:text-[#b8b3a9] transition-colors menu-item">Contact</li>
    </ul>
    </nav>
  );
}

function Welcome() {
  return (
    <div className='flex bg-[#EDE8DC] h-[80vh] gap-7 sm:gap-15 md:gap-30 lg:gap-75 items-center justify-center'>
      <img src="./me.jpg" width="150" height="150" className=''></img>
      <div className="font-semibold">
        <h1 className='text-xl sm:text-xl md:text-5xl lg:text-6xl'>Dante Lopez</h1>
        <h3 className='text-xs sm:text-xs md:text-xs lg:text-base'>Aspiring Embedded Systems Engineer</h3>
      </div>

    </div>
  );
}

function Project() {
  return (
    <div>
        <img src="./question.png" width="150" height="150"></img>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section className=''>
      <Menu />
      <Welcome />
      <Project />
      <Project />
      <Project />
    </section>
  );
}
