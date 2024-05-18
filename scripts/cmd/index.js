import { world } from "@minecraft/server";
import { WelcomeGuiMenu } from "./commands.js";


world.afterEvents.itemUse.subscribe(evt=> {

   const itemStack = evt.itemStack ;
   const player = evt.source;

     if (itemStack.typeId === "minecraft:compass" && player.hasTag("admin")) {

          WelcomeGuiMenu(player) ;
     
     } 

})