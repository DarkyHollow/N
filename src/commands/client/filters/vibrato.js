module.exports = {
    name: 'vibrato',
    description: 'Applies vibrato filter',
    $if: 'old',
    code: `
$isInteraction
$if[$hasPlayer==false]
$description[$getEmoji[no]  There are no players for this guild!]
$color[Red]
$deleteIn[5s]
$elseif[$playerStatus==stopped||$playerStatus==destroyed]
$description[$getEmoji[no]  There are no track currently playing!]
$color[Red]
$deleteIn[5s]
$endelseif
$else
$description[$getEmoji[yes]  Vibrato filter applied]
$color[#4367FE]
$setFilter[vibrato]
$endif
$checkVoice
$checkPerms`
}
