const playersToObservGame = {
    // Sembi
    "90532204471394304":(member)=>{
        gamePlaying(getGame(member.presence.game), member)
    },
    // Göte
    "161850513850236928" : (member) => {
        gamePlaying(getGame(member.presence.game), member)
    },
    // Saggen
    "307925382383009792" : (member) => {
        gamePlaying(getGame(member.presence.game), member)
    },
    // Robin
    "90532398575411200" : (member) => {
        gamePlaying(getGame(member.presence.game), member)
    },
    // Deniz
    "186898348916211712" : (member) => {
        gamePlaying(getGame(member.presence.game), member)
    },
    // Jakob
    "98571062249275392" : (member) => {
        gamePlaying(getGame(member.presence.game), member);
    }
};

function gamePlaying(game, member) {
    switch (game) {
        case 'Spotify':{
            if (member.user.id === '90532204471394304') {
                member.client.channels.get('501521263882272769').send(member.user.toString() + ' Test Spotify? :upside_down: - Sembi');
                break;
            }
            member.client.channels.get('501521263882272769').send(member.user.toString() + ' Test Spotify? :upside_down:');
            break;
        }
        case 'World of Warcraft Classic':{
            if (member.user.id === '161850513850236928' || member.user.id === '307925382383009792') {
                member.client.channels.get('501521263882272769').send(member.user.toString() + '  Vinner ni? :upside_down:');
                break;
            }
            member.client.channels.get('501521263882272769').send(member.user.toString() + ' inte 60 ännu? :kekw:');
            break;
        }
        case 'Dota 2':{
            if (member.user.id === '161850513850236928' || member.user.id === '307925382383009792') {
                member.client.channels.get('501521263882272769').send(member.user.toString() + ' O NI SPELER DETTA DOTA..');
                break;
            }
            member.client.channels.get('501521263882272769').send(member.user.toString() + ' Dota 2 :WeirdChamp:');
            break;
        }
        case 'Vermintide 2': {
            member.client.channels.get('501521263882272769').send(member.user.toString() + ' Verminfag :DansGame:');
            break;
        }
        case 'League of Legends' : {
            if (member.user.id === '98571062249275392') {
                member.client.channels.get('501521263882272769').send(member.user.toString() + ' the king is back! :Pog:');
                break;
            }
            member.client.channels.get('501521263882272769').send(member.user.toString() + ' Leauge :LULW:');
            break;
        }
        case 'Overwatch' : {
            member.client.channels.get('501521263882272769').send(member.user.toString() + ' Overwatch! :PogU:');
            break;
        }
    }
}

function getGame(game) {
    return game && game.name
}

function onPresenceUpdate(oldMember, newMember) {
    if(newMember.user.id in playersToObservGame){
        let func = playersToObservGame[newMember.user.id];
        func(newMember)
    }
}

function onMessageGote(msg) {
    if (msg.author.id === '90532204471394304') {
        msg.reply(' INSERT HERE LUL')
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
            .catch(console.error);
    }
}

async function main() {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    await client.login('NjI3NTY4NjYwMzc0MDkzODI0.XY-35g.B6YEI46V5xmVDgmkjJR3sMB9wjQ');
    console.log("We logged in");

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on('message', onMessageGote);

    client.on('presenceUpdate', onPresenceUpdate);

}

// Get ID from guild
/*function userId(client) {
    client.guilds.forEach((guilds, _) => {
        guilds.members.forEach((member, _) => {
            if (member.user.username !== 'göte' && member.user.username !== "Saggen" && member.user.username !== 'Sembi' && member.user.username !== 'Mad 👻') {
                return
            }
            console.log(`${member.user.username} have id ${member.id}`);
        })
    });
}*/

main();