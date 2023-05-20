import useStore from '../hooks/usestore';

import Sign from './sign';
import Main from './main/_index';
import NoNotes from './nonotes';

export default function App() {
   let [val, dispatch] = useStore();

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
