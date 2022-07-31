function HeaderPage(props) {
  return (
    <>
      <header className="w-full flex sm:justify-between justify-center items-center flex-wrap pb-3 border-b-2 border-dark-700 border-opacity-80">
        <h1 className="title-header">
          To do | {props.title}
        </h1>
        { props.children }
      </header>
    </>
  )
}

export default HeaderPage