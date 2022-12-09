import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const PLAYER_KEY = 'videoplayer-current-time';

// const load = ();

const setWatchingTime = ({ seconds }) => {
  localStorage.setItem(PLAYER_KEY, JSON.stringify(seconds));
  console.log(JSON.stringify(seconds));
};
const getSaveTime = () => {
  return JSON.parse(localStorage.getItem(PLAYER_KEY)) || [];
};

player.on('timeupdate', throttle(setWatchingTime, 1000));
console.log('played the video!');

// {
//   duration: 61.857;
//   percent: 0.049;
//   seconds: 3.034;
// }
