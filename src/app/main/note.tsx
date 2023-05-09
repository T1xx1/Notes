import { useEffect, useRef, useState } from 'react';

import { Note as Type } from '../../hooks/usestore';

export default function Note({
   n,
   dispatch
}: {
   n: Type;
   dispatch: Function;
}) {
   let [data, setData] = useState(n);
   return <div
      className='absolute grid grid-rows-5 h-60 w-60'
      style={{
         transform: `translate(${data._pos.x}px, ${data._pos.y}px)`
      }}
   >
      <div
         className='cursor-move rounded-t-lg row-span-1'
         style={{
            backgroundColor: data.color
         }}
      >
      </div>
      <textarea
         value={data.text}
         className='outline-none px-2 py-1 row-span-4 resize-none rounded-b-lg select-none'
         placeholder='Add your note...'
         style={{
            backgroundColor: `${data.color}4d`
         }}
      />
   </div>;
};