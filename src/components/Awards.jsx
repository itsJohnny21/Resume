import { awards } from '../constants'
import Heading from './Heading'

const Awards = () => {
  return (
    <Heading className="py-1" title="Awards">
      <ol>
        {awards.map((award, index) => (
          <li className="py-1" key={index}>
            <div className="inline-flex gap-3 py-1">
              <img
                src={award.src}
                width={20}
                height={20}
                alt={award.title}
              ></img>
              <h6 className="font-bold text-sm">{`${award.title} - ${award.provider}`}</h6>
              <h6 className="text-xs">{`${award.receivedDate}`}</h6>
            </div>
            <p className="text-xs">{award.description}</p>
          </li>
        ))}
      </ol>
    </Heading>
  )
}

export default Awards
