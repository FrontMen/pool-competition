const storageKey = "FM_POOL_SESSION";

class Session {
    constructor(){
        this.data = JSON.parse(localStorage.getItem(storageKey) || "{}");
    }

    set(key, val){
        this.data[key] = val;
        this._store();
    }

    isKnownUser(){
        return true;
    }

    get(key){
        return this.data[key];
    }

    _store(){
        localStorage.setItem(storageKey, JSON.stringify(this.data));
    }
}
export let session = new Session();