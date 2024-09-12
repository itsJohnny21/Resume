import { objective } from '../constants'

const Objective = () => {
  return (
    <div>
      <div className="ml-12 mr-12 border-l-4 border-r-4 border-b-4 border-n-18 text-n-18 rounded-b-sm">
        <h1 className="text-center uppercase text-sm">Objective</h1>
        <p className="pl-2 pr-2 text-xs text-center">{objective}</p>
      </div>
    </div>
  )
}

export default Objective
