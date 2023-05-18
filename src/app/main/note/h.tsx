import { Note } from '../../../hooks/usestore';

import Add from './add';

export default function H({
   data,
   setData,
   isDragging,
   setIsDragging,
   dispatch
}: {
   data: Note;
   setData: Function;
   isDragging: boolean;
   setIsDragging: Function;
   dispatch: Function;
}) {
   let drag = {
      _: (e: any) => {
         if (isDragging) {
            setData({
               ...data,
               _pos: {
                  x: data._pos.x + e.movementX,
                  y: data._pos.y + e.movementY
               }
            });
         }
      },
      end: () => setIsDragging(false),
      start: () => setIsDragging(true)
   };

   return <div
      className='cursor-move rounded-t-lg row-span-1'
      onMouseDown={drag.start}
      onMouseLeave={drag.end}
      onMouseMove={drag._}
      onMouseUp={drag.end}
      style={{
         backgroundColor: data.color
      }}
   >
      <Add dispatch={dispatch} />
   </div>;
}