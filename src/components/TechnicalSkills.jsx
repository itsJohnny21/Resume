import { technicalSkills } from '../constants'
import Heading from './Heading'
import chroma from 'chroma-js'

const TechnicalSkills = () => {
  const colorScale = chroma.scale(['red', 'yellow', 'green']).mode('lch')

  return (
    <Heading className="py-1" title="Technical Skills">
      <ol className="list-disc grid grid-cols-5 pl-5">
        {technicalSkills.map((skill, index) => (
          <li className="pr-8" key={index}>
            <h6 className="font-bold text-[0.6rem]">{`${skill.name}`}</h6>
            <div className="h-2 w-full bg-gray-200 rounded">
              <div
                style={{
                  width: `${skill.proficiencyLevel}%`,
                  backgroundColor: colorScale(
                    skill.proficiencyLevel / 100
                  ).css(),
                }}
                className="h-full rounded"
              ></div>
            </div>
          </li>
        ))}
      </ol>
    </Heading>
  )
}

export default TechnicalSkills
