import { Player, Scoreboard, system, world} from "@minecraft/server" 

export function wait (time) {

        return new Promise((resolve) => {
            const waitTimeOut = system.runTimeout(() => {

                system.clearRun(waitTimeOut) ;
                resolve()
            },time) ;
        }) ;  

    }

    /**
     * @param {Player} player 
     * @returns {boolean}
     */

 
    export function isNewPlayer(player) {


        let registredPlayer = world.scoreboard.getObjective("registredPlayer") ;

        if (registredPlayer === undefined) {

            registredPlayer = world.scoreboard.addObjective("registredPlayer") ;
            
        }

        return registredPlayer.hasParticipant(player) ;
    }


    export function RegistrePlayer(player) {

        let registredPlayer = world.scoreboard.getObjective("registredPlayer") ;

        if (registredPlayer === undefined) {
            
            registredPlayer = world.scoreboard.addObjective("registredPlayer") ;
        }

        registredPlayer.addScore(player,1) ;
    }

 