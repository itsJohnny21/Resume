import { softSkills } from '../constants'
import Heading from './Heading'

const SoftSkills = () => {
  return (
    <Heading className="py-1" title="Soft Skills">
      <ol className="list-disc grid grid-cols-5 space-x-7 pl-5">
        {softSkills.map((skill, index) => (
          <li key={index}>
            <h6 className="font-bold text-[0.6rem]">{`${skill}`}</h6>
          </li>
        ))}
      </ol>
    </Heading>
  )
}

export default SoftSkills
