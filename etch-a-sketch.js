const mainContainerDiv = document.querySelector('#main-container');
const resetButton = document.querySelector('#reset');

const GRID_DIV_MAX = 256;

resetButton.addEventListener('click', () => {
    let input = parseInt(prompt('How many squares would you like the new grid to have?'));

    if (!Number.isNaN(input) && input > 0 && input <= 32) {
        resetGrid(input);
    }
    else {
        alert('Your input must be a valid number');
    }
});

for (let i = 0; i < GRID_DIV_MAX; i++) {
    const gridDiv = document.createElement('div');
    mainContainerDiv.appendChild(gridDiv);
}

resetListener();

function resetListener() {
    const gridDivs = mainContainerDiv.querySelectorAll('div');

    gridDivs.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.classList.add('filled');
        });
    });
}

function resetGrid(dimension) {
    mainContainerDiv.innerHTML = '';
    let gridDimension = 640 / dimension;
    let gridNumbs = dimension * dimension;

    for (let i = 0; i < gridNumbs; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.style.height = gridDimension + 'px';
        gridDiv.style.width = gridDimension + 'px';
        mainContainerDiv.appendChild(gridDiv);       
    }

    resetListener();
}
