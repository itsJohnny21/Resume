import { contactDetails } from '../constants'

const ContactDetails = () => {
  return (
    <ol className="grid grid-cols-2 grid-rows-2 gap-3 ml-auto mr-10">
      {contactDetails.map((contactDetail, index) => (
        <li
          className={index === contactDetails.length - 1 ? 'col-span-2' : ''}
          key={index}
        >
          <div className="flex items-center">
            <img
              src={contactDetail.src}
              width={15}
              height={15}
              alt={contactDetail.alt}
            ></img>
            <a className="text-xs ml-2 text-n-17" href={contactDetail.link}>
              {contactDetail.content}
            </a>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default ContactDetails
