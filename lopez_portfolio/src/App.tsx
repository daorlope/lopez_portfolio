import './App.css'

function Menu() {
  return (
    <ul className="flex gap-8 px-10 m-0 p-4 menu-item">
      <li className="hover:text-gray-500 menu-item">Home</li>
      <li className="hover:text-gray-500 menu-item">Projects</li>
      <li className="hover:text-gray-500 menu-item">Contact</li>
    </ul>
  );
}

function Welcome() {
  return (
    <div>
      <img src="../public/question.png" width="150" height="150"></img>
      <h1>Dante Lopez</h1>
      <h3>Aspiring Embedded Systems Engineer</h3>
    </div>
  );
}

function Project() {
  return (
    <div>
        <img src="../public/question.png" width="150" height="150"></img>
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
    <section>
      <Menu />
      <Welcome />
      <Project />
      <Project />
      <Project />
    </section>
  );
}
