import { checkCollides, loadMap, move, checkMap } from './scenes/game.js';

export function update() {
    move();
    checkCollides.call(this);

    checkMap.call(this);
    if (typeof window.gameVars.map === 'string') {
        const [from, to] = window.gameVars.map.split('/');
        const map = this.make.tilemap({ key: from, tileWidth: 32, tileHeight: 32 });
        window.gameVars.map = loadMap(map, to);
    }
}