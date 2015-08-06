
var phrases = [
'Go ahead, let them judge you',
"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
'Follow your bliss and the universe will open doors where there were only walls.',
"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
" I attribute my success to this: I never gave or took any excuse.",
"You miss 100% of the shots you don’t take."
];

function getRandomArbitrary() {
  return phrases[Math.floor(Math.random()*phrases.length)];
}

$('.randomPhrase').text(getRandomArbitrary());
	
$('#refresh').on('click',function(){
	$('.randomPhrase').text(getRandomArbitrary());
});


