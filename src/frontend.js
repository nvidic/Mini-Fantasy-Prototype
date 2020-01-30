getPlayersFromDB = () => {
    fetch('http://localhost:3000/api/players')
    .then((response) => {
        response.json()
        .then((players) => {
            console.log(players);
            console.log(players[0].name);
        });
        
    })
    .catch((err) => {
        console.log(err);
    });
}

getForwardsFromDB = () => {
    fetch('http://localhost:3000/api/players/forwards')
    .then((response) => {
        response.json()
        .then((players) => {
            console.log("getForwardsFromDB()");
            //console.log(players);
        });
        
    })
    .catch((err) => {
        console.log(err);
    });
}

getMidfieldersFromDB = () => {
    fetch('http://localhost:3000/api/players/midfielders')
    .then((response) => {
        response.json()
        .then((players) => {
            console.log("getMidfieldersFromDB()");
            //console.log(players);
        });
        
    })
    .catch((err) => {
        console.log(err);
    });
}

getDefendersFromDB = () => {
    fetch('http://localhost:3000/api/players/defenders')
    .then((response) => {
        response.json()
        .then((players) => {
            console.log("getDefendersFromDB()");
            console.log(players);
        });
        
    })
    .catch((err) => {
        console.log(err);
    });
}

getGoalkeepersFromDB = () => {
    fetch('http://localhost:3000/api/players/goalkeepers')
    .then((response) => {
        response.json()
        .then((players) => {
            console.log("getGoalkeepersFromDB()");
            console.log(players);
        });
        
    })
    .catch((err) => {
        console.log(err);
    });
}

// On players.html

showPlayersOnPage = () => {
    fetch('http://localhost:3000/api/players')
    .then((response) => {
        response.json()
        .then((players) => {
            //console.log(players);
            //console.log(players[0].name);
            
            // new row needs to be added every time new position occurs 
            // OR after every 2nd player (numPlayersAdded = 2 -> add a new row)
            
            let currentPosition = '';
            let numPlayersAdded = 0;

            const GK = document.createElement('div');
            const DF = document.createElement('div');
            const MF = document.createElement('div');
            const FW = document.createElement('div');

            GK.className = 'row';
            DF.className = 'row';
            MF.className = 'row';
            FW.className = 'row';

            // Add a new row outside of forEach
            let row = document.createElement('div');
            row.className = 'row';           
            row.style = 'width:100%; height:100%'; 
            GK.appendChild(row);

            // Declaring variables for html elements
            let col;
            let img;
            let span;

            // Adding Players
            players.forEach( (player) => {
                // GKs
                if(player.position === 'Goalkeeper') {
                    
                    if(currentPosition !== 'Goalkeeper') {
                        // first GK                        
                        // set currentPosition
                        currentPosition = 'Goalkeeper';
                    }

                    // Create a col for GK
                    col = createColumnForPlayer(player);

                    // If it's the 2nd GK, create a new row
                    
                    if(numPlayersAdded == 2) {
                        row = document.createElement('div');
                        row.className = 'row';
                        row.style = 'width:100%; height:100%'; 
                        GK.appendChild(row);
                        
                        numPlayersAdded = 1;
                    }
                    // Else, just add the GK into the current row
                    else {
                        numPlayersAdded++;
                    }

                    // Add col into row
                    row.appendChild(col);         

                }
                // After adding all GKs, add them to the goalkeepers div                
                if(currentPosition === 'Goalkeeper' && player.position === 'Defender') {
                    // Add spacing between rows
                    row.parentElement.classList.add('mb-3');

                    
                    currentPosition = 'Defender';
                    numPlayersAdded = 0;
                    // Create a new row for defenders
                    // This row is created beacause there are no more GKs
                    // For every 2 defenders, a new row needs to be created
                    
                    row = document.createElement('div');
                    //row.className = 'row mt-5';
                    row.className = 'row';
                    row.style = 'width:100%; height:100%'; 
                    DF.appendChild(row);
                }

                // DFs go into their own row
                if(player.position === 'Defender') {
                    // Create a col for DF
                    col = createColumnForPlayer(player);

                    // If it's the 2nd DF, create a new row
                    
                    if(numPlayersAdded == 2) {
                        row = document.createElement('div');
                        row.className = 'row';
                        row.style = 'width:100%; height:100%'; 
                        DF.appendChild(row);
                        
                        numPlayersAdded = 1;
                    }
                    // Else, just add the DF into the current row
                    else {
                        numPlayersAdded++;
                    }

                    // Add col into row
                    row.appendChild(col);          
                }

                // After adding all DFs, add them to the defenders div                
                if(currentPosition === 'Defender' && player.position === 'Midfielder') {
                    // Add spacing between rows
                    row.parentElement.classList.add('mb-3');

                    
                    currentPosition = 'Midfielder';
                    numPlayersAdded = 0;

                    // Create a new row for defenders
                    // This row is created beacause there are no more GKs
                    // For every 2 midfielders, a new row needs to be created
                    row = document.createElement('div');
                    //row.className = 'row mt-5';
                    row.className = 'row';
                    row.style = 'width:100%; height:100%'; 
                    MF.appendChild(row);
                }
                // MFs go into their own row
                if(player.position === 'Midfielder') {
                    // Create a col for MF
                    col = createColumnForPlayer(player);

                    // If it's the 2nd MF, create a new row
                    if(numPlayersAdded == 2) {
                        row = document.createElement('div');
                        row.className = 'row';
                        row.style = 'width:100%; height:100%'; 
                        MF.appendChild(row);
                        
                        numPlayersAdded = 1;
                    }
                    // Else, just add the MF into the current row
                    else {
                        numPlayersAdded++;
                    }

                    // Add col into row
                    row.appendChild(col);
                }

                if(currentPosition === 'Midfielder' && player.position === 'Forward') {
                    // Add spacing between rows
                    row.parentElement.classList.add('mb-3');

                    
                    currentPosition = 'Forward';
                    numPlayersAdded = 0;

                    // Create a new row for defenders
                    // This row is created beacause there are no more GKs
                    // For every 2 forwards, a new row needs to be created
                    row = document.createElement('div');
                    //row.className = 'row mt-5';
                    row.className = 'row';
                    row.style = 'width:100%; height:100%'; 
                    FW.appendChild(row);
                }
                // FWs go into their own row
                if(player.position === 'Forward') {
                    // Create a col for FW
                    col = createColumnForPlayer(player);
                    
                    // If it's the 2nd FW, create a new row
                    if(numPlayersAdded == 2) {
                        row = document.createElement('div');
                        row.className = 'row';
                        row.style = 'width:100%; height:100%'; 
                        FW.appendChild(row);
                        
                        numPlayersAdded = 1;
                    }
                    // Else, just add the FW into the current row
                    else {
                        numPlayersAdded++;
                    }

                    // Add col into row
                    row.appendChild(col);
                }
            });
            // End Adding Players

            // After adding new elements for players we need to add them to html
            const playersDiv = document.getElementsByClassName('players')[0];
            playersDiv.appendChild(GK);
            playersDiv.appendChild(DF);
            playersDiv.appendChild(MF);
            playersDiv.appendChild(FW);            
        });
        
    })
    .catch((err) => {
        console.log(err);
    });
}

createColumnForPlayer = (player) => {
    let col = document.createElement('div');
    col.className = ' col-md-6 col-lg-6 col-xl-6 playerCol ';
    col.addEventListener('click', playerClicked);

    // Player's picture
    img = document.createElement('img');
    img.src = player.img;
    //img.classList = 'img-fluid ';    
    img.style.width = "3rem";
    img.style.height = "3rem";
    // Add img to col
    col.appendChild(img);

    // Player's data
    span = document.createElement('span');
    span.className = 'text-light ml-2';
    span.innerText = `${player.number}  ${player.name}`//player.number+' '+player.name;
    // Add span with name and number to col
    col.appendChild(span);

    return col;
}

// Delete Jumbotron
deleteJumbotron = () => {
    document.getElementsByClassName('jumbotron')[0].remove();
    lastPlayer = '';
}

var lastPlayer = '';
// Extra info about player
playerClicked = (e) => {
    //console.log(e.target);

    // If e.target class is col or e.target.parentElement class is col
    if(e.target.className.includes('col') || e.target.parentElement.className.includes('col')) {
        //console.log(e.target);
        //console.log(e.target.firstChild.nextElementSibling.innerText);
        let playerName = e.target.className.includes('col') ? (e.target.firstChild.nextElementSibling.innerText) : 
            (e.target.nodeName == 'IMG' ? e.target.nextElementSibling.innerText : e.target.innerText);

        playerName = playerName.split(' ');
        playerName.shift(); // remove first element
        //playerName[0] = '';
        playerName = playerName.join('_').trim(); // eg. Mateo_Kovacic
        //console.log(playerName);

        if(lastPlayer === playerName) {
            if(document.getElementsByClassName('jumbotron').length > 0) {
                deleteJumbotron();
                //lastPlayer = '';
            }
        }
        else {
            lastPlayer = playerName;
            
            fetch(`http://localhost:3000/api/players/${playerName}`)
            .then((response) => {
                response.json()
                .then((players) => {
                    // console.log(players[0]);
                    const playerInfo = players[0];

                    // We want to add a new element
                    const playersDiv = document.getElementsByClassName('players')[0];
                    // add jumbotron before first row
                    //const firstRow = document.getElementsByClassName('row')[0];

                    const jumbotronArray = document.getElementsByClassName('jumbotron');
                    if(jumbotronArray.length > 0) {
                        // Remove existing jumbotron
                        jumbotronArray[0].remove();
                    }
            
                    const newDiv = document.createElement('div');
                    // Row after wich to add jumbotron
                    let referenceRow = e.target.className.includes('col') ? (e.target.parentElement) : (e.target.parentElement.parentElement);
                    if(window.innerWidth <= 760) { // for smaller screens (eg. phones or tablets)
                        referenceRow = e.target.className.includes('col') ? (e.target) : (e.target.parentElement);
                    }
                    //console.log("--->   window.innerWidth: "+window.innerWidth);                    
                    //console.log(referenceRow);
                        
                    newDiv.style = 'background-color:rgba(0,0,0,0.7);';
                    newDiv.className = 'jumbotron border col';
                    //newDiv.style = 'width:100%; height:100%';

                    newDiv.innerHTML = `
                                        <button type="button" class="close text-white" aria-label="Close" onclick='deleteJumbotron()'>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <h1 class="border-bottom">${playerInfo.name}</h1>                                     
                                        <p class="lead"> Position: ${playerInfo.position} </p> 
                                        <p class="lead"> Height: ${playerInfo.height} </p> 
                                        <p class="lead"> Weight: ${playerInfo.weight} </p>
                                        <p class="lead"> Date Of Birth: ${playerInfo.dateOfBirth} </p> 
                                        <p class="lead"> Birthplace: ${playerInfo.birthplace} </p>
                                        
                    `;                
                    
                    // add jumbotron before first row
                    //playersDiv.insertBefore(newDiv, firstRow.parentElement);
                    //console.log(playersDiv);

                    // add jumbotron after referenceRow

                    //playersDiv.insertBefore(newDiv, referenceRow.parentElement.nextElementSibling);
                    referenceRow.parentElement.insertBefore(newDiv, referenceRow.nextElementSibling);
                    
                });
                
            })
            .catch((err) => {
                console.log(err);
            });
        } // end else

        
    }
}

// End on players.html

// On formation.html

var availablePositions = ['GK', 'DR', 'DCR', 'DCL', 'DL', 'MCR', 'MCL', 'MC', 'AML', 'AMR', 'ST', 'MR', 'ML', 'STR', 'STL'];
var dictionary = {};

// Show players
showPlayers = () => {
    Object.keys(dictionary).forEach(key => {
        // get element
        document.getElementById(key).innerText = dictionary[key];
    });
}

// Select player
selectPlayer = (event, id) => {
    console.log("selectPlayer()");
    console.log(event.target.innerText);
    console.log('selectPlayer() --> ID: '+id.id); // div element with position or picked player name
    
    Object.keys(dictionary).forEach((key) => {
        console.log("key: "+key);
        if(dictionary[key] === key){
            if(!Object.values(dictionary).includes(event.target.innerText)) {
                //console.log('1');
                dictionary[key] = event.target.innerText;
                event.target.className = 'list-group-item list-group-item-action list-group-item-dark text-primary bg-dark font-weight-bold border border-primary disabled';
                //showPlayers();
            }            
        }
        else if(dictionary[id.id] === event.target.innerText) { // remove selected player on conditon: Willian === Willian
            //console.log('2');
            delete dictionary[id.id];
            //console.log("document.getElementById(key).innerHTML"+document.getElementById(key).innerHTML);
            document.getElementById(id.id).innerHTML = id.id;
            event.target.className = 'list-group-item list-group-item-action list-group-item-dark text-white font-weight-bold border border-primary';
            
            //showPlayers();
    
        }
        
        showPlayers();
    })

   

    console.log(dictionary);

}

// Create list of players and add them to parent element 
createListOfPlayers = (parent, playersArray, positionPlayerElement) => {        
    let list = `<ul class="list-group  rounded">`;
    //console.log("createListOfPlayers()\ninner text: "+positionPlayerElement.innerText);
    //console.log("positionPlayerElement ID: "+positionPlayerElement.getAttribute('id'));
    let positionID = positionPlayerElement.getAttribute('id');
    //console.log("createListOfPlayers(): ----> ID: "+positionID);
    let onClickArg = 'selectPlayer(event,'+positionID+')';

    // If we click on MC, and then MCL we want to remove dictionary[MC] = MC
    Object.keys(dictionary).forEach(key => {
        if(dictionary[key] === key) {
            delete dictionary[key];
        }    
    });

    // dictionary[AML] = "AML";
    /*
        if(availablePositions.includes(positionPlayerElement.getAttribute('id'))) {
        dictionary[positionPlayerElement.getAttribute('id')] = positionPlayerElement.getAttribute('id');
    }
    */
    if(availablePositions.includes(positionPlayerElement.innerText)) {
        dictionary[positionPlayerElement.innerText] = positionPlayerElement.innerText;
    }

    playersArray.forEach(player => {
        if(Object.values(dictionary).includes(player.name)) {
            list += `<a class="list-group-item list-group-item-action list-group-item-dark text-primary bg-dark font-weight-bold border border-primary disabled" onclick='${onClickArg}'>${player.name}</a>`;
        }
        else {    
            list += `<a class="list-group-item list-group-item-action list-group-item-dark text-white font-weight-bold border border-primary" onclick='${onClickArg}'>${player.name}</a>`;
        }
    });

    list += `</ul>`;

    parent.innerHTML = list;
}


// Pick a player for starting 11 - FW, MF, DF, GK

pickForward = (e) => {
    //console.log(e.target);
    if(e.target.className.includes('fw')) {
        //console.log(`fws: ${fws}`);

        fetch('http://localhost:3000/api/players/forwards')
        .then((response) => {
            response.json()
            .then((players) => {
                console.log(players);
                //console.log(players[0].name);                
                // e.target.nextElementSibling.innerText = players[0].name;

                const selectionCol = document.getElementsByClassName('selection-col')[0];
                
                createListOfPlayers(selectionCol, players, e.target.nextElementSibling);                
            });
            
        })
        .catch((err) => {
            console.log(err);
        });

    }
}

pickMidfielder = (e) => {
    //console.log(e.target);
    if(e.target.className.includes('mf')) {

        fetch('http://localhost:3000/api/players/midfielders')
        .then((response) => {
            response.json()
            .then((players) => {
                //console.log(players);
                const selectionCol = document.getElementsByClassName('selection-col')[0];

                createListOfPlayers(selectionCol, players, e.target.nextElementSibling);
            });
            
        })
        .catch((err) => {
            console.log(err);
        });

    }
}

pickDefender = (e) => {
    //console.log(e.target);
    if(e.target.className.includes('df')) {
        fetch('http://localhost:3000/api/players/defenders')
        .then((response) => {
            response.json()
            .then((players) => {
                //console.log(players);
                const selectionCol = document.getElementsByClassName('selection-col')[0];
                createListOfPlayers(selectionCol, players, e.target.nextElementSibling);
            });
            
        })
        .catch((err) => {
            console.log(err);
        });

    }
}

pickGoalkeeper = (e) => {
    //console.log(e.target);
    if(e.target.className.includes('gk')) {
        fetch('http://localhost:3000/api/players/goalkeepers')
        .then((response) => {
            response.json()
            .then((players) => {
                //console.log(players);
                //console.log(players[0].name);
                //e.target.nextElementSibling.innerText = players[0].name;

                const selectionCol = document.getElementsByClassName('selection-col')[0];
                // TODO: Dodati kao argument i target element - (span aml)
                // prosledim element u createlistofplayers, pa onda i kao arg za a onclick funkciju f(target)
                createListOfPlayers(selectionCol, players, e.target.nextElementSibling);

            });
            
        })
        .catch((err) => {
            console.log(err);
        });

    }
}

// Render formations
/*
fourThreeThree = () => {
    let FW = document.getElementsByClassName('forwards')[0];
    let MF = document.getElementsByClassName('midfielders')[0];
    let DF = document.getElementsByClassName('defenders')[0];
    let GK = document.getElementsByClassName('goalkeeper')[0];

    FW.innerHTML = '';
    MF.innerHTML = '';
    DF.innerHTML = '';
    GK.innerHTML = '';

    let img;
    let pos;
    let gk;
    let df;
    let mf;
    let fw;

    // gk
    gk = document.createElement('div');
        gk.className = 'col-sm-12  player-in-formation';
            img = document.createElement('img');
            img.src = './img/kits/chelsea_22.png';
            img.className = 'img-kit gk';
            img.addEventListener('click', pickGoalkeeper);
            pos = document.createElement('div');
            pos.id = 'GK';
            pos.className = 'text-white position-or-picked-player';
            pos.innerHTML = 'GK';
        gk.appendChild(img);
        gk.appendChild(pos);
    GK.appendChild(gk);

    // df
    df = document.createElement('div');
        df.className = 'col-sm-3  player-in-formation';
            img = document.createElement('img');
            img.src = './img/kits/chelsea.png';
            img.className = 'img-kit df';
            img.addEventListener('click', pickDefender);
            pos = document.createElement('div');
            pos.id = 'DL';
            pos.className = 'text-white position-or-picked-player';
            pos.innerHTML = 'DL';
        df.appendChild(img);
        df.appendChild(pos);
    DF.appendChild(df);

    df = document.createElement('div');
        df.className = 'col-sm-3  player-in-formation';
            img = document.createElement('img');
            img.src = './img/kits/chelsea.png';
            img.className = 'img-kit df';
            img.addEventListener('click', pickDefender);
            pos = document.createElement('div');
            pos.id = 'DCL';
            pos.className = 'text-white position-or-picked-player';
            pos.innerHTML = 'DCL';
        df.appendChild(img);
        df.appendChild(pos);
    DF.appendChild(df);

    df = document.createElement('div');
        df.className = 'col-sm-3  player-in-formation';
            img = document.createElement('img');
            img.src = './img/kits/chelsea.png';
            img.className = 'img-kit df';
            img.addEventListener('click', pickDefender);
            pos = document.createElement('div');
            pos.id = 'DCR';
            pos.className = 'text-white position-or-picked-player';
            pos.innerHTML = 'DCR';
        df.appendChild(img);
        df.appendChild(pos);
    DF.appendChild(df);

    df = document.createElement('div');
        df.className = 'col-sm-3  player-in-formation';
            img = document.createElement('img');
            img.src = './img/kits/chelsea.png';
            img.className = 'img-kit df';
            img.addEventListener('click', pickDefender);
            pos = document.createElement('div');
            pos.id = 'DR';
            pos.className = 'text-white position-or-picked-player';
            pos.innerHTML = 'DR';
        df.appendChild(img);
        df.appendChild(pos);
    DF.appendChild(df);
}

*/


// End render formations


Array.from(document.getElementsByClassName('fw')).forEach((elem) => {
    //console.log(elem);
    elem.addEventListener('click', pickForward);
});
Array.from(document.getElementsByClassName('mf')).forEach((elem) => {
    //console.log(elem);
    elem.addEventListener('click', pickMidfielder);
});
Array.from(document.getElementsByClassName('df')).forEach((elem) => {
    //console.log(elem);
    elem.addEventListener('click', pickDefender);
});
Array.from(document.getElementsByClassName('gk')).forEach((elem) => {
    //console.log(elem);
    elem.addEventListener('click', pickGoalkeeper);
});




// End on formation.html


// On index.html 

const TypeWriter = require('./typewriter');

// Init On DOM Load on index.html
if(location.href.split("/").slice(-1)[0] === "index.html" || location.href.split("/").slice(-1)[0] === "index.html#") {
    document.addEventListener('DOMContentLoaded', TypeWriter.init);
}

// End on index.html 
