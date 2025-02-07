module.exports = {
    name: 'help',
    aliases: 'h',
    description: 'See all my available commands',
    $if: 'old',
    code: `
$isInteraction
$description[**:wave:  Hello! I'm Rax!**  
I'm a discord music bot, here to bring music to your server! My prefix is **\`$getDefaultVar[prefix]\`**.  

**Need Help?**  
Join our [Support Server](https://discord.gg/hyQYXcVnmZ) for assistance, feedback, or suggestions.  

**Important:**  
By using and interacting with me, you agree to our **Terms of Service**. Type **\`/terms\`** to learn more.  

**Let’s enjoy great music together!**]
$addField[UTILITIES;\`help\`  \`info\`  \`invite\`  \`node\`  \`ping\`  \`prefix\`  \`privacy\`  \`support\`  \`terms\`  \`247\`]
$addField[FILTERS;\`8d\`  \`bass\`  \`chimpunk\`  \`china\`  \`clear\`  \`darthvader\`  \`daycore\`  \`doubletime\`  \`earrape\`  \`electronic\`  \`equalizer\`  \`karaoke\`  \`nightcore\`  \`party\`  \`pitch\`  \`pop\`  \`radio\`  \`rate\`  \`slow\`  \`soft\`  \`speed\`  \`treblebass\`  \`tremolo\`  \`vaporwave\`  \`vibrato\`]
$addField[MUSIC;\`autoplay\`  \`clearqueue\`  \`connect\`  \`disconnect\`  \`grab\`  \`loop\`  \`lyrics\`  \`nowplaying\`  \`pause\`  \`play\`  \`previous\`  \`queue\`  \`remove\`  \`replay\`  \`resume\`  \`search\`  \`seek\`  \`shuffle\`  \`skip\`  \`skipto\`  \`stop\`  \`unshuffle\`  \`volume\`]
$footer[Requested by $username;$authorAvatar]
$color[#4367FE]
$addButton[1;Support Server;link;https://discord.gg/hyQYXcVnmZ]
$addButton[1;Invite Me!;link;https://discord.com/oauth2/authorize?client_id=1297801416848441386&permissions=34949376&scope=bot%20applications.commands]
$checkPerms
`
}
