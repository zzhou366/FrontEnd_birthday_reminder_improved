import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  const [fpeople, setfPeople] = useState(data)
  const handleClick = (str,event) =>
  {
    setPeople([])
  }
  const pop = (people) =>{
    const id = people[0].id
    setPeople(people.filter(item => item.id != id))
  }
  const reload = () =>{
    setPeople(fpeople)
  }
  return(
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people = {people} setPeople = {setPeople} />
        <button onClick={(event)=>handleClick('special click',event)}>
          clear all
        </button>
        <button onClick={() => {pop(people)}}> delete top</button>
        <button onClick={reload}>
          reload 
        </button>
      </section>
    </main>
  );
}

export default App;
