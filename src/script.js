"use strict";

// TODO - write your code here.

const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const chooseOption = (opt1, opt2) => {
  const randnum = Math.round(Math.random());
  return randnum === 0 ? opt1 : opt2;
};

const attackPlayer = (health) => {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(player + " health: " + health);
};

const logDeath = (winner, loser) => {
  console.log(winner + " defeated " + loser);
};

const isDead = (health) => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};

const fight = (player1, player2, player1Health, player2Health) => {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
};
fight("tyler", "Yulia", 200, 100);

const getGrade = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score <= 60) {
    return "F";
  }
};
console.log(getGrade(100));
console.log(getGrade(75));

const prioritize = (urgent, important) => {
  if (urgent === true && important === true) {
    return 1;
  } else if (urgent !== true && important === true) {
    return 2;
  } else if (urgent === true && important !== true) {
    return 3;
  } else {
    return 4;
  }
};

const calculatePay = (wage, hours) => {
  if (hours > 40) {
    return wage * 40 + wage * 1.5 * (hours - 40);
  } else {
    return wage * hours;
  }
};
console.log(calculatePay(10, 50));
