const playersToObserv = {
    // Sembi
    "90532204471394304":(member)=>{
    gamePlaying(getGame(member.presence.game))
    },
    // Göte
    "161850513850236928" : (member) => {

    }
};

function gamePlaying(game) {
    switch (game) {
        case 'Spotify':{
            console.log("Göte");
            break;
        }
        case 'Wow':{

        }
    }
}

function getGame(game) {
    return game && game.name
}

function onPresenceUpdate(oldMember, newMember) {
    if(newMember.user.id in playersToObserv){
       var func = playersToObserv[newMember.user.id];
       func(newMember)
    }
}

async function main() {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    await client.login('NjI3NTY4NjYwMzc0MDkzODI0.XY-35g.B6YEI46V5xmVDgmkjJR3sMB9wjQ');
    console.log("We logged in");
    // Used for checking userID.
    //userId(client);

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on('message', msg => {
        if (msg.content === 'ping') {
            msg.reply('Pong!');
        }
    });

    client.on('presenceUpdate', onPresenceUpdate);


/*    client.on('presenceUpdate', (_, newMember) => {
        if (newMember.user.id === '90532204471394304' && newMember.presence.game && newMember.presence.game.name === 'Spotify') {
            //console.log(newMember.presence.game.name);
            console.log('Sembi spelar spotify');
        }
        if (newMember.user.id === '161850513850236928' && newMember.presence.game.name === 'World of Warcraft Classic') {
            console.log('Göte spelar WOW')
        }
        if (newMember.user.id === '307925382383009792' && newMember.presence.game.name === 'World of Warcraft Classic') {
            console.log('Saggen spelar spelar WOW')
        }
        if (newMember.user.id === '90532398575411200' && newMember.presence.game.name === 'World of Warcraft Classic') {
            console.log('Robin spelar spelar WOW')
        }
        //console.log(member.user.id);
        //console.log(member.presence.game.name);
    });*/

}

function userId(client) {
    client.guilds.forEach((guilds, _) => {
        guilds.members.forEach((member, _) => {
            if (member.user.username !== 'göte' && member.user.username !== "Saggen" && member.user.username !== 'Sembi' && member.user.username !== 'Mad 👻') {
                return
            }
            console.log(`${member.user.username} have id ${member.id}`);
        })
    });
}

main();