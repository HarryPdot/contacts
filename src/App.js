import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa'
import ContactDetail from './Components/ContactDetail/ContactDetail'
import { ImInfo } from 'react-icons/im'

function App() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedContactDetails, setSelectedContactDetails] = useState([])
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setContacts(res.data.sort((a, b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      }))
    })
  }, [])

  useEffect(() => {
    setSearchResults(contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()) || contact.phone.replace(/[() -]/g, '').includes(search) || contact.email.toLowerCase().includes(search.toLowerCase())))
  }, [search])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleContactDetails = (contact) => {
    setSelectedContactDetails([contact])
    setOpen(true)
  }

  return (
    <div className="App">
      
      {<ContactDetail selectedContactDetails={selectedContactDetails} isOpen={isOpen} setOpen={setOpen}/>}
      <section className={isOpen? 'header-card-list-container-open' : 'header-card-list-container'}>
        <header className='search-header'>
          <input type='text' className='search-bar' placeholder='Search' onChange={handleSearch}/>
        </header>
        <ul className='contact-card-list'>
          {search.length === 0 ? contacts.map((contact, i) => {
            return (
              <li key={i} className='contact-card' onClick={() => handleContactDetails(contact)}>
                <h4 className='contact-card-name'>{contact.name}</h4>
                <div className='contact-card-phone'><span className='contact-list-phone-icon'><FaPhoneAlt/></span>{contact.phone}</div>
                <ImInfo className='more-info-icon'/>
              </li>)
          })
          :
          searchResults.map((contact, i) => {
            return (
              <li key={i} className='contact-card' onClick={() => handleContactDetails(contact)}>
                <h4 className='contact-card-name'>{contact.name}</h4>
                <div className='contact-card-phone'><span className='contact-list-phone-icon'><FaPhoneAlt/></span>{contact.phone}</div>
                <ImInfo className='more-info-icon'/>
              </li>)
          })
          }
        </ul>
      </section>
    </div>
  );
}

export default App;
