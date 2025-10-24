export namespace Droid {

    //  type Vektor = {
    //      x: number,
    //     y: number,
    //   z: number,
    //}

     let puffer: string = "puffer" 


    interface Command {
        module: string,
        method: string,
        data: string,
    }



    export function getCommand(): Command {
        const command: Command = {
            module: "Chassis",
            method: "move",
            data: "forward",
        }

         if (puffer == "stop") {
            command.data = "left";
            puffer = "puffer";
            
        }else {puffer = "stop" }

        console.log(command);
        return command;

       

    }



}






























