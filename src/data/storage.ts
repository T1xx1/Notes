import { useEffect, useReducer } from 'react';

import meta from '../meta.json';

import { Note } from './note';
import LocalStorage from '../lib/localstorage';

export default function storage() {
   let localstorage = new LocalStorage(meta.name);

   let reducer = (state: any, {
      type,
      payload
   }: {
      type: 'add' | 'del' | 'update',
      payload: any;
   }) => {
      switch (type) {
         case 'add': {
            let note = new Note();

            note._pos = payload;

            state[note._id] = note;

            break;
         };
         case 'del': {
            delete state[payload._id];

            break;
         }
         case 'update': {
            state[payload._id] = payload;

            break;
         }
      }

      return {
         ...state
      };
   };

   let [val, dispatch] = useReducer(reducer, localstorage.val);

   // sync val with localstorage val
   useEffect(() => localstorage.write(val), [val]);

   return [val, dispatch];
}