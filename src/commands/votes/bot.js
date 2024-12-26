module.exports = [{
    name: 'vote',
    type: 'botVote',
    channel: '$getConfig[logs.vote]',
    code: `
<@$authorId>
$description[Thanks for voting for me, <@$authorId>! Your support keeps this bot running and improving every day. We're working hard to bring you even better features.

You can [vote](https://top.gg/bot/$clientId/vote) again <t:$round[$math[($datestamp+43200000)/1000]]:R>]
$thumbnail[$authorAvatar]
$color[#4367FE]
$addTimestamp
$title[$toLocaleUpperCase[$username just voted me!]]
$addButton[1;$getBotInfo[$clientId;points] votes;primary;uwu;true]
$addButton[1;Vote me on Top.gg!;link;https://top.gg/bot/$clientId/vote]`
}]