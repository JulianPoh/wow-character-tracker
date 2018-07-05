//RACES BY FACTIONS
const allianceRaces = ["Select Race", "Human", "Dwarf", "Night Elf", "Gnome", "Draenei", "Worgen", "Pandarian"];
const hordeRaces    = ["Select Race", "Orc", "Undead", "Blood Elf", "Goblin", "Troll", "Tauren", "Pandarian"];

//CLASS OPTIONS BY RACE
const humanClasses      = ["Select Class", "Warrior", "Hunter", "Paladin", "Rogue", "Priest", "Death Knight", "Mage", "Warlock", "Monk"];
const dwarfClasses      = ["Select Class", "Warrior", "Hunter", "Paladin", "Rogue", "Priest", "Death Knight", "Shaman", "Mage", "Warlock", "Monk"];
const nElfClasses       = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Death Knight", "Mage", "Monk", "Druid", "Demon Hunter"];
const gnomeClasses      = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Death Knight", "Mage", "Warlock", "Monk"];
const draeneiClasses    = ["Select Class", "Warrior", "Hunter", "Paladin", "Priest", "Death Knight", "Shaman", "Mage", "Monk"];
const worgenClasses     = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Death Knight", "Mage", "Warlock", "Druid"];
const orcClasses        = ["Select Class", "Warrior", "Hunter", "Rogue", "Death Knight", "Shaman", "Mage", "Warlock", "Monk"];
const undeadClasses     = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Death Knight", "Mage", "Warlock", "Monk"];
const bElfClasses       = ["Select Class", "Warrior", "Hunter", "Paladin", "Rogue", "Priest", "Death Knight", "Mage", "Warlock", "Monk", "Demon Hunter"];
const goblinClasses     = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Death Knight", "Shaman", "Mage", "Warlock"];
const trollClasses      = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Death Knight", "Shaman", "Mage", "Warlock", "Monk", "Druid"];
const taurenClasses     = ["Select Class", "Warrior", "Hunter", "Paladin", "Priest", "Death Knight", "Shaman", "Monk", "Druid"];
const pandarianClasses  = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Shaman", "Mage", "Monk"];


console.log('Script Loaded');

const factionSelection = document.getElementById("select-faction");
const raceSelection = document.getElementById("select-race");
const classSelection = document.getElementById("select-class");
const pageBody = document.body;

//INSERT RACE OPTIONS BASED ON FACTION SELECTION    
factionSelection.addEventListener('change', function() {
    if (factionSelection.value == "alliance") {
        pageBody.style.color = "white";
        pageBody.style.backgroundImage = "URL('/img/alliance-logo.jpg')";
        pageBody.style.backgroundSize = "cover";
        raceSelection.options.length = 0;
        for (var i=0; i<allianceRaces.length; i++) {
            var allianceRaceOptions = document.createElement("option");
            allianceRaceOptions.value = allianceRaces[i];
            allianceRaceOptions.text = allianceRaces[i];
            raceSelection.appendChild(allianceRaceOptions);
        }        
    } else if (factionSelection.value == "horde") {
        pageBody.style.color = "white";
        pageBody.style.backgroundImage = "URL('/img/horde-logo.jpg')";
        raceSelection.options.length = 0;
        for (var i=0; i<hordeRaces.length; i++) {
            var hordeRaceOptions = document.createElement("option");
            hordeRaceOptions.value = hordeRaces[i];
            hordeRaceOptions.text = hordeRaces[i];
            raceSelection.appendChild(hordeRaceOptions);
        }
    }
})


//INSERT CLASS OPTIONS BASED ON RACE SELECTION    
raceSelection.addEventListener('change', function() {
    if (raceSelection.value == "Human") {
        classSelection.options.length = 0;
        for (var i=0; i<humanClasses.length; i++) {
            var humanClassOptions = document.createElement("option");
            humanClassOptions.value = humanClasses[i];
            humanClassOptions.text = humanClasses[i];
            classSelection.appendChild(humanClassOptions);
        }        
    } else if (raceSelection.value == "Dwarf") {
        classSelection.options.length = 0;
        for (var i=0; i<dwarfClasses.length; i++) {
            var dwarfClassOptions = document.createElement("option");
            dwarfClassOptions.value = dwarfClasses[i];
            dwarfClassOptions.text = dwarfClasses[i];
            classSelection.appendChild(dwarfClassOptions);
        }
    } else if (raceSelection.value == "Night Elf") {
        classSelection.options.length = 0;
        for (var i=0; i<nElfClasses.length; i++) {
            var nElfClassOptions = document.createElement("option");
            nElfClassOptions.value = nElfClasses[i];
            nElfClassOptions.text = nElfClasses[i];
            classSelection.appendChild(nElfClassOptions);
        }
    } else if (raceSelection.value == "Gnome") {
        classSelection.options.length = 0;
        for (var i=0; i<gnomeClasses.length; i++) {
            var gnomeClassOptions = document.createElement("option");
            gnomeClassOptions.value = gnomeClasses[i];
            gnomeClassOptions.text = gnomeClasses[i];
            classSelection.appendChild(gnomeClassOptions);
        }
    } else if (raceSelection.value == "Draenei") {
        classSelection.options.length = 0;
        for (var i=0; i<draeneiClasses.length; i++) {
            var draeneiClassOptions = document.createElement("option");
            draeneiClassOptions.value = draeneiClasses[i];
            draeneiClassOptions.text = draeneiClasses[i];
            classSelection.appendChild(draeneiClassOptions);
        }
    } else if (raceSelection.value == "Worgen") {
        classSelection.options.length = 0;
        for (var i=0; i<worgenClasses.length; i++) {
            var worgenClassOptions = document.createElement("option");
            worgenClassOptions.value = worgenClasses[i];
            worgenClassOptions.text = worgenClasses[i];
            classSelection.appendChild(worgenClassOptions);
        }
    } else if (raceSelection.value == "Orc") {
        classSelection.options.length = 0;
        for (var i=0; i<orcClasses.length; i++) {
            var orcClassOptions = document.createElement("option");
            orcClassOptions.value = orcClasses[i];
            orcClassOptions.text = orcClasses[i];
            classSelection.appendChild(orcClassOptions);
        }
    } else if (raceSelection.value == "Undead") {
        classSelection.options.length = 0;
        for (var i=0; i<undeadClasses.length; i++) {
            var undeadClassOptions = document.createElement("option");
            dundeadClassOptions.value = undeadClasses[i];
            undeadClassOptions.text = undeadClasses[i];
            classSelection.appendChild(undeadClassOptions);
        }
    } else if (raceSelection.value == "Blood Elf") {
        classSelection.options.length = 0;
        for (var i=0; i<bElfClasses.length; i++) {
            var bElfClassOptions = document.createElement("option");
            bElfClassOptions.value = bElfClasses[i];
            bElfClassOptions.text = bElfClasses[i];
            classSelection.appendChild(bElfClassOptions);
        }
    } else if (raceSelection.value == "Goblin") {
        classSelection.options.length = 0;
        for (var i=0; i<goblinClasses.length; i++) {
            var goblinClassOptions = document.createElement("option");
            goblinClassOptions.value = goblinClasses[i];
            goblinClassOptions.text = goblinClasses[i];
            classSelection.appendChild(goblinClassOptions);
        }
    } else if (raceSelection.value == "Troll") {
        classSelection.options.length = 0;
        for (var i=0; i<trollClasses.length; i++) {
            var trollClassOptions = document.createElement("option");
            trollClassOptions.value = trollClasses[i];
            trollClassOptions.text = trollClasses[i];
            classSelection.appendChild(trollClassOptions);
        }
    } else if (raceSelection.value == "Tauren") {
        classSelection.options.length = 0;
        for (var i=0; i<taurenClasses.length; i++) {
            var taurenClassOptions = document.createElement("option");
            taurenClassOptions.value = taurenClasses[i];
            taurenClassOptions.text = taurenClasses[i];
            classSelection.appendChild(taurenClassOptions);
        }
    } else if (raceSelection.value == "Pandaren") {
        classSelection.options.length = 0;
        for (var i=0; i<pandarenClasses.length; i++) {
            var pandarenClassOptions = document.createElement("option");
            pandarenClassOptions.value = pandarenClasses[i];
            pandarenClassOptions.text = pandarenClasses[i];
            classSelection.appendChild(pandarenClassOptions);
        }
    }
})

