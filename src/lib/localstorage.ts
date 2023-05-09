let _ = {
   rm: (key: string) => localStorage.removeItem(key),
   get: (key: string) => JSON.parse(localStorage.getItem(key) as string),
   set: (key: string, val: Object | null) => localStorage.setItem(key, JSON.stringify(val))
};

export default class LocalStorage {
   _id: string;
   _initial: Object;

   // @ts-expect-error
   val: Object | null;

   constructor(name: string, ver = 0, initial = {}) {
      let id = (ver: number) => `${name} ${ver}`;

      this._id = id(ver);
      this._initial = initial;

      this.read();

      // @ts-expect-error
      if (this.val === null) this.init();
   }

   del() {
      _.rm(this._id);
   }
   init() {
      this.write(this._initial);
      this.read();
   }
   read() {
      this.val = _.get(this._id);
   }
   write(obj = this.val) {
      _.set(this._id, obj);
   }
}