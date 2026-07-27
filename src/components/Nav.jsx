function Nav({ children }) {
  return (
    <nav className="navbar bg-body-tertiary ">
      <div className="container-fluid  container pt-2 pb-2 fs-1">
        {children}
      </div>
    </nav>
  );
}

export default Nav;
