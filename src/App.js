import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa'

function App() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setContacts(res.data)
    })
  }, [])

  useEffect(() => {
    setSearchResults(contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()) || contact.phone.replace(/[() -]/g, '').includes(search) || contact.email.toLowerCase().includes(search.toLowerCase())))
  }, [search])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <header className='search-header'>
        <input type='text' className='search-bar' placeholder='Search' onChange={handleSearch}/>
      </header>
      <ul className='contact-card-list'>
        {search.length === 0 ? contacts.map((contact, i) => {
          return (
            <li key={i} className='contact-card'>
              <h4 className='contact-card-name'>{contact.name}</h4>
              <div className='contact-card-phone'><span className='contact-list-phone-icon'><FaPhoneAlt/></span>{contact.phone}</div>
              <section className='contact-more-details'>
                <button className='contact-more-details-button'>See Details</button>
              </section>
            </li>)
        })
      :
      searchResults.map((contact, i) => {
        return (
          <li key={i} className='contact-card'>
            <h4 className='contact-card-name'>{contact.name}</h4>
            <div className='contact-card-phone'><span className='contact-list-phone-icon'><FaPhoneAlt/></span>{contact.phone}</div>
            <section className='contact-more-details'>
              <button className='contact-more-details-button'>See Details</button>
            </section>
          </li>)
      })
      }
      </ul>
    </div>
  );
}

export default App;
