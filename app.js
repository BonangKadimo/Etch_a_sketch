
let validInput = false;
let dimension;
while (!validInput){
    dimension = parseInt(prompt('What dimensions would you like your grid to have (1 to 100)'));
    if(dimension > 1 && dimension < 100){
        validInput = true;
    }
}
var columns = dimension;
var rows = dimension;

var grid = document.createElement('div');
grid.className = 'grid';
for (var i = 0; i < columns; ++i) {
    var column = document.createElement('div'); // create column
    column.className = 'column';
    for (var j = 0; j < rows; ++j) {
        var row = document.createElement('div'); // create row
        row.className = 'row';
        row.addEventListener('mouseover', function(event) {
            event.target.style.background = 'grey';
        });
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
document.body.appendChild(grid);

refreshBtn = document.createElement('button');
refreshBtn.id = 'refresh-btn'
refreshBtn.innerText = 'Refresh'
refreshBtn.addEventListener('click', function(){
    location.reload()
})
document.body.appendChild(refreshBtn);
