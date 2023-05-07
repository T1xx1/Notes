import { useEffect, useReducer } from 'react';

import meta from '../assets/data/meta.json';

import LocalStorage from '../lib/localstorage';

export default function useStore() {
   let localstorage = new LocalStorage(meta.name, 0, {});

   let reducer = (state: any, {
      type,
      payload
   }: {
      type: string,
      payload: any;
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