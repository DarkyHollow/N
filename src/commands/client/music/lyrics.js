module.exports = {
    name: 'lyrics',
    description: 'Display or search lyrics of the track',
    options: [{
        name: 'search',
        description: 'The song title',
        type: 3,
        required: false,
    }],
    $if: 'old',
    code: `
$isInteraction
$if[$getContext[search;all]==]
$if[$hasPlayer==false]
$description[$getEmoji[no]  There are no players for this guild!]
$color[Red]
$deleteIn[5s]
$elseif[$isCurrentExist==false||$playerStatus==stopped||$playerStatus==destroyed]
$description[$getEmoji[no]  There are no track currently playing!]
$color[Red]
$deleteIn[5s]
$endelseif
$else
$title[Lyrics for **"$songInfo[title]"**]
$description[>>> $get[LY]]
$footer[Requested by $username;$authorAvatar]
$color[#4367FE]
$thumbnail[$songInfo[artworkUrl]]
$onlyIf[$get[LY]!=;{newEmbed:{description:$nonEscape[$getEmoji[no]]  No results found}{color:Red}}{ephemeral}{deleteIn:5s}]
$let[LY;$textSlice[$nonEscape[$lyrics[$songInfo[title]]]];0;4000]
$endif
$else
$title[Lyrics for **"$getContext[search;all]"**]
$description[>>> $get[LY]]
$footer[Requested by $username;$authorAvatar]
$color[#4367FE]
$onlyIf[$get[LY]!=;{newEmbed:{description:$nonEscape[$getEmoji[no]]  No results found}{color:Red}}{ephemeral}{deleteIn:5s}]
$let[LY;$textSlice[$nonEscape[$lyrics[$getContext[search;all]]]];0;4000]
$endif
$checkPerms`
}