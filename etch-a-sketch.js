const mainContainerDiv = document.querySelector('#main-container');


const GRID_DIV_MAX = 64;

for (let i = 0; i < GRID_DIV_MAX; i++) {
    const gridDiv = document.createElement('div');
    mainContainerDiv.appendChild(gridDiv);
}
