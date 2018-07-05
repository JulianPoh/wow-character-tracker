
const allianceRaces = ["Select Race", "Human", "Dwarf", "Night Elf", "Gnome", "Draenei", "Worgen", "Pandarian"];
const hordeRaces = ["Select Race", "Orc", "Undead", "Blood Elf", "Goblin", "Troll", "Tauren", "Pandarian"];


const humanClasses = ["Select Class", "Warrior", "Hunter", "Paladin", "Rogue", "Priest", "Death Knight", "Mage", "Warlock", "Monk"];
const dwarfClasses = ["Select Class", "Warrior", "Hunter", "Paladin", "Rogue", "Priest", "Death Knight", "Shaman", "Mage", "Warlock", "Monk"];
const nElfClasses = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Death Knight", "Mage", "Monk", "Druid", "Demon Hunter"];
const gnomeClasses = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Death Knight", "Mage", "Warlock", "Monk"];
const draenaiClasses = ["Select Class", "Warrior", "Hunter", "Paladin", "Priest", "Death Knight", "Shaman", "Mage", "Monk"];
const worgenClasses = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Death Knight", "Mage", "Warlock", "Druid"];
const orcClasses = ["Select Class", "Warrior", "Hunter", "Rogue", "Death Knight", "Shaman", "Mage", "Warlock", "Monk"];
const undeadClasses = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Death Knight", "Mage", "Warlock", "Monk"];
const bElfClasses = ["Select Class", "Warrior", "Hunter", "Paladin", "Rogue", "Priest", "Death Knight", "Mage", "Warlock", "Monk", "Demon Hunter"];
const goblinClasses = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Death Knight", "Shaman", "Mage", "Warlock"];
const trollClasses = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Death Knight", "Shaman", "Mage", "Warlock", "Monk", "Druid"];
const taurenClasses = ["Select Class", "Warrior", "Hunter", "Paladin", "Priest", "Death Knight", "Shaman", "Monk", "Druid"];
const pandarianClasses = ["Select Class", "Warrior", "Hunter", "Rogue", "Priest", "Shaman", "Mage", "Monk"];


console.log('Script Loaded');

const factionSelection = document.getElementById("select-faction");
const raceSelection = document.getElementById("select-race");
const classSelection = document.getElementById("select-class");
    
    factionSelection.addEventListener('change', function() {

        if (factionSelection.value == "alliance") {
            raceSelection.options.length = 0;
            for (var i=0; i<allianceRaces.length; i++) {
                var allianceRaceOptions = document.createElement("option");
                allianceRaceOptions.value = allianceRaces[i];
                allianceRaceOptions.text = allianceRaces[i];
                raceSelection.appendChild(allianceRaceOptions);
            }
            
        } else if (factionSelection.value == "horde") {
            raceSelection.options.length = 0;
            for (var i=0; i<hordeRaces.length; i++) {
                var hordeRaceOptions = document.createElement("option");
                hordeRaceOptions.value = hordeRaces[i];
                hordeRaceOptions.text = hordeRaces[i];
                raceSelection.appendChild(hordeRaceOptions);
        }
    }


    raceSelection.addEventListener('change', function() {

        if (raceSelection.value == "human") {
            classSelection.options.length = 0;
            for (var i=0; i<humanClasses.length; i++) {
                var humanClassOptions = document.createElement("option");
                humanClassOptions.value = humanClasses[i];
                humanClassOptions.text = humanClasses[i];
                classSelection.appendChild(humanClassOptions);
            }
            
        } else if (raceSelection.value == "dwarf") {
            classSelection.options.length = 0;
            for (var i=0; i<dwarfClasses.length; i++) {
                var dwarfClassOptions = document.createElement("option");
                dwarfClassOptions.value = dwarfClasses[i];
                dwarfClassOptions.text = dwarfClasses[i];
                classSelection.appendChild(dwarfClassOptions);
            }
        }
    })



})