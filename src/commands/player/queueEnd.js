module.exports = [{
    name: 'queueEnd',
    channel: '$channelId',
    type: 'queueEnd',
    $if: 'old',
    code: `
$deleteNowPlaying
$if[$getGuildVar[247]==true]
$if[$playerStatus!=stopped]
$description[ 
24/7 mode is enabled.
Add more songs by using \`/play\`]
$title[$getEmoji[queue]  Queue is over!]
$color[#4367FE]
$deleteIn[20s]
$onlyIf[$hasPermsInChannel[$channelId;$clientId;viewchannel;sendmessages;embedlinks]==true;]
$onlyIf[$channelExists[$channelId]==true;]
$endif
$else
$if[$playerStatus!=stopped]
$description[ 
Rax leaving the voice channel
Add more songs by using \`/play\`]
$title[$getEmoji[queue]  Queue is over!]
$color[#4367FE]
$deleteIn[20s]
$onlyIf[$hasPermsInChannel[$channelId;$clientId;viewchannel;sendmessages;embedlinks]==true;]
$onlyIf[$channelExists[$channelId]==true;]
$endif
$leavevc
$endif
`
}]