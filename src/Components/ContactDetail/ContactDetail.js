import './ContactDetail.css'
import { CSSTransition } from 'react-transition-group';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'

export default function ContactDetail({ selectedContactDetails, isOpen, setOpen }) {
    // console.log(selectedContactDetails)
    const handleOpen = () => {
        setOpen(!isOpen)
    }
    return(
        <CSSTransition
        in={isOpen}
        timeout={{
            appear: 350,
            enter: 0,
            exit: 350,
        }}
        className="contact-details-container"
        classNames={{
            enter: "enter",
            enterDone: "enterDone",
            exit: "exit",
            exitActive: "exitActive",
            exitDone: "exitDone",
        }}>
            <div>
                <AiOutlineCloseCircle onClick={handleOpen} className='exit-button'></AiOutlineCloseCircle>
                {selectedContactDetails.map((contact, i) => {
                    return(
                        <div key={i} className='contact-details-map-container'>
                            <header className='contact-details-name-header'>
                                <section className='name-email-section'>
                                    <h1 className='contact-details-name'>{contact.name}</h1>
                                    <div className='contact-email'>{contact.email}</div>
                                </section>
                                <section className='user-company-section'>
                                    <div className='user-company'>
                                        <div className='username'>Username</div>
                                        <div className='contact-username'>{contact.username}</div>
                                    </div>
                                    <div className='user-company'>
                                        <div className='company'>Company</div>
                                        <div className='contact-company'>{contact.company.name}</div>
                                    </div>
                                    
                                </section>
                                <div className='phone-number'><span><FaPhoneAlt></FaPhoneAlt></span>{contact.phone}</div>
                            </header>
                            <section key={i} className='contact-details-address-website'>
                                    <div className='website'>
                                        <div className='user-detail-title'>Website</div>
                                        <div className='user-website'>{contact.website}</div>
                                    </div>
                                    <div className='street'>
                                        <div className='user-detail-title'>Address</div>
                                        <div className='user-street'>{contact.address.street}, {contact.address.suite}</div>
                                    </div>
                                    <div className='zipcode'>
                                        <div className='user-detail-title'>Zip code</div>
                                        <div className='user-zipcode'>{contact.address.zipcode}</div>
                                    </div>
                                    <div className='city'>
                                        <div className='user-detail-title'>City</div>
                                        <div className='user-city'> {contact.address.city}</div>
                                    </div>
                                
                            </section>
                        </div>
                    )
                })}
            </div>
        </CSSTransition>
    )
}