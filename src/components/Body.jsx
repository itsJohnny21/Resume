import { experiences, professionalSummary } from '../constants'

const Body = () => {
  return (
    <div className="bg-white text-n-18 py-2">
      <div className="py-2 pl-16 pr-16">
        <h1 className="text-[1.5rem] uppercase border-b-4 border-n-18">
          Summary
        </h1>
        <p className="py-2 text-sm">{professionalSummary}</p>
      </div>
      <div className="pl-16 pr-16">
        <h4 className="text-[1.5rem] uppercase border-b-4 border-n-18">
          Professional Experience
        </h4>
        <ol>
          {experiences.map((experience, index) => (
            <li className="py-2" key={index}>
              <h6 className="font-bold">{`${experience.title} - ${experience.company}`}</h6>
              <h6 className="text-sm">{`${experience.startDate} - ${experience.endDate} (${experience.totalTime})`}</h6>
              <ol className="list-disc pl-10">
                {experience.bullets.map((bullet, index) => (
                  <li key={index}>
                    <p className="text-sm">{bullet}</p>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
      <div className="py-2 pl-16 pr-16">
        <h1 className="text-[1.5rem] uppercase border-b-4 border-n-18">
          Education
        </h1>
        <p className="py-2 text-sm">{professionalSummary}</p>
      </div>
    </div>
  )
}

export default Body
