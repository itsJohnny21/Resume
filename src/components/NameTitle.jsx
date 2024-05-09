import { name, title } from '../constants'

const NameTitle = () => {
  return (
    <div className="ml-6">
      <h4 className="text-[1.3rem]">{name}</h4>
      <p className="font-thin text-sm text-n-17">{title}</p>
    </div>
  )
}

export default NameTitle
