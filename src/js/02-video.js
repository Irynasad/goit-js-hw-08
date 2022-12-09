import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const PLAYER_KEY = 'videoplayer-current-time';

load();

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(PLAYER_KEY, JSON.stringify(seconds));
  // console.log(JSON.stringify(seconds));
}

function getSaveTime() {
  return JSON.parse(localStorage.getItem(PLAYER_KEY)) || [];
}

function load() {
  const create = getSaveTime();
  // console.log(create);
  player.setCurrentTime(create || 0.1);
}
