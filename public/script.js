
const allianceRaces = ["Select Race", "Human", "Dwarf", "Night Elf", "Gnome", "Draenei", "Worgen", "Pandarian"];
const hordeRaces = ["Select Race", "Orc", "Undead", "Blood Elf", "Goblin", "Troll", "Tauren", "Pandarian"];

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
})