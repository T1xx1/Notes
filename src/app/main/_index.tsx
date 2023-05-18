import { Type } from '../../hooks/usestore';

import Note from './note/_index';

export default function Main({
   val,
   dispatch
}: {
   val: any,
   dispatch: Function;
}) {
   return <main className='h-full'>
      {val.map((note: Type) => {
         return <Note
            key={note._id}
            n={note}
            dispatch={dispatch}
         />;
      })}
   </main>;
}