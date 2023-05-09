import { Note } from '../../../hooks/usestore';

export default function Text({
   data,
   setData
}: {
   data: Note;
   setData: Function;
}) {
   let text = (e: any) => {
      let textarea = e.target as HTMLTextAreaElement;

      setData({
         ...data,
         text: textarea.value
      });
   };

   return <textarea
      value={data.text}
      className='outline-none px-2 py-1 row-span-4 resize-none rounded-b-lg select-none'
      onChange={text}
      placeholder='Add your note...'
      style={{
         backgroundColor: `${data.color}4d`
      }}
   />;
}