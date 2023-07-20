const eyes = document.querySelector('.eyes');

eyes.addEventListener('click', function() {
    const music = document.querySelector('.music-player');
    music.play();
});

// Create an audio context instance if WebAudio is supported
let context = (window.AudioContext || window.webkitAudioContext) ?
  new (window.AudioContext || window.webkitAudioContext)() : null;
  
// Decide on some parameters
let allowBackgroundPlayback = false; // default false, recommended false
let forceIOSBehavior = false; // default false, recommended false
// Pass it to unmute if the context exists... ie WebAudio is supported
if (context)
{
  // If you need to be able to disable unmute at a later time, you can use the returned handle's dispose() method
  // if you don't need to do that (most folks won't) then you can simply ignore the return value
  let unmuteHandle = unmute(context, allowBackgroundPlayback, forceIOSBehavior);
  
  // ... at some later point you wish to STOP unmute control
  unmuteHandle.dispose();
  unmuteHandle = null;
  
}