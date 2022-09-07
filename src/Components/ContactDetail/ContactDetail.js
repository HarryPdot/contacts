import './ContactDetail.css'
import { CSSTransition } from 'react-transition-group';

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
                <button onClick={handleOpen} className='exit-button'>X</button>
                {selectedContactDetails.map((contact, i) => {
                    return(
                        <div key={i} className='contact-details-map-container'>
                            <header className='contact-details-name-header'>
                                <h1 className='contact-details-name'>{contact.name}</h1>
                            </header>
                            <section key={i} className='contact-details-info-container'>
                                <div>Phone: {contact.phone}</div>
                                <div>Username: {contact.username}</div>
                                <div>Email: {contact.email}</div>
                                <div>Address: {contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode} </div>
                                <div>Website: {contact.website}</div>
                                <div>Company: {contact.company.name}</div>
                            </section>
                        </div>
                    )
                })}
            </div>
        </CSSTransition>
    )
}