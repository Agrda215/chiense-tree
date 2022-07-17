addLayer("chi1", {
    name: "U+4E00", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "&#x4E00;", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#333333",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "U+4E00 points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
       // First Layer Boosts
        if(hasUpgrade("chi1", 13)) mult = mult.times(upgradeEffect("chi1", 13))
        if(hasUpgrade("chi1", 14)) mult = mult.times(upgradeEffect("chi1", 14))
        if(hasUpgrade("chi1", 35)) mult = mult.times(upgradeEffect("chi1", 35))
      // Second Layer Boosts
        if(hasUpgrade("chi2", 13)) mult = mult.times(75)
        if(hasUpgrade("chi2", 14)) mult = mult.times(1e4)
        if(hasUpgrade("chi2", 15)) mult = mult.times(Math.PI * 2)
        // Second Layer Milsetones Boosts
        if(hasMilestone("chi2", 0)) mult = mult.times(69420)
        // Third Layer Boosts
        mult = mult.times(player.chi3.BrickClicker.trans)
         // Goal Boosts
        if(hasAchievement("g", 15)) mult = mult.times(1.8)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        //U+4E01 LAYER POWER BOOSTS
        if(hasUpgrade("chi2", 21)) exp = exp.add(0.05)
        //U+4E02 LAYER POWER BOOSTS
        if(hasUpgrade("chi3", 12)) exp = exp.add(0.2)
        return exp
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    automate() {
      // Upgrades
      if (hasMilestone("chi2", 2)) {
        buyUpgrade(this.layer, 11)
        buyUpgrade(this.layer, 12)
        buyUpgrade(this.layer, 13)
        buyUpgrade(this.layer, 14)
        buyUpgrade(this.layer, 15)
        buyUpgrade(this.layer, 21)
        buyUpgrade(this.layer, 22)
        buyUpgrade(this.layer, 23)
        buyUpgrade(this.layer, 24)
        buyUpgrade(this.layer, 25)
        buyUpgrade(this.layer, 31)
        buyUpgrade(this.layer, 32)
        buyUpgrade(this.layer, 33)
        buyUpgrade(this.layer, 34)
        buyUpgrade(this.layer, 35)
      }
      
      // Buyables
      if(hasMilestone("chi2", 1)) {
        buyBuyable(this.layer, 11)
      }
    },
    upgrades:{
      11:{
        title:"Double gain.",
        description:"Double your point gain.",
        cost:new Decimal(1),
        effect() {
        return new Decimal(2)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      12:{
        title:"Point booster",
        description:"Get Boost For U+4E00 points, aleadry for \u221A\u4E00P.",
        cost:new Decimal(5),
        effect() {
        return player.chi1.points.sqrt()
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      13:{
        title:"Idler",
        description:"Getting idler a x2 U+4E00 Point gain.",
        cost:new Decimal(35),
        effect() {
        return new Decimal(2)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      14:{
        title:"Point booster",
        description:"The pi gain.",
        cost:new Decimal(75),
        effect() {
        return new Decimal(Math.PI)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      15:{
        title:"x4 U+4E00 Gain",
        description:"The first layer goes balance.",
        cost:new Decimal(175),
        effect() {
        return new Decimal(4)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      21:{
        title:"Point booster",
        description:"The pi gain.",
        cost:new Decimal(5e3),
        effect() {
        return new Decimal(Math.PI)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      22:{
        title:"Point booster",
        description:"The first layer goes balance.",
        cost:new Decimal(1e4),
        effect() {
        return player.chi1.points.pow(3).log(1.15)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      23:{
        title:"Eulers Number^4",
        description:"The first layer goes balance.",
        cost:new Decimal(7.5e5),
        effect() {
        return new Decimal(Math.E).pow(4)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      24:{
        title:"Effect Mulitipler",
        description:"The first layer goes balance.",
        cost:new Decimal(5e6),
        unlocked() {return hasAchievement("g", 21)},
        effect() {
        return new Decimal(Math.PI).mul(player.points.add(2).log2())
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      25:{
        title:"Whoah gain",
        description:"The first layer goes balance.",
        cost:new Decimal(1e8),
        unlocked() {return hasAchievement("g", 21)},
        effect() {
        return new Decimal(404)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      31:{
        title:"Double gain",
        description:"get double gain.",
        cost:new Decimal(1e22),
        unlocked() {return hasUpgrade("chi2", 15)},
        effect() {
        return new Decimal(2)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      32:{
        title:"Second layer boost",
        description:"get gain boost.",
        cost:new Decimal(1e24),
        unlocked() {return hasUpgrade("chi2", 15)},
        effect() {
        return player.chi1.points.add(2).log2()
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      33:{
        title:"x10 gain",
        description:"get x10 gain.",
        cost:new Decimal(1e27),
        unlocked() {return hasUpgrade("chi2", 15)},
        effect() {
        return new Decimal(10)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      34:{
        title:"Second layer boost",
        description:"get gain boost.",
        cost:new Decimal(1e35),
        unlocked() {return hasUpgrade("chi2", 15)},
        effect() {
        return new Decimal(2)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
      35:{
        title:"First layer boost",
        description:"get gain boost.",
        cost:new Decimal(4.04e41),
        unlocked() {return hasUpgrade("chi2", 15)},
        effect() {
        return new Decimal(12345)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
      },
    },
    challenges: {
    11: {
        name: "Triple gain",
        challengeDescription: "use triple gain.",
        unlocked() { return hasMilestone("g", 0) },
        canComplete: function() {return player.points.gte(1e4)},
        goalDescription:"Have 10,000 Points.",
        completionLimit:1
    },
    12: {
        name: "x10 gain",
        challengeDescription: "use x10 gain.",
        unlocked() { return hasMilestone("g", 0) },
        canComplete: function() {return player.points.gte(1e9)},
        goalDescription:"Have 1e9 Points.",
        completionLimit:1
    },
    13: {
        name: "x10 gain",
        challengeDescription: "use x10 gain.",
        unlocked() { return hasMilestone("g", 0) },
        canComplete: function() {return player.points.gte(1e40)},
        goalDescription:"Have 1e40 Points.",
        completionLimit:1
    },
},
  buyables: {
    11: {
        cost(x) { return new Decimal.pow(4, x).mul(1e10) },
        display() { return "<h2>Point Buyable</h2>" },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        unlocked(){return hasMilestone("g", 1)},
        buy() {
            player[this.layer].points = player[this.layer].points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
      effect(x) {
        let l = new Decimal.pow(2.35, x)
        return l
      }
    },
},
  passiveGeneration() {
        passivebase = 0
        if (hasMilestone("chi2",2)) passivebase += 1
        return passivebase
    }
})

addLayer("chi2", {
    name: "U+4E01", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "&#x4E01;", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    branches: ["chi1"],
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        Math:{
          inserted:0,
          a:8,
          b:8,
          i:16,
        }
    }},
    color: "#AA00FF",
    requires: new Decimal(1e11), // Can be a function that takes requirement increases into account
    resource: "U+4E01 points", // Name of prestige currency
    baseResource: "U+4E00 points", // Name of resource prestige is based on
    baseAmount() {return player.chi1.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.06, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
      // Previous Layer Boosts
        if(hasUpgrade("chi1", 32)) mult = mult.times(upgradeEffect("chi1", 32))
        if(hasUpgrade("chi1", 34)) mult = mult.times(upgradeEffect("chi1", 34))
      // Third Layer Boosts
         if(hasUpgrade("chi3", 11)) mult = mult.times(256)
         if(hasUpgrade("chi3", 12)) mult = mult.times(512)
         if(hasMilestone("chi3", 0)) mult = mult.times(Math.PI)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player.chi1.points.gte(1e10) || player.chi2.best.gt(0)},
    tabFormat: {
      "Milestones": {
        content: [
          "main-display",
          "prestige-button",
          "blank",
          "milestones"
        ],
    },
    "Upgrades": {
        content: [
          "main-display",
          "prestige-button",
          "blank",
          "upgrades"
        ],
    },
      "Math": {
        content: [
          "main-display",
          "prestige-button",
          "blank",
          ["display-text",
        function() { return 'Button Inserted ' + player.chi2.Math.inserted + " Times!" },
        { "color": "yellow", "font-size": "29px", "font-family": "Consolas" }],
          ["display-text",
        function() { return player.chi2.Math.a + " + " + player.chi2.Math.b },
        { "color": "yellow", "font-size": "29px", "font-family": "Consolas" }],
          ["display-text",
        function() { return '<input id="math" type="number">' },
        { "color": "yellow", "font-size": "29px", "font-family": "Consolas" }],
          "clickables"
        ],
        unlocked() {return hasUpgrade("chi2", 22)}
    },
},
  upgrades:{
    11:{
      title:"Triple gain",
      description:"Triple your point gain.",
      cost:new Decimal(1)
    },
    12:{
      title:"Sqrt(U+4E02 + 1) gain",
      description:"when possible wow.",
      cost:new Decimal(1),
      unlocked() {return hasUpgrade("chi2", 11)}
    },
    13:{
      title:"x75 gain.",
      description:"go happend.",
      cost:new Decimal(2),
      unlocked() {return hasUpgrade("chi2", 12)}
    },
    14:{
      title:"x10000 gain.",
      description:"go go fast.",
      cost:new Decimal(10),
      unlocked() {return hasUpgrade("chi2", 13)}
    },
    15:{
      title:"First Layer Boost",
      description:" U+4E00 Mulitipler increaser by &tau; and unlock new row for U+4E00 Upgrades.",
      cost:new Decimal(25),
      unlocked() {return hasUpgrade("chi2", 14)}
    },
    21:{
      title:"Exponent for U+4E00",
      description:"EXPONENT BY 0.05",
      cost:new Decimal(5e3),
      unlocked() {return hasUpgrade("chi2", 15) && hasMilestone("chi2", 0)}
    },
    22:{
      title:"Something new?",
      description:"unlock new tab.",
      cost:new Decimal(1e5),
      unlocked() {return hasUpgrade("chi2", 21) && hasMilestone("chi2", 0)}
    },
    23:{
      title:"Million gain",
      description:"whhaat",
      cost:new Decimal(7.5e5),
      unlocked() {return hasUpgrade("chi2", 22) && hasMilestone("chi2", 0)}
    },
    24:{
      title:"^2 gain",
      description:"whhaat up break",
      cost:new Decimal(2e6),
      unlocked() {return hasUpgrade("chi2", 23) && hasMilestone("chi2", 0)}
    },
    25:{
      title:"Base 3",
      description:"unlock new layer.",
      cost:new Decimal(1e18),
      unlocked() {return hasUpgrade("chi2", 23) && hasMilestone("chi2", 0)}
    },
  },
  milestones: {
    0: {
        requirementDescription: "4,000 U+4E01 (QoL I)",
        effectDescription: "U+4E00 Increaser by 69,420 and unlock new upgrades.",
        done() { return player.chi2.points.gte(4e3) }
    },
    1: {
        requirementDescription: "1,000,000 U+4E01 (Auto I)",
        effectDescription: "Autobuy Point Buyable",
        done() { return player.chi2.points.gte(1e6) }
    },
    2: {
        requirementDescription: "1e20 U+4E01 (Auto II)",
        effectDescription: "Autobuy Upgrade or Gain of U+4E00.",
        done() { return player.chi2.points.gte(1e20) }
    },
},
  clickables: {
    11: {
        display() {return "<h3>Insert</h3>"},
        unlocked() {return hasUpgrade("chi2", 22)},
        canClick() {return hasUpgrade("chi2", 22)},
        onClick() {
          if (document.getElementById("math").value >= (player.chi2.Math.a + player.chi2.Math.b)) {
            player.chi2.Math.inserted += 1
            player.chi2.Math.a += 1
            player.chi2.Math.b += 1
            player.chi2.Math.i = (player.chi2.Math.a + player.chi2.Math.b)
          } else {
            alert("Whoah is than " + player.chi2.Math.i)
          }
        }
    }
}
})

addLayer("chi3", {
    name: "U+4E02", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "&#x4E02;", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    branches: ["chi2"],
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
      BrickClicker:{
        trans:new Decimal(1),
        bricks:new Decimal(0),
        bps:new Decimal(0),
        bpc:new Decimal(1),
      }
    }},
    color: "#0000FF",
    requires: new Decimal(1e20), // Can be a function that takes requirement increases into account
    resource: "U+4E02 points", // Name of prestige currency
    baseResource: "U+4E01 points", // Name of resource prestige is based on
    baseAmount() {return player.chi2.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.035, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
         // Your Milestone Boosts
         if(hasMilestone("chi3", 1)) mult = mult.times(Math.PI)
        // Goal Boosts
        if(hasAchievement("g", 54)) mult = mult.times(1.2)
        if(hasAchievement("g", 71)) mult = mult.times(1.4)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("chi2", 25) || player.chi3.best.gt(0)},
  tabFormat: {
    "Milestones": {
        content: [
          "main-display",
          "prestige-button",
          "milestones"
        ],
    },
    "Main": {
        content: [
          "main-display",
          "prestige-button",
          "upgrades"
        ],
    },
    "Brick Clicker": {
        content: [
          "main-display",
          "prestige-button",
          ["display-text",
        function() { return 'You Have ' + player.chi3.BrickClicker.bricks + " Bricks, translated to a " + player.chi3.BrickClicker.trans + " for U+4E00" },
        { "color": "yellow", "font-size": "29px", "font-family": "Consolas" }],
          "clickables",
          "buyables"
        ],
    },
},
  automate() {
    player.chi3.BrickClicker.bricks = player.chi3.BrickClicker.bricks.add(player.chi3.BrickClicker.bps)
    player.chi3.BrickClicker.trans = player.chi3.BrickClicker.bricks.pow(1.5).add(1)
  },
    upgrades:{
      11:{
        title:"Boosted?",
        description:"256x Boost for Secondary Layer.",
        cost:new Decimal(1)
      },
      12:{
        title:"Gain exponent?",
        description:"U+4E00 exponent by 0.2.",
        cost:new Decimal(2)
      },
      13:{
        title:"Boosted?",
        description:"512x Boost for Secondary Layer.",
        cost:new Decimal(5)
      },
    },
  milestones: {
    0: {
        requirementDescription: "20 U+4E02 (QoL II and Unlock I)",
        effectDescription: "Multipler U+4E01 Increaser by &pi; and Unlock new tab.",
        done() { return player.chi3.points.gte(20) }
    },
    1: {
        requirementDescription: "1,000 U+4E02 (QoL III)",
        effectDescription: "Multipler U+4E02 Increaser by &pi;",
        done() { return player.chi3.points.gte(1e3) }
    },
},
  clickables: {
    11: {
        display() {return "<h3>Click Me!</h3>"},
        canClick() {return true},
        onClick() {
          player.chi3.BrickClicker.bricks = player.chi3.BrickClicker.bricks.add(player.chi3.BrickClicker.bpc)
        }
    }
},
  buyables: {
    11: {
        cost(x) { return new Decimal.pow(1.15).mul(15) },
        display() { return "Enza" },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            player[this.layer].points = player[this.layer].points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            player.chi3.BrickClicker.bps = player.chi3.BrickClicker.bps.add(0.5)
        },
    },
    12: {
        cost(x) { return new Decimal.pow(1.15).mul(90) },
        display() { return "Gouta" },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            player[this.layer].points = player[this.layer].points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            player.chi3.BrickClicker.bps = player.chi3.BrickClicker.bps.add(4)
        },
    },
    13: {
        cost(x) { return new Decimal.pow(1.15).mul(350) },
        display() { return "Xunza Effiza" },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            player[this.layer].points = player[this.layer].points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            player.chi3.BrickClicker.bps = player.chi3.BrickClicker.bps.add(9)
        },
    },
    14: {
        cost(x) { return new Decimal.pow(1.15).mul(5000) },
        display() { return "Hinaz" },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            player[this.layer].points = player[this.layer].points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            player.chi3.BrickClicker.bps = player.chi3.BrickClicker.bps.add(40)
        },
    },
}
})

addLayer("g", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "green",
    resource: "Goal", 
    row: "side",
    achievements: {
        11: {
            name: "Start the game",
            done() {return player.chi1.points.gte("1")},
            goalTooltip: "Uhm, I think you should do something...",
            doneTooltip: "You started the game!",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        12: {
            name: "Nice",
            done() {return player.chi1.points.gte("24")},
            goalTooltip: "Reach 24 U+4E00 Points.",
            doneTooltip: "Reach 24 U+4E00 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        13: {
            name: "Hundred",
            done() {return player.chi1.points.gte("100")},
            goalTooltip: "Reach 100 U+4E00 Points.",
            doneTooltip: "Reach 100 U+4E00 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      14: {
            name: "1 Row Done?",
            done() {return hasUpgrade("chi1", 15)},
            goalTooltip: "Reach 5 upgrade on total layers.",
            doneTooltip: "Reach 5 upgrade on total layers. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      15: {
            name: "Descriptious",
            done() {return player.chi1.points.gte("1e4")},
            goalTooltip: "Reach 10,000 U+4E00 Points. Reward: Gain 80% U+4E00 Gain.",
            doneTooltip: "Reach 10,000 U+4E00 Points. Reward: Gain 80% U+4E00 Gain. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      21: {
            name: "Uped!",
            done() {return upgradeEffect("chi1", 12).gte(2048)},
            goalTooltip: "Point Booster? goes up to 2048. Reward: Unlock more upgrades",
            doneTooltip: "Point Booster? goes up to 2048. Reward: Unlock more upgrades (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      22: {
            name: "Million",
            done() {return player.chi1.points.gte("1e6")},
            goalTooltip: "Reach 1,000,000 U+4E00 Points.",
            doneTooltip: "Reach 1,000,000 U+4E00 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      23: {
            name: "2 Rows Done?",
            done() {return hasUpgrade("chi1", 25)},
            goalTooltip: "Reach 10 upgrade on total layers.",
            doneTooltip: "Reach 10 upgrade on total layers. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      24: {
            name: "Dialogue U+4E00 = Professional Idle???",
            done() {return player.chi1.points.gte("1e10")},
            goalTooltip: "Reach 1e10 U+4E00 Points.",
            doneTooltip: "Reach 1e10 U+4E00 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      25: {
            name: "Professional Billion",
            done() {return player.chi1.points.gte("1e11")},
            goalTooltip: "Reach 1e11 U+4E00 Points.",
            doneTooltip: "Reach 1e11 U+4E00 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      31: {
            name: "Second Layer?",
            done() {return player.chi2.points.gte("1")},
            goalTooltip: "Reach 1 U+4E01 Points.",
            doneTooltip: "Reach 1 U+4E01 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      32: {
            name: "Fourth 2nd Layer",
            done() {return player.chi2.points.gte("4")},
            goalTooltip: "Reach 4 U+4E01 Points.",
            doneTooltip: "Reach 4 U+4E01 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      33: {
            name: "Happend 2nd Layer",
            done() {return player.chi2.points.gte("15")},
            goalTooltip: "Reach 15 U+4E01 Points.",
            doneTooltip: "Reach 15 U+4E01 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
       34: {
            name: "3 Rows Done?",
            done() {return hasUpgrade("chi2", 15)},
            goalTooltip: "Reach 15 upgrades on total layers.",
            doneTooltip: "Reach 15 upgrades on total layers. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      35: {
            name: "First Illion 2nd Layer",
            done() {return player.chi2.points.gte("1000")},
            goalTooltip: "Reach 1,000 U+4E01 Points.",
            doneTooltip: "Reach 1,000 U+4E01 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      41: {
            name: "Upded Row 2nd Layer",
            done() {return player.chi2.points.gte("2048")},
            goalTooltip: "Reach 2,048 U+4E01 Points.",
            doneTooltip: "Reach 2,048 U+4E01 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      42: {
            name: "That's Lotta Damage!",
            done() {return player.chi2.points.gte("1e5") && buyableEffect("chi1", 11).gte(1e21)},
            goalTooltip: "Reach 100,000 U+4E01 Points and Point Buyable goes up to sextillion.",
            doneTooltip: "Reach 100,000 U+4E01 Points and Point Buyable goes up to sextillion. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      43: {
            name: "Lemon Damage",
            done() {return player.chi2.points.gte("1e7")},
            goalTooltip: "Reach 10,000,000 U+4E01 Points.",
            doneTooltip: "Reach 10,000,000 U+4E01 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      44: {
            name: "That Math is Up!",
            done() {return player.chi2.Math.inserted > 99},
            goalTooltip: "Reach 100 Insert Times.",
            doneTooltip: "Reach 100 Insert Times. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      45: {
            name: "Dialogue U+4E01???",
            done() {return player.chi2.points.gte("1e10")},
            goalTooltip: "Reach 1e10 U+4E01 Points.",
            doneTooltip: "Reach 1e10 U+4E01 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      51: {
            name: "Googol U+4E00 = Professional Exponential Idle???",
            done() {return player.chi1.points.gte("1e100")},
            goalTooltip: "Reach 1e100 U+4E00 Points.",
            doneTooltip: "Reach 1e100 U+4E00 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      52: {
            name: "Ouch",
            done() {return document.getElementById("math").value >= 1000},
            goalTooltip: "Reach 1000 The Value.",
            doneTooltip: "Reach 1000 The Value. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      53: {
            name: "Dialogue Squared U+4E01???",
            done() {return player.chi2.points.gte("1e10")},
            goalTooltip: "Reach 1e20 U+4E01 Points.",
            doneTooltip: "Reach 1e20 U+4E01 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      54: {
            name: "To The Infinity Points on First Layer?",
            done() {return player.chi1.points.gte("1.8e308")},
            goalTooltip: "Reach 1.8e308 U+4E00 Points. Reward:Gain 20% for Third Layer.",
            doneTooltip: "Reach 1.8e308 U+4E00 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      55: {
            name: "Another new layer.",
            done() {return player.chi3.points.gte("1")},
            goalTooltip: "Reach 1 U+4E02 Points. Reward:Gain 20% for Third Layer.",
            doneTooltip: "Reach 1 U+4E02 Points. Reward:Gain 20% for Third Layer. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      61: {
            name: "Foward",
            done() {return player.chi3.points.gte("3")},
            goalTooltip: "Reach 3 U+4E02 Points.",
            doneTooltip: "Reach 3 U+4E02 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      62: {
            name: "TWO THOUSAND",
            done() {return document.getElementById("math").value >= 2000},
            goalTooltip: "Reach 2000 The Value.",
            doneTooltip: "Reach 2000 The Value. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      63: {
            name: "YEAR",
            done() {return document.getElementById("math").value >= 2022},
            goalTooltip: "Reach 2022 The Value.",
            doneTooltip: "Reach 2022 The Value. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      64: {
            name: "Ten Undescriptious",
            done() {return player.chi3.points.gte("10")},
            goalTooltip: "Reach 10 U+4E02 Points.",
            doneTooltip: "Reach 10 U+4E02 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      65: {
            name: "Bricc Clicker",
            done() {return player.chi3.BrickClicker.bricks.gte("1")},
            goalTooltip: "Reach 1 Brick.",
            doneTooltip: "Reach 1 Brick. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      71: {
            name: "That Overpower!",
            done() {return player.chi3.BrickClicker.bricks.gte("1e4")},
            goalTooltip: "Reach 10,000 Bricks. Reward:Gain 40% of U+4E02 Points.",
            doneTooltip: "Reach 10,000 Bricks. Reward:Gain 40% of U+4E02 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
      72: {
            name: "Googolchime U+4E00 = Super Professional Exponential Idle???",
            done() {return player.chi1.points.gte("1e1000")},
            goalTooltip: "Reach 1e1,000 U+4E00 Points.",
            doneTooltip: "Reach 1e1,000 U+4E00 Points. (Completed)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
    },
  milestones: {
    0: {
        requirementDescription: "4 goals",
        effectDescription: "Unlock 3 challenges.",
        done() { return player.g.points.gte(4) },
    },
    1: {
        requirementDescription: "9 goals",
        effectDescription: "Unlock new buyable.",
        done() { return player.g.points.gte(9) },
        unlocked() {return hasMilestone("g", 0)}
    },
    2: {
        requirementDescription: "10 goals",
        effectDescription: "unlock new layer.",
        done() { return player.g.points.gte(10) },
        unlocked() {return hasMilestone("g", 1)}
    },
    3: {
        requirementDescription: "31 goals",
        effectDescription: "unlock new side",
        done() { return player.g.points.gte(31) },
        unlocked() {return hasMilestone("g", 2)}
    },
}
},
)

addLayer("w", {
    startData() { return {
        unlocked: true,
        points: new Decimal(1),
        translated:new Decimal(1)
    }},
    color: "blue",
    resource: "Watter", 
    symbol: "W",
    row: "side",
    layerShown(){return hasMilestone("g", 3)},
   tabFormat: [
    "main-display",
    "blank",
    ["display-text",
        function() { return 'Water (Min:1, Max:36)' },
        { "color": "red", "font-size": "32px", "font-family": "Comic Sans MS" }],
     ["display-text",
        function() { return '<input id="collect" min="1" max="36" type="number">' },
        { "color": "red", "font-size": "32px", "font-family": "Comic Sans MS" }],
    "blank",
    "clickables",
    "blank",
    "upgrades"
],
  clickables: {
    11: {
        display() {return "<h3>Collect!</h3>"},
        canClick() {return true},
        onClick() {
          player.w.points = player.w.points.add(new Decimal(document.getElementById("collect").value))
        }
    }
},
  automate() {
    player.w.translated = player.w.points.sqrt()
  }
}
)
