
const allianceRaces = ["Human", "Dwarf", "Night Elf", "Gnome", "Draenei", "Worgen", "Pandarian"];
const hordeRaces = ["Orc", "Undead", "Blood Elf", "Goblin", "Troll", "Tauren", "Pandarian"];

console.log('Script Loaded');
console.log(allianceRaces);
console.log(hordeRaces);

const factionSelection = document.getElementById("select-faction");
const raceSelection = document.getElementById("select-race");
const classSelection = document.getElementById("select-class");
    
    factionSelection.addEventListener('change', function() {

        if (factionSelection.value == "alliance") {

            allianceRaceOptions = document.createElement("option");

            for (var i=0; i<allianceRaces.length; i++) {
                console.log(allianceRaceOptions);
                allianceRaceOptions.value = allianceRaces[i];
                allianceRaceOptions.text = allianceRaces[i];
                raceSelection.appendChild(allianceRaceOptions);
            }
            
        } else if (factionSelection.value == "horde") {

            hordeRaceOptions = document.createElement("option");

            for (var j=0; j<hordeRaces.length; j++) {
                console.log(j);
                hordeRaceOptions.value = hordeRaces[j];
                hordeRaceOptions.text = hordeRaces[j];
                raceSelection.appendChild(hordeRaceOptions);
        }
    }
})