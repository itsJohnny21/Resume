import ContactDetails from './ContactDetails'
import NameTitle from './NameTitle'
import Objective from './Objective'
import Selfie from './Selfie'

const Header = () => {
  return (
    <>
      <div className="flex h-[7rem] justify-center items-center bg-n-18">
        <Selfie></Selfie>
        <NameTitle></NameTitle>
        <ContactDetails></ContactDetails>
      </div>
      <Objective></Objective>
    </>
  )
}

export default Header
