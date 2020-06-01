/**
 * @author conner
 * @since 27-05-2020
 */

module.exports = {
    "info": {
        "permission": 1,
        "name": "nitro",
        "description": "Generates a random discord.gift link",
        "aliases": ["n", "gift"],
        "syntax": "nitro"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(e => {});

        let charset = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz1234567890";
        let code = "";

        for(let i = 0; i < 16; i++) code += charset[Math.floor(Math.random() * charset.length)];

        msg.channel.send(`https://discord.gift/${code}`);
    }
}