const Heading = ({ className, title, children }) => {
  return (
    <div className={`text-[0.8rem] ${className ? className : ''}`}>
      <h1>{title}</h1>
      <div className="w-full h-1 bg-n-18 rounded-sm"></div>
      {children}
    </div>
  )
}

export default Heading
