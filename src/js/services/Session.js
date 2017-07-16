const storageKey = "FM_POOL_SESSION";

class Session {
    constructor(){
        this.data = JSON.parse(localStorage.getItem(storageKey) || "{}");
        this.isUser = !!this.data.user;
    }

    set(key, val){
        this.data.key = val;
        this._store();
    }

    _store(){
        localStorage.setItem(storageKey, JSON.stringify(this.data));
    }
}
export let session = new Session();