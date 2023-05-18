import useStore from '../hooks/usestore';

import Footer from './footer/_index';
import Main from './main/_index';

export default function App() {
   let [val, dispatch] = useStore();

   return <>
      {val !== null && (
         <Main
            val={Object.values(val)}
            dispatch={dispatch}
         />
      )}
      <Footer />
   </>;
}
