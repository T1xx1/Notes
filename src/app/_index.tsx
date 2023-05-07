import useStore, { Note } from '../hooks/usestore';

import Footer from './footer/_index';

export default function App() {
   let [val, dispatch] = useStore();
   
   return <>
      <Footer />
   </>;
}
