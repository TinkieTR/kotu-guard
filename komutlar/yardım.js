const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()
        .setTitle('Guard Komutları!')

             .setColor('#ff0000')
             .setDescription(`İşte Komutlarım!

            **${prefix}antiraid aç**
             Bot Korumasını Açar.

            **${prefix}capsengel aç**
             CapsLock Korumasını Açar.

           **${prefix}emojikoruma aç**
             Emoji Korumasını Açar.

           **${prefix}everengel aç**
             Ever Korumasını Açar.

           **${prefix}kanalkoruma aç**
             Kanal Korumasını Açar.

           **${prefix}küfürengel aç**
             Küfür Korumasını Açar.

           **${prefix}modlog #kanal**
             ModLog Kanalını Belirtirsiniz.

           **${prefix}reklamengel aç**
             Reklam Korumasını Açar.

           **${prefix}rolkoruma aç**
             Rol Korumasını Açar.

           **${prefix}sohbet-aç**
             Sohbeti Açar.

           **${prefix}sohbet-kapat**
             Sohbeti Kapatır.

           **${prefix}sil-üye @üye miktar**
             Kişinin Mesajlarını Siler.

           **${prefix}sil miktar**
             Mesajları Silersiniz.

           **${prefix}yavaşmod süre**
             Yavaş Modu Açarsınız.

           **${prefix}ban @üye sebep**
             Kişiyi Banlarsınız.

           **${prefix}kick @üye sebep**          
             Kişiyi Atarsınız.
             `)
    .setFooter('Λ P O L L O N ❤ Volkanoloji')
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
//DÜZENLENECEK