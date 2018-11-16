try {
client.on("guildMemberAdd", function(member) {
    var channel = member.guild.channels.find("name", "welcome")
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('***ولكم نورت السيرفر يا قلبي نتمني لك الاستمتاع في السيرفر***')
.setThumbnail(member.avatarURL)
  .setImage('https://cdn.discordapp.com/attachments/485784710711345153/497827845637406740/Welcomegif.gif')
        if (!channel) return;
        channel.sendEmbed(embed);
});
        

} catch (error) {
  console.log(error)
}
