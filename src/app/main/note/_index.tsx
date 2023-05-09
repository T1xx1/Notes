import { useEffect, useState } from 'react';

import { Note as Type } from '../../../hooks/usestore';
import Text from './text';
import H from './h';

export default function Note({
   n,
   dispatch
}: {
   n: Type;
   dispatch: Function;
}) {
   let [data, setData] = useState(n);
   let [isDragging, setIsDragging] = useState(false);

   // sync with val
   useEffect(() => {
      dispatch({
         type: 'update',
         payload: {
            ...data
         }
      });
   }, [data]);

   return <div
      className='absolute grid grid-rows-5 h-60 rounded shadow w-60'
      style={{
         transform: `translate(${data._pos.x}px, ${data._pos.y}px)`,
         zIndex: isDragging ? 1 : 0
      }}
   >
      <H
         data={data}
         setData={setData}
         isDragging={isDragging}
         setIsDragging={setIsDragging}
      />
      <Text
         data={data}
         setData={setData}
      />
   </div>;
};