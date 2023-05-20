export class Note {
   _id = parseInt(String(Math.random()).slice(2));
   _pos = {
      x: 0,
      y: 0
   };
   color = '#ffff00';
   text = '';

   constructor() {
      return this;
   }
}