function Menu() {
  return (
    <ul>
      <li>Home</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  );
}

export default function Portfolio() {
  return (
    <section>
      <Menu />
      <Menu />
    </section>
  );
}
