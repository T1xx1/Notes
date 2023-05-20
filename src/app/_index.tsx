
import storage from '../data/storage';

import Sign from './sign';
import Main from './main/_index';
import NoNotes from './nonotes';

export default function App() {
   let [val, dispatch] = storage();

   return <>
      <NoNotes />
      {val !== null && (
         <Main
            val={Object.values(val)}
            dispatch={dispatch}
         />
      )}
      <Sign />
   </>;
}
