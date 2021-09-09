

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//console.log(enemyName, enemyAttack, enemyHealth);

var fight = function() {
    //Alert players that they are starting the roung
    window.alert("Welcome to Robot Gladiators!");

    //
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //If player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
    

        //Check enemy's health
        if enemyHealth <=0 {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
        }
        
        //Remove player's health by subtracting the amount set in enemyAttack
        playerHealth = playerHealth - enemyAttack;
        console.log (enemyName + " attacked " + playerName + ". " + playerName + "now has " + playerHealth + " left.")

        //Check player's health
        if playerHealth <=0 {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " left.");
        }

        //Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        )

        //Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        //Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )

        //Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }


        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        //Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        //If Player Chooses to Skip
    }   else if (promptFight === "skip" || promptFight === "SKIP") {
            //Confirm the player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");

            //If true, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //And subtract money from playerMoney for skipping
                playerMoney = playerMoney -2;
            }
            //If false, ask question again by re-running fight()
            else {
                fight();
            }
        } 
        window.alert(playerName + " has chosen to skip the fight!");
        //If user enters an invalid option to the 'FIGHT or SKIP' question
    } else {
        window.alert("Please choose a valid option.");
    }
}
};

fight();


