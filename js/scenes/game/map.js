export function loadMap(map, from = undefined) {
    // Unload previous map
    window.gameVars.collidesGroup.clear(true);
    window.gameVars.utilitiesGroup.clear(true);

    // Load Layers
    map.layers.forEach(layerData => {
        const tilesetName = layerData.properties.find(prop => prop.name === 'tileset')?.value;
        if (tilesetName) {
            const tileset = map.addTilesetImage(tilesetName, tilesetName);
            map.createLayer(layerData.name, tileset, 0, 0);
        }
    });

    // Object layers
    const collidesLayer = map.getObjectLayer('collides');
    const spawnPointLayer = map.getObjectLayer('spawnPoint');
    const utilitiesLayer = map.getObjectLayer('utilities');

    // Collides
    collidesLayer.objects.forEach(obj => {
        window.gameVars.collidesGroup.create(obj.x, obj.y, null)
            .setVisible(false)
            .setSize(obj.width, obj.height)
            .setOffset(16, 16)
            .setOrigin(0, 0);
    });

    // Utilities
    utilitiesLayer.objects.forEach(obj => {
        if (obj.type === 'mapTp') {
            window.gameVars.utilitiesGroup.create(obj.x, obj.y, null)
                .setVisible(false)
                .setSize(obj.width, obj.height)
                .setOffset(16, 16)
                .setOrigin(0, 0)
                .setName(`mapTp${obj.name}`);
        }

        if (obj.type === 'mapTpPoint' && from !== undefined) {
            if (obj.name === from) {
                from = { x: obj.x, y: obj.y };
                console.log(from);
            }
        }
    });

    // Spawn point
    const spawnPoint = spawnPointLayer.objects.find(obj => obj.name === 'spawnPoint');
    if (from === undefined) {
        window.gameVars.player.x = spawnPoint.x;
        window.gameVars.player.y = spawnPoint.y;
    } else {
        window.gameVars.player.x = from.x;
        window.gameVars.player.y = from.y;
    }

    return { map: map, spawnPoint };
}

export function checkMap() {
    this.physics.add.overlap(window.gameVars.player, window.gameVars.utilitiesGroup, (player, obj) => {
        if (obj.name.startsWith('mapTp')) {
            if (window.gameVars.map.map) {
                window.gameVars.map.map.destroy();
            }
            window.gameVars.map = obj.name.replace('mapTp', '');
        }
    });    
}