import plus from '../../../assets/plus.svg';

export default function Add({ dispatch }: { dispatch: Function; }) {
   let click = (e: any) => {
      let mouse = e.nativeEvent;

      dispatch({
         type: 'add',
         payload: {
            x: mouse.x,
            y: mouse.y
         }
      });
   };

   return <img
      src={plus}
      alt='Plus'
      className='cursor-pointer h-full p-3 rounded-lg hover:bg-gray-5'
      onClick={click}
   />;
}