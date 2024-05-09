const Heading = ({ className, title, children }) => {
  return (
    <div className={`text-[0.8rem] ${className ? className : ''}`}>
      <h1 className="uppercase border-b-4 border-n-18">{title}</h1>
      {children}
    </div>
  )
}

export default Heading
