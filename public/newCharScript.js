//RACES BY FACTIONS
const allianceRaces = ["Select Race", "Draenei", "Dwarf", "Gnome", "Human", "Night Elf", "Pandarian", "Worgen"];
const hordeRaces    = ["Select Race", "Blood Elf", "Goblin", "Orc", "Pandarian", "Tauren", "Troll", "Undead"];


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


//RACIAL DESCRIPTIONS
const draeneiDesc   = "The Draenei are followers of the Naaru and worshipers of the Holy Light. The Eredar created a rich and magical society on Argus, which caught Sargeras’ attention. He promised the three Eredar leaders, Kil'jaeden, Archimonde, and Velen, even more magic and power if they pledged loyalty. Velen saw through the plan and instead escaped with the remaining uncorrupted Eredar, while his fellow leaders were corrupted and joined the Burning Legion. Fleeing from planet to planet, they eventually settled on the Orcish home world of Draenor. After a period of peace, many were brutally murdered during Gul’dan’s corruption of the Orcs and formation of the Horde. The survivors escaped on a spaceship, the Exodar, crashing it on Azeroth.";
const dwarfDesc     = "The dwarves are a hardy race, hailing from Khaz Modan in the Eastern Kingdoms. They can trace their heritage back to the Titans; a mutated version of the Earthen servants turned mortal by the Curse of Flesh, originally designed to help shape Azeroth. They went into hibernation in Titan cities for thousands of years following the Sundering, emerging to find themselves mortal. ";
const gnomeDesc     = "The gnomes are a quirky race, obsessed with gadgets and technology. They originally come from the city of New Tinkertown, which was destroyed by High Tinker Mekkatorque in an attempt to save it from an invading army of troggs.";
const humanDesc     = "The humans are the most populous and the youngest race in Azeroth. The humans have become the de facto leaders of the Alliance, with their youthful ambitions and resilience. The humans are the founders of the Alliance. Their diplomacy skills go back to the Second War, where the seven kingdoms joined together to defeat the Horde. ";
const nelfDesc      = "The night elves are a mysterious race whose thirst for magic and power created a flourishing, yet corrupt, ancient empire. This empire had a dark side, drawing the attention of the Burning Legion which led to the War of the Ancients and The Sundering, a massive arcane explosion that ripped the world apart. The new generation of night elves shunned arcane magic and instead rebuilt their civilization to live in harmony with nature. They lived in Kalimdor for thousands of years, undisturbed until the world tree and their immortality was sacrificed to halt a new advance of the Burning Legion prior to the events of World of Warcraft.";
const pandarianDesc = "Denizens of a wondrous and fertile land, the pandaren once labored under the oppressive thumb of a monstrous race of ancient warlords known as the Mogu. Through tenacity, diplomacy, and a unique form of unarmed combat, the pandaren staged a successful revolution that deposed the Mogu and established a pandaren empire that would prosper for thousands of years.";
const worgenDesc    = "The Worgen are a cursed race comprised of the people of Gilneas who have been afflicted by an ancient druidic curse, causing them to transform into deadly half-worg half-men. After many attempts at developing a cure, the infected people of Gilneas have managed to keep their mind and consciousness and have been sworn into the Alliance to battle the Forsaken threat that ravages their land.";
const belfDesc      = "The blood elves are a proud, haughty race, joining the Horde in Burning Crusade. They represent a faction of former high elves, split off from the rest of elven society; they are also survivors of Arthas' assault on Silvermoon. Blood elves are fully dependent on magic, having revelled in its power for so long that they suffer horrible withdrawal if it were to be taken away.";
const goblinDesc    = "After series of cataclysmic events in the Lost Isles and the Undermine, a betrayal from one of their own trade princes, and open hostility from members of the Alliance, the goblins of the Bilgewater Cartel decide that their relations with the Horde can no longer be neutral. Through the orcs, the goblins enter the Horde, becoming the 6th race to follow the Warchief's leadership.";
const orcDesc       = "The orcs originally resided on the world of Draenor. Unfortunately, The Burning Legion made use of them in an attempt to conquer Azeroth—they were infected with the daemonic blood of Mannoroth the Destructor, driven mad, and turned upon both the Draenei and the denizens of Azeroth. After losing the Second War, they were cut off from the corrupting influence of Mannoroth, and began to return to their shamanistic roots. Now, under the leadership of their new Warchief, the orcs are carving out a home for themselves in Azeroth.";
const taurenDesc    = "The tauren, a race with deep shamanistic roots, are longtime residents of Kalimdor. They have a deep and abiding love of nature, and the vast majority of them worship a deity known as the Earth Mother.";
const trollDesc     = "While there are many different tribes of trolls scattered across Azeroth, only the Darkspear Tribe has ever sworn allegiance to the Horde. The trolls originally lived in the Broken Isles, but were overrun by naga and murlocs and driven from their home. The orcs, led by Thrall, saved the Darkspear tribe from certain destruction and offered them amnesty among the Horde. In return, the Darkspear tribe swore fealty to the orcish warchief.";
const undeadDesc    = "When the undead scourge initially swept across Azeroth, they converted a number of members of the Alliance to the undead. When the combined forces of the orcs, elves, trolls, dwarves and humans began to fight back, though, The Lich King's hold on his forces began to weaken. A small faction of humans, known as the Forsaken, broke free of the Lich King's control. Now, free of the bonds of servitude as well as the troublesome emotions and connections of their human lives, the Forsaken have found a new home—with the Horde.";


//CLASS DESCRIPTIONS
const dHunterDesc   = "Trained by Illidan Stormrage himself, Demon Hunters are trained for the sole purpose of tracking and destroying the Burning Legion no matter the cost. Using their enhanced eyesight, warglaives, and the demonic energy of their enemies, demon hunters are a force to be reckoned with by any who stand in their way. Demon Hunters have two specializations: Havoc and Vengeance. Both of these specializations utilize agility as their primary stat and wear leather armor. However, both specs differ in that Havoc utilizes a resource called  Fury and Vengeance utilizes a resource called  Pain to cast spells and abilities.";
const druidDesc     = "Trained with the sole purpose to protect and preserve the balance of nature, druids are master shapeshifters that can take on the form of numerous animals and creatures in order to assist their allies. Druids have four specializations which allows them to fill all roles in a raiding environment: Balance, Feral, Guardian, and Restoration. All four specializations initially share a resource called  Mana; however, each specialization (aside from restoration) has an additional resource that it uses to cast spells and abilities: Balance uses  Astral Power, feral uses  Energy and  Combo Points and Guardian uses  Rage. Additionally, all four specializations wear leather armor and the primary stat for each spec changes based on your current spec (Guardian and feral druids use agility and balance and restoration druids use intellect).";
const hunterDesc    = "Hunters come from a variety of backgrounds ranging from trackers to tamers to deadly marksmen. Hunters (with the exception of survival hunters) are unique in that they are only ranged class in World of Warcraft that uses arrows and bullets to deal damage instead of spells. Additionally, hunters are also unique in that they can tame a variety of different animals to assist them in combat as well as utilize a variety of different traps to hinder their enemies. Hunters currently have three specializations: Beast Mastery, Marksmanship, and Survival. Each of the three specializations utilize agility as their primary stat, wear mail armor, and use  Focus as a resource to cast their abilities.";
const mageDesc      = "Adepts of the magical arts, mages are a scholarly class that have origins dating as far back as the Well of Eternity. Knowledgeable and powerful, mages can assault their foes with raw arcane magic, burn their foes to ash with powerful fire magic, and chill and freeze their enemies to the bone with extremely cold frost magic. Additionally, mages are also able to conjure refreshments for themselves and allies, provide transport around Azeroth and beyond with teleports and portals, and even temporarily transform their enemies into less harmful creatures with polymorphs. Currently, mages have three specializations: Arcane, fire, and frost. All three specs utilize intellect as their primary stat, wear cloth armor, and use a resource called  Mana to cast spells and abilities.";
const monkDesc      = "Trained with the teachings of the Four August Celestials, monks are paragons of peace, harmony, and brewing. In combat, monks use their iron-clad discipline, martial arts skills, brews, ancient healing techniques, and regenerative mists to assist their allies. Currently, in World of Warcraft: Legion, monks have three specializations: Brewmaster, Mistweaver, and Windwalker. While all three specializations wear leather armor, each spec uses different resources to cast their spells and abilities and utilizes different primary stats. Mistweavers use intellect as their primary stat and use a resource called  Mana to cast their spells and abilities. Brewmasters use agility as their primary stat and use two resources called  Energy (to cast spells and abilities) and Stagger (to reduce damage taken). Finally, windwalkers use agility as their primary stat and use two resources called  Energy and  Chi to cast their spells and abilities.";
const paladinDesc   = "Champions of the Light and crusaders of justice, Paladins seek to walk the path righteousness in all things they do. On the battlefield, Paladins can be anything from holy warriors who assail their foes with holy magic, steadfast protectors who use the power of the Light to shield both themselves or allies, or healers who bestow blessings to increase their allies combat performance and utilize the benevolent, restorative properties of the Light to mend wounds. Currently, in World of Warcraft: Legion, Paladins have 3 specs: Holy, Protection, and Retribution. While all three specializations wear plate gear and utilize mana as a resource, Retribution and Protection utilize strength as a primary stat and Holy utilizes Intellect. Additionally, Retribution paladins utilize an additional resource called  Holy Power to further improve some of their offensive spells, and Holy and Protection paladins use  Mana.";
const priestDesc    = "Scions of the Light or master wielders of the Void, priests utilize their holy and void powers to heal allies and destroy enemies. Priests have three specializations: Discipline, Holy, and Shadow. Each of the three specializations utilizes intellect as a primary stat and wears cloth armor. However, the priest specs differ from each other in that Discipline and Holy are healer specs that utilize Mana as their main resource for casting spells and abilities, and shadow is a DPS specialization that uses a special resource called  Insanity.";
const rogueDesc     = "Thieves, cutthroats, spies, master poisoners, assassins. These are but few of the many words that describe rogues. On the battlefield, rogues employ a variety of tactics ranging from subtlety to lethal and agonizing poisons to guerrilla warfare. Rogues have three specs: Assassination, Outlaw, and Subtlety. Each of the three specs utilizes agility as their primary stat, wears leather armor, and uses two resources called  Energy and  Combo Points to cast abilities and spells.";
const shamanDesc    = "Disciples and wielders of elemental magic, shamans seek to harness and live in harmony with the Elements. On the battlefield, shamans can call upon the restorative powers of water to mend wounds and heal allies, the wind to empower allies, the fortifying properties of the earth, or the destructive properties of fire to vanquish foes. Shamans have three specializations: Elemental, Enhancement, and Restoration. Each of the three specs wears mail armor and utilizes  Mana as a base resource. However, the specs differ from each other in that Restoration and Elemental utilize intellect as their primary stat and enhancement utilities agility. Additionally, the specs also differ in that Elemental and Enhancement both use an additional special resource called Maelstrom.";
const warlockDesc   = "In the face of demonic power, most heroes see only death, whereas Warlocks see opportunity. Warlocks are voracious spellcasters that utilize the powers of shadow and the destructive forces of fel to either slowly drain their enemies' lives, swarm them with a vast army of demons, or strike with chaotic energy. Warlocks have three specializations: Affliction, Demonology and Destruction. All three specializations utilize Intellect as their primary stat, wear cloth armor, and utilize  Mana as a resource as well as a class-specific resource called  Soul Shards to cast abilities and spells.";
const warriorDesc   = "Weapon masters, bloodthirsty berserkers, and defenders of the weak, warriors are a force to be reckoned with on the battlefield. With their raw strength, determination, and pure hatred, warriors seek to vanquish any foe who stands in their way. Warriors have three specs: Arms, Fury, and Protection. All three warrior specs utilize strength as their primary stat, wear plate armor, and use a resource called  Rage to cast spells and abilities.";


//DOCUMENT ELEMENTS
const factionSelection = document.getElementById("select-faction");
const raceSelection = document.getElementById("select-race");
const classSelection = document.getElementById("select-class");
const pageBody = document.body;


console.log('Script Loaded');

//INSERT RACE OPTIONS BASED ON FACTION SELECTION    
factionSelection.addEventListener('change', function() {
    if (factionSelection.value == "Alliance") {
        pageBody.style.color = "grey";
        pageBody.style.backgroundImage = "URL('/img/alliance-logo.jpg')";
        pageBody.style.backgroundSize = "cover";
        raceSelection.options.length = 0;
        for (var i=0; i<allianceRaces.length; i++) {
            var allianceRaceOptions = document.createElement("option");
            allianceRaceOptions.value = allianceRaces[i];
            allianceRaceOptions.text = allianceRaces[i];
            raceSelection.appendChild(allianceRaceOptions);
        }        
    } else if (factionSelection.value == "Horde") {
        pageBody.style.color = "grey";
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
            undeadClassOptions.value = undeadClasses[i];
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


