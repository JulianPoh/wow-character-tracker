
var allianceRaces = [
  'Human',
  'Dwarf',
  'Night Elf',
  'Gnome',
  'Draenei',
  'Worgen',
  'Pandarian'
];


var hordeRaces = [
  'Orc',
  'Undead',
  'Blood Elf',
  'Goblin',
  'Troll',
  'Tauren',
  'Pandarian'
];


var factionSelection = document.getElementById("select-faction");
var raceSelection = document.getElementById("select-race");
var classSelection = document.getElementById("select-class");
    factionselection.addEventListener('change', function() {

        if (factionSelection.value = "alliance") {

            allianceRaceOptions = document.createElement("option");
            
            for (ar i=0; i<allianceRaces.length; i++) {
                option.value = option.text = i;
                raceSelection.add(allianceRaceOptions);
            }
            
        } else if (factionSelection.value = "horde") {

            hordeRaceOptions = document.createElement("option");

            for (ar i=0; i<hordeRaces.length; i++) {
                option.value = option.text = i;
                raceSelection.add(hordeRaceOptions);
        }
    }