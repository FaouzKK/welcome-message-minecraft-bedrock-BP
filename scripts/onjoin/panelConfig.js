import { Player } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
import { Welcome } from "../class/Welcome.js";
import { RegistrePlayer } from "../functions/index.js";


/**
 * 
 * @param {Player} player 
 */



export function sayHelloToNewUser(player) {

 
    const message = new MessageFormData() ;
        message.title('Welcome to our server!');
        message.body(`\n${Welcome.body}\n\nRules:\n${Welcome.rule}`)
        message.button1('I accept')
        message.button2('I decline')

        message.show(player).then((result) => {
        
            if (result.canceled)  return sayHelloToNewUser(player) ;

            switch (result.selection) {
                
                case 0 : 
                  
                   RegistrePlayer(player) ;
                   player.sendMessage("Enjoy :)") ;
                   
                
                break ;

                case 1 :
                    console.log("Player decline rules")
                    
                    player.runCommandAsync(`kick ${player.nameTag} You must accept the rules to join the server`) ;
            }

        })
}
