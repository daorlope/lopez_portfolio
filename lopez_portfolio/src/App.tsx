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
    <div className='flex p-2 bg-[#EDE8DC] h-[80vh] gap-7 sm:gap-15 md:gap-25 lg:gap-50 items-center justify-center'>
        <img src="./me.jpg" className='h-40 w-40 sm:h-40 sm:w-40 md:h-50 md:w-50 lg:h-65 lg:w-65 rounded-full'></img>
        <div className="font-semibold m-0">
          <h1 className='py-1 text-4xl sm:text-5xl md:text-7xl lg:text-7xl'>Dante Lopez</h1>
          <h3 className='py-1 text-xs sm:text-xs md:text-base lg:text-lg'>Aspiring Embedded Systems Engineer</h3>
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
