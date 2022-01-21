function gameObject() {
    return {
        home : {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
             }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 24,
                    rebounds: 4,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }
    }
}

const homeTeam = gameObject().home


const awayTeam = gameObject().away


    

function players() {

    return Object.assign({}, homeTeam.players, awayTeam.players)
    
}

function numPointsScored(playerInput) {
//    for (const playerName in players()) {
//         if (playerName === playerInput) {
//              return players()[playerName].points
//             }
        //}
    //const playerArrays = Object.entries(players())
   // const player = playerArrays.find(playerArray => playerArray[0] === playerInput)
    return players()[playerInput].points
    // let points
    // playerArrays.forEach(playerArray => {
    //     console.log('player array 0', playerArray[0])
    //     if (playerArray[0] === playerInput) {
    //         points = playerArray[1].points 
    //     }
    // })
    //return points
    }
    
console.log('brook number of points', numPointsScored('Brook Lopez'))

function shoeSize(playerInput) {
    return players()[playerInput].shoe
}

console.log('brook shoe size', shoeSize('Brook Lopez'))

function teamColors(teamInput) {
    // if(teamInput === awayTeam.name) {
    //     return awayTeam.colors
    // }
    // else {
    //     return homeTeam.colors
    // }
    return awayTeam.teamName === teamInput ? awayTeam.colors : homeTeam.colors
     
}

console.log('hornets colors', teamColors('Charlotte Hornets'))

function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName]
}

console.log('teams list', teamNames())

function playerNumbers(teamName) {
    // return awayTeam.teamName === teamInput ? Object.values(awayTeam.number) : Object.values(homeTeam.number)
    // const awayNumbers = Object.values(awayTeam.number)
    // const homeNumbers = Object.values(homeTeam.number)
    // return awayTeam.teamName === teamInput ? awayNumbers : homeNumbers
    let players = selectTeam(teamName)
    console.log(players)
    let result = []
    for (const player in players) {
        result.push(players[player].number)
    }
    return result
}



console.log('hornets players numbers', playerNumbers('Charlotte Hornets'))

// helper functions

function selectTeam(teamName) {
    return homeTeam.teamName === teamName ? homeTeam.players : awayTeam.players
}

// function selectStats(stats) {
//     return 
// }


debugger


// NOTES
// 1. combine home and away objects
// 2. grab players stats

const homePlayers = gameObject().home.players

const awayPlayers = gameObject().away.players

const allPlayers = Object.assign(homePlayers, awayPlayers)


function playerStats(playerName) {
    //console.log("MY CODE IS HERE:", playerName)
    //gameObject().away.players["Ben Gordon"]

    return allPlayers[playerName]
    


//    return Object.values(playerName)

}

//console.log('ben gordon stats', playerStats('Ben Gordon'))


function bigShoeRebounds() {


// function shoeSizeObject() {
//     Object.assign({}, allPlayers.shoe)
// }

// function bigShoeRebounds() {
//     const found = allPlayers.find(shoe => math)
// }

let dummyPlayer = {shoe: 0, name: " ", rebounds: 0}





for(const player in allPlayers) {
    if (allPlayers[player].shoe > dummyPlayer.shoe) {
        dummyPlayer.shoe = allPlayers[player].shoe
        // console.log(player)
        dummyPlayer.name = player
        dummyPlayer.rebounds = allPlayers[player].rebounds
        }
    }

    return dummyPlayer.rebounds

    
}

console.log("rebounds of who has the biggest shoe", bigShoeRebounds())
