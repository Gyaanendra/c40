/*

1. read/ get the no. of players in the game --> getCount()
2. update the playerCount in the database --> updateCount(count)
3. update the name and distance of the player in the database --> update()
4. to store the information (name & distance) of all the players inside a variable called 'allPlayers'
*/

class Player{
    constructor(){
        //propoerties --> name, distance, index (p1,p2,p3,p4)
        this.name = null;
        this.distance = 0;
        this.index = null;
    };

    getCount(){
    //create a variable called 'playerCountRef' to refer to the database --> database.ref()
    var playerCountRef = database.ref('playerCount')

    //create a listener for the varible --> var.on("value", function)
    playerCountRef.on("value",(data)=>{

    //store the listened data inside the playerCount
    playerCount = data.val();
    })
    }

    updateCount(count){
    //refer to the entire database and update the playerCount entry to count
    database.ref('/').update({
        playerCount: count
    })
    }

    update(){
    var playerIndex = "players/player"+this.index;

    //refer to the database and update the name and distance for each player
    database.ref(playerIndex).set({
        name:this.name,
        distance: this.distance
    })
    }

   static getPlayerInfo(){
    //create a variable called 'playerInfoRef' to refer to the database --> database.ref()
    var playerInfoRef = database.ref('players')

    //create a listener for the varible --> var.on("value", function)
    playerInfoRef.on("value",(data)=>{

    //store the listened data inside the allPlayers
    allPlayers = data.val();
    })
    }
}



//sprites - bird.png --> "sprites/bird.png"
//in the db --> playerCount , gameState , players (holing more than one object)
/*
players --> 
player1 --> name: & distance:
player2--> 
*/

