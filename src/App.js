import React, { useState } from 'react';

import data from './data';
import List from './List';
function App() {
  const [person, setData] = useState(data)
 console.log(person)
 
  return <main>
    <section className='container'>
     <h3>{person.length} birthday today</h3>
      { person.map((personData)=>{
        return <List  {...personData}/>
      })

      }
  

    </section>
  </main>;
}

export default App;
