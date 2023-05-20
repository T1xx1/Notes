import { useEffect, useState } from 'react';

import storage from '../data/storage';

import Sign from './sign';
import Main from './main/_index';
import NoNotes from './nonotes';

export default function App() {
   let [val, dispatch] = storage();

   let [notes, setNotes] = useState(Object.values(val));

   useEffect(() => setNotes(Object.values(val)), [val]);

   return <>
      <NoNotes />
      {val !== null && (
         <Main
            val={notes}
            dispatch={dispatch}
         />
      )}
      <Sign />
   </>;
}
