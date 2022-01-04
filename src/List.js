import React from 'react';

const List = ({people},{setPeople}) => {
const unfollowed = (id) =>{
  people[id-1] = []
  console.log(people);
  // var delete_name = person.name
  // setPeople(people.filter(item => item.name != delete_name))
}
  return (
    <>
      {people.map((person)=>{
        const {id,name,age,image} = person;
        return <article key={id} className='person'>
          <img src={image} alt={name}/>
          <div>
            <h4>
              {name}
            </h4>
            <p>
              {age} years
            </p>
          </div>
          <div><button onClick={()=>{unfollowed(person.id)}}>checked</button></div>
        </article>
      })}
    </>
  );
};

export default List;
