import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setContacts(res.data)
      console.log(contacts)
    })
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
    setSearchResults(contacts.filter(contact => contact.name.includes(search) || contact.phone.includes(search)))
    console.log(searchResults)
  }

  return (
    <div className="App">
      <header className='search-header'>
        <input type='text' className='search-bar' placeholder='Search' onChange={handleSearch}/>
      </header>
      <ul className='contact-card-list'>
        {search.length === 0 ? contacts.map((contact, i) => {
          return <li key={i} className='contact-card'>
            <h4 className='contact-card-name'>{contact.name}</h4>
            <div>{contact.phone}</div>
          </li>
        })
      :
      searchResults.map((contact, i) => {
        return <li key={i} className='contact-card'>
        <h4 className='contact-card-name'>{contact.name}</h4>
        <div>{contact.phone}</div>
      </li>
      })
      }
      </ul>
    </div>
  );
}

export default App;
