import { awards, education, experiences, licenses, skills } from '../constants'
import Heading from './Heading'

const Body = () => {
  return (
    <div className="bg-white text-n-18 py-2 pl-16 pr-16">
      <Heading className="text-[1.3rem] py-3" title="Professional Experiences">
        <ol>
          {experiences.map((experience, index) => (
            <li className="py-2" key={index}>
              <div className="inline-flex gap-3">
                <img
                  src={experience.src}
                  width={20}
                  height={20}
                  alt={experience.company}
                ></img>
                <h6 className="font-bold text-[0.95rem]">{`${experience.title} - ${experience.company}`}</h6>
              </div>
              <h6 className="text-sm">{`${experience.startDate} - ${experience.endDate} (${experience.totalTime})`}</h6>
              <ol className="list-disc pl-5">
                {experience.bullets.map((bullet, index) => (
                  <li key={index}>
                    <p className="text-sm">{bullet}</p>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </Heading>
      <Heading className="text-[1.3rem] py-3" title="Education">
        <ol>
          {education.map((item, index) => (
            <li className="py-2" key={index}>
              <div className="inline-flex gap-3">
                <img
                  src={item.src}
                  width={20}
                  height={20}
                  alt={item.school}
                ></img>
                <h6 className="font-bold text-[0.95rem]">{`${item.school} - ${item.title}`}</h6>
              </div>
              <h6 className="text-sm">{`${item.startDate} - ${item.endDate}`}</h6>
            </li>
          ))}
        </ol>
      </Heading>
      <Heading
        className="text-[1.3rem] py-3"
        title="Licenses and Certifications"
      >
        <ol>
          {licenses.map((license, index) => (
            <li className="py-2" key={index}>
              <div className="inline-flex gap-3">
                <img
                  src={license.src}
                  width={20}
                  height={20}
                  alt={license.title}
                ></img>
                <h6 className="font-bold text-[0.95rem]">{`${license.title} - ${license.provider}`}</h6>
              </div>
              <h6 className="text-sm">{`${license.receivedDate}`}</h6>
            </li>
          ))}
        </ol>
      </Heading>
      <Heading className="text-[1.3rem] py-3" title="Skills">
        <ol className="list-disc grid grid-cols-5 space-x-6 pl-5">
          {skills.map((skill, index) => (
            <li className="py-2" key={index}>
              <h6 className="font-bold text-xs">{`${skill}`}</h6>
            </li>
          ))}
        </ol>
      </Heading>
      <Heading className="text-[1.3rem] py-3" title="Awards">
        <ol>
          {awards.map((award, index) => (
            <li className="py-2" key={index}>
              <div className="inline-flex gap-3">
                <img
                  src={award.src}
                  width={20}
                  height={20}
                  alt={award.title}
                ></img>
                <h6 className="font-bold text-[0.95rem]">{`${award.title} - ${award.provider}`}</h6>
              </div>
              <h6 className="text-sm">{`${award.receivedDate}`}</h6>
              <p className="text-sm">{award.description}</p>
            </li>
          ))}
        </ol>
      </Heading>
    </div>
  )
}

export default Body
