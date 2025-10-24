export var Droid;
(function (Droid) {
    //  type Vektor = {
    //      x: number,
    //     y: number,
    //   z: number,
    //}
    let puffer = "puffer";
    function getCommand() {
        const command = {
            module: "Chassis",
            method: "move",
            data: "forward",
        };
        if (puffer == "stop") {
            command.data = "left";
            puffer = "puffer";
        }
        else {
            puffer = "stop";
        }
        console.log(command);
        return command;
    }
    Droid.getCommand = getCommand;
})(Droid || (Droid = {}));
