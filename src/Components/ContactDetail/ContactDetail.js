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
                <header className='contact-details-name-header'>
                    <button onClick={handleOpen} className='test'>X</button>
                    <h1 className='contact-details-name'>{selectedContactDetails.name}</h1>
                </header>
            </div>
        </CSSTransition>
    )
}