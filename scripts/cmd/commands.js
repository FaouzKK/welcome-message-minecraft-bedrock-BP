import { ModalFormData } from "@minecraft/server-ui";
import { Player } from "@minecraft/server";
import { Welcome } from "../class/Welcome.js";
/**
 * 
 * @param {Player} player 
 */
export function WelcomeGuiMenu(player) {

            let status = Welcome.status === 'on' ? true : false ;
            let body = Welcome.body ?? undefined ;
            let rule = Welcome.rule ?? undefined;
            //console.log(body) ;
     const form = new ModalFormData()
                  form.title("Welcome Gui Menu!")
                  //form.body("Enable/Disable Welcome;")
            
                  form.toggle("Enable/Disable Welcome",status) ;
                  form.textField("\nEnter your welcome message here", "Welcome Message",body) ;
                  form.textField("\nServeur Rules","put serveur rules here",rule);
                  form.submitButton("save") ;
                  

         form.show(player).then( formData => { 

                if (formData.canceled) return;
                let status = formData.formValues[0] === true ? "on" :"off";
                let body = formData.formValues[1];
                let rule = formData.formValues[2] ;
                Welcome.status = status ;
                Welcome.body = body ;
                Welcome.rule = rule ;
                player.sendMessage("Welcome configuration saved succefully") ;
        
                        })
           
}