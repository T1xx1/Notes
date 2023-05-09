import { Note as NoteClass } from '../../hooks/usestore';

import Note from './note';

export default function Main({
   val,
   dispatch
}: {
   val: any,
   dispatch: Function;
}) {
   let add = (e: any) => {
      let mouse = e.nativeEvent;

      if (e.target.localName === 'main') {
         dispatch({
            type: 'add',
            payload: {
               x: mouse.x,
               y: mouse.y
            }
         });
      }
   };

   return <main
      className='h-full'
      onMouseDown={add}>
   </main>;
}