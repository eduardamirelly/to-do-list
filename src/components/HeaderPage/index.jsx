import ReturnButton from "../ReturnButton"

function HeaderPage(props) {
  return (
    <>
      <header className="w-full flex sm:justify-between justify-center items-center flex-wrap pb-3 border-b-2 border-dark-700 border-opacity-80">
        <div className="flex justify-between items-center gap-4">
          {props.isReturn && <ReturnButton />}
          <h1 className="title-header">
            {props.title}
          </h1>
        </div>
        { props.children }
      </header>
    </>
  )
}

export default HeaderPage