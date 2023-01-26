const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix } = require("./confing.json")
const Canvas = require("canvas");
client.once('ready', () => {
    console.log(`${client.user.username}Bot is Ready !`)
    const server = client.guilds.cache.get("1059758648055840818")
    client.user.setActivity(`${server.memberCount} Members`, {type: "WATCHING"})
})

client.on('message', message => {
    if(message.author.boy || message.channel.type == "dm")return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
        if(command == `${prefix}serverinfo`){
            let serverEmbed = new Discord.MessageEmbed()
            serverEmbed.setColor("#0020ff")
            serverEmbed.setAuthor(client.user.username, client.user.displayAvatarURL())
            serverEmbed.setTitle("Server Info")
            serverEmbed.setDescription("Server Anime & Gaiming Club Makani Baraye Gozarandan Vaght (: omidvarim oghat khobi ra Dakhel Server Dashte Bashid !")
            serverEmbed.setThumbnail(message.guild.iconURL())
            serverEmbed.addField("Server name", message.guild.name, true)
            serverEmbed.addField("Server Owner", message.guild.owner, true)
            serverEmbed.addField("Memeber Count", message.guild.memberCount, true)
            serverEmbed.addField("Role Count", message.guild.roles.cache.size, true)
            serverEmbed.addField("Emoji Count", message.guild.emojis.cache.size, true)
            serverEmbed.addField("ID Server", message.guild.id, true)
            serverEmbed.setTimestamp()
            serverEmbed.setImage('https://cdn.discordapp.com/attachments/948900073880825908/1061372032484397216/BANNER_OF_AGC.jpg')
            serverEmbed.setFooter(`Requested By ${message.author.username}`, message.author.displayAvatarURL())
            message.channel.send(serverEmbed)
        };
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
        if(command == `${prefix}banner`)(
            message.channel.send('・．━━━━━━━━━━━━ † ━━━━━━━━━━━━．・\n                   Anime & Gaming Club \n ・．━━━━━━━━━━━━ † ━━━━━━━━━━━━．・ \n \n احتمالا الان حوصلت سر رفته \n نمیدونی چیکار کنی ؟ \n \n خوب بیا تو سرور AG Club یه جمع دوستانه دور هم داخل ویس هستیم حتما یه سر به سرور بزنید ♥️ \n \n 1 . Event Haye Bozorg va Jaleb 💫 \n 2 . GiveAway va Drop Haye Emam 🎁 \n 3 . Public Chat Faal ! 💬 \n 4 . Bakhsh Haye Anime & Gaming Ba Amv & Clip 😇 \n ◜────────────────────── Join Server ──────────────────────◝ \n \n Server : https://discord.gg/TeYAVQMzBx \n \n Banner : https://cdn.discordapp.com/attachments/948900073880825908/1061372032484397216/BANNER_OF_AGC.jpg')
        )
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
        if(command == `${prefix}staff`)(
            message.channel.send('**Staff required :** \n \n 1 . سن بالای 14 \n 2. داشتن مایک برای ویس و جلسه های استف \n 3. فعالیت روزانه بالای 4 الی 5 ساعت \n 4. حداقل ادمین بودن داخل یک سرور \n 5. صبر بالا برای پاسخ گویی به تیکت \n \n **:bust_in_silhouette: Staff Form ::bust_in_silhouette:** \n ***خواهشا فرم زیر را پر کنید و داخل تیکت ارسال کنید*** \n \n 1. :نام \n 2. :سن \n 3. :فعالیت روزانه \n 4. :لینک سرروی که داخل آن ادمین هتسید \n 5. به چه دلیل میخواید عضو تیم استف بشید \n \n **Anime & Gaming Club Staf Team :hearts:**')
        )
});

client.login('')