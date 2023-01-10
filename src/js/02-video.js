import throttle from 'lodash.throttle';
//importing vimeo player obj from @vimeo/player npm package
import Player from '@vimeo/player';

//finding iframeEl
const iframeEl = document.querySelector('#vimeo-player');
//initializing new player
const player = new Player(iframeEl);
//time when the player stopped (got from local storage), if new (null from localStorage) - 0
let currentPlayerTime;
try {
  currentPlayerTime =
    JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0;
} catch (error) {
  console.error(error);
}
//setting the current play position
player.setCurrentTime(currentPlayerTime);

//callback function for play event
const onPlayerUpdateTime = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

//using throttle from lodash library
player.on('timeupdate', throttle(onPlayerUpdateTime, 1000));
