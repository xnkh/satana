/**
 * @author conner
 * @since 29-05-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "checkhost",
        "description": "Checks if a website is up",
        "aliases": ["online", "isup", "check", "up"],
        "syntax": "checkhost [host]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});
        
        if(args[0]) {
            request({
                uri: `https://check-host.net/check-http?host=${args[0]}&max_nodes=3`,
                json: true
            }).then(data => {
                let nodes = Object.keys(data.nodes);
                let message  = `\`\`\`asciidoc\nSUCCESS!\n=====\n= Results for ${args[0]} =\n`;
            
                for(let i = 0; i < nodes.length; i++) {
                    let node = data.nodes[nodes[i]];
                    let country = node[1];
                    let status = (typeof node[5] == "undefined" ? "NONE" : node[5]);
                    
                    message += `${country} :: Status: ${status}\n`
                }
            
                message += `\`\`\``;
            
                msg.channel.send(message);
            });
        }
    }
}