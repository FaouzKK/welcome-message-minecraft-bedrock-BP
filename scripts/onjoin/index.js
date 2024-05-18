import {world } from "@minecraft/server";
import { isNewPlayer, wait } from "../functions/index.js";
import { sayHelloToNewUser } from "./panelConfig.js";

try {

    world.afterEvents.playerSpawn.subscribe((joinEvent) => {
    if (joinEvent.player.hasTag("admin")) return console.log("player is an admin")
        if (joinEvent.initialSpawn) {
            console.log("promise Start") ;
            if (isNewPlayer(joinEvent.player)) return console.log("Not a new player") ;

            wait(60)
            .then(e => {

                 sayHelloToNewUser(joinEvent.player) ;
                
            })
            
        } else {

            console.log("joined") ;
        }
           
    })

} catch (e) {

     console.error(e) ;
}