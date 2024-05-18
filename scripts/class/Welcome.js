export class Welcome {

    static #status = "on" ;
    static #body = "Hello Welcome to our server";
    static #rule = "Please Avoid cheat or you will get banned";


    
    static set status(status) {

        Welcome.#status = status ;
    }

    static set body(body) {

        Welcome.#body = body ;
    }

    static set rule(rule) {
        
        Welcome.#rule = rule ;
    }

    static get status() {
        
        return Welcome.#status ;
    }

    static get body() {
        
        return Welcome.#body ;
    }

    static get rule() {
        
        return Welcome.#rule ;
    }
}