const prompt = require("prompt-sync")();

const answer = prompt("Would you like to play (y/n)? ");

while(true) { 

    if(answer.toLowerCase() === "y") {
        const answer2 = prompt("Would you like to go left or go right (left/right)? ");
            if(answer2.toLowerCase() === "right" || answer2.toLowerCase() === "r") {   
                console.log("Nice! You go right and approach a bridge");
                const answer3 = prompt("Would you like to cross the bridge or turn around and find another way (cross/turn)? ");
                if(answer3.toLowerCase() === "cross" || answer3.toLowerCase() === "c") {
                    console.log("You've crossed the bridge and There is a galdiator wanting to fight.");
                    const answer4 = prompt("Will you fight back or run for your life? (fight/flight) ");
                    if(answer4.toLowerCase() === "fight" || answer4.toLowerCase() === "f") {
                        console.log("Great choice! Now time to pick a weapon!")
                        const answer5 = prompt("What weapon will you choose? (sword/bow) ");
                        if(answer5.toLowerCase() === "sword" || answer5.toLowerCase() === "s") {
                            console.log("Great choice! the sword had the power to defeat the gladiator!")
                            const answer6 = prompt("Oh no! You have awaken the Dragon but the sword is not powerful enough. Will you fight back or run for your life? (fight/flight)");
                            if(answer6.toLowerCase() === "flight" || answer6.toLowerCase() === "f") {
                                console.log("RUN ! Get out of here! Dip bro! Thats it! You won the game!")
                                break;
                            }else {
                                console.log("Its over bro how could you try to fight a dragon...")
                                break;
                            }
                        }else {
                            console.log("The bow is not powerful enough.. You lost.. sorry.")
                            break;
                        }
                    }else {
                        console.log("You tried to run and got caught.. try again");
                        continue;
                    }
                }else {
                    console.log("Oops, you missed a step.. try again.");
                    continue;
                }                   
            }else {
                console.log("Oops, you missed a step.. try again."); 
                continue; 
            }
    }else {
        console.log("Thats too bad!");
        break;
    }
}
console.log("This is the game. Thank you");