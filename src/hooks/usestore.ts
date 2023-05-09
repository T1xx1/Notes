import { useEffect, useReducer } from 'react';

import meta from '../assets/data/meta.json';

import LocalStorage from '../lib/localstorage';

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

export default function useStore() {
   let localstorage = new LocalStorage(meta.name, 0, {});

   let reducer = (state: any, {
      type,
      payload
   }: {
      type: string,
      payload?: any;
   }) => {
      switch (type) { }

      return {
         ...state
      };
   };

   let [val, dispatch] = useReducer(reducer, localstorage.val);

   // sync val with val in localstorage
   useEffect(() => localstorage.write(val), [val]);

   return [val, dispatch];
}