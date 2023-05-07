import Sign from './sign';
import Ver from './ver';

export default function Footer() {
   return <footer className='bottom-0 bg-white fixed flex justify-between px-2 py-1 w-full'>
      <Sign />
      <Ver />
   </footer>
}