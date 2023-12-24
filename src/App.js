import React, { useState, useEffect } from 'react';
import List from './component/list';
import './App.css';
import style from "./css/app.module.css";
import PortalPopup from './portal/portal';
import SimpleButton from './component/button';
let debouncer;

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [user, setUser] = useState();
  const [currentId, setCurrentId] = useState();
  useEffect(() => {
    getUser();
  },[])

  const getUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
      .then(json => {
        setUser(json);
      })
    
  }

  
  const openPopup = (id) => {
    setCurrentId(id);
    clearTimeout(debouncer);
    debouncer = setTimeout(() => {
      setPopupOpen(true);
    }, 450);

  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const confirm = () =>{
    setPopupOpen(false);
    console.log(`I will delete ${currentId}`);
    deleteItem();
  }


const deleteItem =() =>{
  fetch(`https://jsonplaceholder.typicode.com/users/${currentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(json => console.log(`Deleted ${currentId} successfully`))
}


  return <>
    <div className={style.parent}>
      <div className={style.child}>
        {user?.map((obj) => {
          return <List key={obj.id} onClick={(id) => openPopup(id)} data={obj}/>
        })}
        
      </div>
    </div>
    <div>
      {currentId && <PortalPopup isOpen={isPopupOpen} onClose={closePopup}>
        <p className={style.color}>This is the content of the popup.</p>
        <div className={style.btnContainer}>
        <div className={style.cancel} onClick={closePopup}>Close</div>
        <div className={style.ok} onClick={confirm}>Ok</div>
        </div>
        
      </PortalPopup>}
    </div>
  </>
}

export default App;
