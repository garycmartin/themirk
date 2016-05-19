/*
== Misc flavor text examples ==
Your violent attack almost kills the warg.
You thrust the warg back- the warg looses its footing but recovers quickly.
You hit the warg with a glancing blow and leave the warg momentairaly stunned.
The vicious warg runs around you and howls.
The hideous goblin captures you.
You are carrying too much.
but fall and smash your skull
foul gluttony has killed you
you see nothing special
you are slowly sinking into the bog
someone strangles you from behind.
some thing drops from above and stings

== TODO ==
Make the player an object just like the NPCs.
Reminder, typeof object !== 'undefined' test for undefined.
*/

document.twine = {};

document.twine.image_path = "96x64/";

//
// Creature attack structure
//

document.twine.attackStrings = [

{description: " strikes with one well placed blow, your skull is cleaved.", death: true},

{description: " hits you with a glancing blow and leaves you momentarily stunned.", death: false},

{description: " slices your hand- blood drips slowly to the ground.", death: false},

{description: "'s effort is wasted. Your defence is too strong.", death: false},

{description: "'s stroke sweeps you off your feet, but you are on guard in a moment.", death: false},

{description: " hits you hard on the leg- you stagger and almost fall momentarily stunned.", death: false},

{description: "'s fast blow knocks the wind out of you.", death: false},

{description: "'s sudden lunge sweeps past close to your ear.", death: false},

{description: "'s nasty slice misses your heart.", death: false}

];

//
// Object structure (Note: creatures are also processed as objects)
//

document.twine.objects = [

{adjective: "small", noun: "hobbit", article: "a", uid: "player", location: "the mirk", secondLocation: "", description: "You are a little scruffy around the edges.", parent: "", volume: 5, weight: 4, strenght: 4, visible: true, objectType: "player", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0},

{adjective: "heavy stone", noun: "door", article: "a", uid: "stonedoor", location: "elvenking halls", secondLocation: "great halls", description: "The heavy stone door looks heavy.", parent: "", volume: 10, weight: 10, strenght: 10, visible: true, objectType: "object", openClosed: "closed", lockedUnlocked: "locked", light: false, expired: false, full: false, fluid: false, value: 0},

{adjective: "small", noun: "rock", article: "a", uid: "smallrock", location: "goblin cave entrance", secondLocation: "", description: "The rock is fresh from the mountain side.", parent: "", volume: 2, weight: 2, strenght: 7, visible: true, objectType: "object", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0},

{adjective: "medium", noun: "stone", article: "a", uid: "mediumstone", location: "a hidden way down", secondLocation: "", description: "The stone is large and heavy.", parent: "", volume: 2, weight: 3, strenght: 10, visible: true, objectType: "object", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0},

{adjective: "average", noun: "pebble", article: "an", uid: "averagepebble", location: "cavern passage", secondLocation: "", description: "The pebble is rather average looking, far from a beach.", parent: "", volume: 2, weight: 3, strenght: 6, visible: true, objectType: "object", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0},

{adjective: "blue", noun: "socks", article: "some", uid: "socks", location: "rocky path", secondLocation: "", description: "A pair of pretty blue socks, just your colour.", parent: "", volume: 2, weight: 1, strenght: 2, visible: true, objectType: "object", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0},

{adjective: "large", noun: "key", article: "a", uid: "largekey", location: "viciousgoblin", secondLocation: "", description: "A large, roughly made metal key.", parent: "", volume: 2, weight: 1, strenght: 2, visible: true, objectType: "object", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0},

{adjective: "silver", noun: "coin", article: "a", uid: "silvercoin", location: "viciousgoblin", secondLocation: "", description: "A small silver coin of some value.", parent: "", volume: 1, weight: 1, strenght: 2, visible: true, objectType: "object", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 5},

{adjective: "wooden", noun: "chest", article: "the", uid: "woodenchest", location: "empty land", secondLocation: "", description: "You examine the old wooden chest, the hinges are a little rusty but the chest is strong.", parent: "", volume: 5, weight: 5, strenght: 5, visible: true, objectType: "object", openClosed: "closed", lockedUnlocked: "locked", light: false, expired: false, full: false, fluid: false, value: 0},

{adjective: "animal", noun: "skull", article: "an", uid: "animalskull", location: "bleak land", secondLocation: "", description: "The unfortunate animal must have died some time ago. The skull has been bleached white by the bright sun and blowing sands.", parent: "", volume: 2, weight: 2, strenght: 4, visible: true, objectType: "object", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0},

{adjective: "vicious", noun: "warg", article: "the", uid: "viciouswarg", location: "empty land", secondLocation: "", description: "The vicious warg is vicious.", parent: "", volume: 3, weight: 4, strenght: 4, visible: true, objectType: "NPC", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0, scriptPos: 0, script: ["random_walk", "attack_foe", "wait"]},

{adjective: "cunning", noun: "warg", article: "the", uid: "cunningwarg", location: "empty land", secondLocation: "", description: "The cunning warg is cunning.", parent: "", volume: 3, weight: 4, strenght: 4, visible: true, objectType: "NPC", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0, scriptPos: 0, script: ["random_walk", "attack_foe", "random_walk", "attack_foe", "wait"]},

{adjective: "giant black", noun: "spider", article: "the", uid: "giantspider", location: "deep forest", secondLocation: "", description: "Bulbous eyes of the giant black spider seem to watch you.", parent: "", volume: 6, weight: 6, strenght: 6, visible: true, objectType: "NPC", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0, scriptPos: 0, script: ["random_walk", "wait", "attack_foe", "wait"]},

{adjective: "enormous black", noun: "spider", article: "the", uid: "enormousspider", location: "deep forest", secondLocation: "", description: "The many bulbous eyes of the enormous black spider seem to stare through you.", parent: "", volume: 7, weight: 8, strenght: 7, visible: true, objectType: "NPC", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0, scriptPos: 0, script: ["random_walk", "wait", "attack_foe", "wait", "wait"]},

{adjective: "vicious", noun: "goblin", article: "the", uid: "viciousgoblin", location: "goblin cave", secondLocation: "", description: "The vicious goblin looks vicious.", parent: "", volume: 6, weight: 4, strenght: 6, visible: true, objectType: "NPC", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0, scriptPos: 0, script: ["wait", "random_walk", "attack_foe", "drop_object", "wait", "random_walk", "attack_foe", "take_object"]},

{adjective: "hideous", noun: "goblin", article: "the", uid: "hideousgoblin", location: "long winding cave", secondLocation: "", description: "The hideous goblin is hideous.", parent: "", volume: 6, weight: 4, strenght: 4, visible: true, objectType: "NPC", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0, scriptPos: 0, script: ["wait", "random_walk", "attack_foe", "drop_object", "wait", "random_walk", "attack_foe", "wait", "take_object"]},

{adjective: "wood", noun: "elf", article: "a", uid: "woodelf", location: "great halls", secondLocation: "", description: "The wood elf is fast and nimble.", parent: "", volume: 3, weight: 3, strenght: 7, visible: true, objectType: "NPC", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0, scriptPos: 0, script: ["random_walk", "random_walk", "take_object", "random_walk", "drop_object", "random_walk", "random_walk"]},

{adjective: "wood", noun: "cutter", article: "a", uid: "woodcutter", location: "woodcutter settlement", secondLocation: "", description: "The wood cutter looks busy cutting wood.", parent: "", volume: 4, weight: 5, strenght: 8, visible: true, objectType: "NPC", openClosed: "", lockedUnlocked: "", light: false, expired: false, full: false, fluid: false, value: 0, scriptPos: 0, script: ["random_walk", "wait", "random_walk", "wait", "take_object", "random_walk", "wait", "drop_object", "random_walk", "wait", "random_walk", "wait"]}

];

//
// Extract a map structure from the Twine generated html
//

document.twine.map = [];

document.twine.extractTwineMap = function () {
    var data = $("tw-passagedata");
    for (var index = 0; index < data.length; ++index) {
        var passageLocation = data[index].attributes.name.textContent;
        var passageSource = data[index].innerText;
        var passageLinks = passageSource.match(/\[\[(.*?)\]\]/g);
        var exits = [];
        if (passageLinks === null) {
            var newLocation = {location: passageLocation, exits: []};
        } else {
            $.each(passageLinks, function (index, target) {
                target = target.substring(2, target.length - 2);
                var display = target;
                // display|target format
                var barIndex = target.indexOf('|');
                if (barIndex != -1) {
                    display = target.substr(0, barIndex);
                    target = target.substr(barIndex + 1);
                } else {
                    // display->target format
                    var rightArrIndex = target.indexOf('->');
                    if (rightArrIndex != -1) {
                        display = target.substr(0, rightArrIndex);
                        target = target.substr(rightArrIndex + 2);
                    } else {
                        // target<-display format
                        var leftArrIndex = target.indexOf('<-');
                        if (leftArrIndex != -1) {
                            display = target.substr(leftArrIndex + 2);
                            target = target.substr(0, leftArrIndex);
                        };
                    };
                };
                exits.push({direction: display, destination:target, visited: false});
            });
            var newLocation = {location: passageLocation, exits: exits};
        };
        document.twine.map.push(newLocation);
    };
};

document.twine.getObject = function (uid) {
    for (var index = 0; index < document.twine.objects.length; ++index) {
        if (document.twine.objects[index].uid === uid) {
            return document.twine.objects[index];
        };
    };
};

document.twine.player = document.twine.getObject("player");

document.twine.getLocationObjects = function (location) {
    var objectsHere = [];
    var creaturesHere = [];
    for (var index = 0; index < document.twine.objects.length; ++index) {
        var object = document.twine.objects[index];
        if (object.location === location || object.secondLocation === location) {
            if (object.objectType !== "object") {
                creaturesHere.push(object);
            } else {
                objectsHere.push(object);
            };
        };
    };
    return {objects: objectsHere, creatures: creaturesHere};
};

document.twine.capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.twine.wipe = function (span) {
    span.unbind("click");
    span.html(span.text());
    span.contents().unwrap();
};

document.twine.wipeAll = function () {
    $("a").contents().unwrap();
    $("span").each(function(index) {
        $(this).unbind("click")
    });
};

document.twine.interact = function (span, uid) {
    var append = $("#append");
    span.click(function(e) {
        e.preventDefault();
        document.twine.wipe(span);
        var location = passage.name;
        var object = document.twine.getObject(uid);
        var adjective = object.adjective;
        var noun = object.noun;
        var article = object.article;
        var description = object.description;
        if (article === "a" || article === "some") {
            article = "the";
        };
        if (object.openClosed === "open") {
            description += " " + document.twine.capitalize(article) + " " + adjective + " " + noun + " is open.";
                
        } else if (object.openClosed === "closed" && object.lockedUnlocked === "locked") {
            description += " " + document.twine.capitalize(article) + " " + adjective + " " + noun + " is locked closed.";
                
        } else if (object.openClosed === "closed") {
            description += " " + document.twine.capitalize(article) + " " + adjective + " " + noun + " is closed.";

        } else if (object.expired) {
            if (object.objectType === "NPC") {
                description += " " + document.twine.capitalize(article) + " " + adjective + " " + noun + " is dead.";
                        
            } else {
                description += " " + document.twine.capitalize(article) + " " + adjective + " " + noun + " is broken.";
            };
        };
        document.twine.blankLine();
        document.twine.wipe($("#" + uid));
        append.append("<span id='" + uid + "'><a href=''>" + "Examine" + "</a></span>, ");
        document.twine.examine($("#" + uid), description, uid);
        if (object.objectType === "NPC" && !object.expired) {
            document.twine.wipe($("#attack_" + uid));
            append.append("<span id='attack_" + uid + "'><a href=''>" + "attack" + "</a></span> ");
            document.twine.attack($("#attack_" + uid), uid);
            append.append(object.article + " " + object.adjective + " " + object.noun + "?<br/>");
                    
        } else if (object.location === "player") {
            document.twine.wipe($("#drop_" + uid));
            append.append("<span id='drop_" + uid + "'><a href=''>drop</a></span> ");
            append.append(article + " " + adjective + " ");
            if (object.expired) {
                if (object.objectType === "NPC") {
                    append.append("dead ");
                } else {
                    append.append("broken ");
                };
            };
            append.append(noun + "?<br/>");
            document.twine.drop($("#drop_" + uid), uid);
                    
        } else if (object.location === location || object.secondLocation === location) {
            document.twine.wipe($("#take_" + uid));
            append.append("<span id='take_" + uid + "'><a href=''>take</a></span>");
            document.twine.take($("#take_" + uid), uid);
            if (object.openClosed === "closed") {
            //if (object.openClosed === "closed" && object.lockedUnlocked !== "locked") { // TODO: Test
                document.twine.wipe($("#open_" + uid));
                append.append(", <span id='open_" + uid + "'><a href=''>open</a></span>");
                document.twine.open($("#open_" + uid), uid);
                                
            } else if (object.openClosed === "open") {
                document.twine.wipe($("#close_" + uid));
                append.append(", <span id='close_" + uid + "'><a href=''>close</a></span>");
                document.twine.close($("#close_" + uid), uid);
            };
            append.append(" " + article + " " + adjective + " ");
            if (object.expired) {
                if (object.objectType === "NPC") {
                    append.append("dead ");
                } else {
                    append.append("broken ");
                };
            };
            append.append(noun + "?<br/>");
        };
        document.twine.resetEvent();
    });
};

document.twine.examine = function (span, message) {
    var append = $("#append");
    span.click(function(e) {
        e.preventDefault();
        document.twine.wipe(span);
        document.twine.blankLine();
        append.append(message + "<br/>");
        document.twine.resetEvent();
        document.twine.updateNPCs();
    });
};

document.twine.open = function (span, uid) {
    var append = $("#append");
    span.click(function(e) {
        e.preventDefault();
        document.twine.wipe(span);
        var object = document.twine.getObject(uid);
        var location = passage.name;
        var adjective = object.adjective;
        var noun = object.noun;
        var article = object.article;
        if (article === "a") {
            article = "the";
        };
        document.twine.blankLine();
        append.append("You open " + article + " " + adjective + " ");
        document.twine.wipe($("#" + uid));
        append.append("<span id='" + uid + "'><a href=''>" + noun + "</a></span>.<br/>");
        document.twine.interact($("#" + uid), uid);
        object.openClosed = "open";
        document.twine.passageObjectUpdate(location);
        document.twine.resetEvent();
        document.twine.updateNPCs();
    });
};

document.twine.close = function (span, uid) {
    var append = $("#append");
    span.click(function(e) {
        e.preventDefault();
        document.twine.wipe(span);
        var object = document.twine.getObject(uid);
        var location = passage.name;
        var adjective = object.adjective;
        var noun = object.noun;
        var article = object.article;
        if (article === "a") {
            article = "the";
        };
        document.twine.blankLine();
        append.append("You close " + article + " " + adjective + " ");
        document.twine.wipe($("#" + uid));
        append.append("<span id='" + uid + "'><a href=''>" + noun + "</a></span>.<br/>");
        document.twine.interact($("#" + uid), uid);
        object.openClosed = "closed";
        document.twine.passageObjectUpdate(location);
        document.twine.resetEvent();
        document.twine.updateNPCs();
    });
};

document.twine.attack = function (span, uid) {
    var append = $("#append");
    span.click(function(e) {
        e.preventDefault();
        document.twine.wipe(span);
        var object = document.twine.getObject(uid);
        var location = passage.name;
        var adjective = object.adjective;
        var noun = object.noun;
        var article = object.article;
        if (article === "a") {
            article = "the";
        };
        if (object.location === location) {
            append.append("You attack " + article + " " + adjective + " " + noun + ".<br/>");
            if (Math.random() > 0.35) {
                object.expired = true;
                document.twine.wipe($("#" + uid));
                append.append("You kill " + article + " " + adjective + " " );
                append.append("<span id='" + uid + "'><a href=''>" + noun + "</a></span>.<br/>");
                document.twine.interact($("#" + uid), uid);
                document.twine.creatureDropAll(object);

            } else {
                append.append("But your effort is wasted. ");
                append.append(document.twine.capitalize(article) + " ");
                append.append(adjective + " ");
                document.twine.wipe($("#" + uid));
                append.append("<span id='" + uid + "'><a href=''>" + noun + "</a></span> ");
                append.append("defence is too strong.<br/>");
                document.twine.interact($("#" + uid), uid);
                document.twine.blankLine();
                document.twine.resetEvent();
                document.twine.updateNPCs();
            };
        };
        document.twine.resetEvent();
    });
};

document.twine.take = function (span, uid) {
    var append = $("#append");
    span.click(function(e) {
        e.preventDefault();
        document.twine.wipe(span);
        var object = document.twine.getObject(uid);
        var noun = object.noun;
        var article = object.article;
        var adjective = object.adjective;
        if (article === "a") {
            article = "the";
        };
        document.twine.blankLine();
        if (object.weight <= document.twine.player.strenght) {
            if (article === "some") {
                article = "the";
            };
            append.append("You take " + article + " " + adjective + " ");
            if (object.expired) {
                if (object.objectType === "NPC") {
                    append.append("dead ");
                } else {
                    append.append("broken ");
                };
            };
            document.twine.wipe($("#" + uid));
            append.append("<span id='" + uid + "'><a href=''>" + noun + "</a></span>.<br/>");
            document.twine.interact($("#" + uid), uid);
            object.location = "player";
            object.secondLocation = "";
        } else {
            if (article === "some") {
                append.append("The " + adjective + " ");
        } else {
                append.append("The " + article + " " + adjective + " ");
        };
        if (object.expired) {
            if (object.objectType === "NPC") {
                append.append("dead ");
            } else {
                append.append("broken ");
            };
        };
        if (article === "some") {
            append.append(noun + " are ");
        } else {
            append.append(noun + " is ");
        };
            append.append("too heavy for you to carry.<br/>");
        };
        document.twine.resetEvent();
        document.twine.updateNPCs();
    });
};

document.twine.drop = function (span, uid) {
    var append = $("#append");
    span.click(function(e) {
        e.preventDefault();
        document.twine.wipe(span);
        var object = document.twine.getObject(uid);
        var noun = object.noun;
        var article = object.article;
        var adjective = object.adjective;
        if (article === "a" || article === "some") {
            article = "the";
        };
        document.twine.blankLine();
        append.append("You drop " + article + " " + adjective + " ");
        if (object.expired) {
            if (object.objectType === "NPC") {
                append.append("dead ");
            } else {
                append.append("broken ");
            };
        };
        document.twine.wipe($("#" + uid));
        append.append("<span id='" + uid + "'><a href=''>" + noun + "</a></span>.<br/>");
        document.twine.interact($("#" + uid), uid);
        object.location = passage.name;
        document.twine.resetEvent();
        document.twine.updateNPCs();
    });
};

document.twine.getExits = function (location) {
    for (var index = 0; index < document.twine.map.length; ++index) {
        if (document.twine.map[index].location === location) {
            return document.twine.map[index].exits;
        }
    };
    return [];
};

document.twine.updateVisitedScore = function (location) {
    for (var index = 0; index < document.twine.map.length; ++index) {
        if (document.twine.map[index].location === location && !document.twine.map[index].visited) {
            document.twine.visitedScore += 1;
            document.twine.map[index].visited = true;
        }
    };
};

document.twine.showObjects = function () {
    var location = passage.name;
    var append = $("#append");
    var index;
    var nothing = true;
    var indent = "&nbsp;&nbsp;&nbsp;&nbsp;";
    for (var index = 0; index < document.twine.objects.length; ++index) {
        var object = document.twine.objects[index];
        if ((object.location === location || object.secondLocation === location) && object.visible && object.uid !== "player") {
            if (nothing) {
                nothing = false;
                append.append("You see:<br/>");
            };
            var article = document.twine.capitalize(object.article);
            var adjective = object.adjective;
            var noun = object.noun;
            var uid = object.uid;
            append.append(indent);
            append.append(article + " ");
            if (object.expired) {
                if (object.objectType === "NPC") {
                    append.append("dead ");
                } else {
                    append.append("broken ");
                };
            };
            append.append(adjective + " ");
            append.append("<span id='" + uid + "'><a href=''>" + noun + "</a></span>");
            var objects = document.twine.getLocationObjects(object.uid).objects;
            if (objects.length !== 0) {
                append.append(" carrying ");
                for (var scan = 0; scan < objects.length; ++scan) {
                    var carried = objects[scan];
                    if (scan === objects.length - 1 && scan !== 0) {
                        append.append(", and ");
                                                
                    } else if (scan !== 0) {
                        append.append(", ");
                    };
                    append.append(carried.article + " ");
                    if (carried.expired) {
                        if (carried.objectType === "NPC") {
                            append.append("dead ");
                                                        
                        } else {
                            carried.append("broken ");
                        };
                    };
                    append.append(carried.adjective + " " + carried.noun);
                };
            };
            append.append(".<br/>");
            document.twine.interact($("#" + uid), uid);
        };
    };
};

document.twine.showPlayer = function () {
    var append = $("#append");
    var indent = "&nbsp;&nbsp;&nbsp;&nbsp;";
    var nothing = true;
    for (var index = 0; index < document.twine.objects.length; ++index) {
        var object = document.twine.objects[index];
        if (object.location === "player") {
            if (nothing) {
                nothing = false;
                append.append("You are carrying:<br/>");
            };
            var noun = object.noun;
            var article = document.twine.capitalize(object.article);
            var adjective = object.adjective;
            var uid = object.uid;
            var name = article + " " + adjective + " " + noun;
            append.append(indent);
            append.append(article + " ");
            append.append(adjective + " ");
            if (object.expired) {
                if (object.objectType === "NPC") {
                    append.append("dead ");
                } else {
                    append.append("broken ");
                };
            };
            append.append("<span id='" + uid + "'><a href=''>" + noun + "</a>.</span><br/>");
            document.twine.interact($("#" + uid), uid);
        };
    };
};

document.twine.creatureRandomWalk = function (creature) {
    var playerLocation = passage.name;
    var append = $("#append");
    var noun = creature.noun;
    var article = document.twine.capitalize(creature.article);
    var adjective = creature.adjective;
    var uid = creature.uid;
    var name = article + " " + adjective + " " + noun;
    var exits = document.twine.getExits(creature.location);
    var go = exits[Math.floor(Math.random() * exits.length)];
    if (go.destination === playerLocation) {
        // Random walk into player location
        append.append(article + " " + adjective + " ");
        document.twine.wipe($("#" + uid));
        append.append("<span id='" + uid + "'><a href=''>" + noun + "</a></span> enters.<br/>");
        document.twine.interact($("#" + uid), uid);
        $("a").css("color", "#CFCFCF");
        document.twine.newPassage = false;
                                    
    } else if (creature.location === playerLocation) {
        // Random walk out of player location
        document.twine.wipe($("#" + uid));
        document.twine.wipe($("#attack_" + uid));
        append.append(article + " " + adjective + " ");
        append.append(noun + " goes ");
        append.append(go.direction.toLowerCase() + ".<br/>");
        document.twine.newPassage = false;
    };
    console.log(article + " " + adjective + " " + noun + " goes " + go.direction.toLowerCase() +
        " from " + creature.location + " to " + go.destination + ".");
    creature.location = go.destination;
}

document.twine.creatureWait = function (creature) {
    // Waits in location
    var playerLocation = passage.name;
    var append = $("#append");
    var noun = creature.noun;
    var article = document.twine.capitalize(creature.article);
    var adjective = creature.adjective;
    var name = article + " " + adjective + " " + noun;
    console.log(article + " " + adjective + " " + noun + " waits.");
    if (creature.location === playerLocation) {
        append.append(name + " waits.<br/>");
        document.twine.newPassage = false;
        window.scrollTo(0, document.body.scrollHeight);
    };
}

document.twine.creatureAttackFoe = function (creature) {
    var playerLocation = passage.name;
    var append = $("#append");
    var noun = creature.noun;
    var article = document.twine.capitalize(creature.article);
    var adjective = creature.adjective;
    var name = article + " " + adjective + " " + noun;
    if (creature.location === playerLocation) {
        // Attack player
        console.log(article + " " + adjective + " " + noun + " attacks.");

        // Keep attacking once aggravated
        creature.scriptPos = (creature.scriptPos - 1) % creature.script.length;

        var attacks = document.twine.attackStrings;
        var fight = attacks[Math.floor(Math.random() * attacks.length)];

        // Make it a fatal attack?
        if (Math.random() > 0.6) {
            fight = attacks[0];
        };
        append.append(name + " attacks you.<br/>");
        append.append(article + " " + adjective + " ");
        append.append(noun + fight.description + "<br/>");
        document.twine.newPassage = false;
        if (fight.death) {
            document.twine.gameOver();
        };
        window.scrollTo(0, document.body.scrollHeight);

    } else {
        // TODO
        // See if there is another foe to attack here
        console.log(name + " would like to attack.");
        var creatures = document.twine.getLocationObjects(
            creature.location).creatures;
        console.log(creatures);
    };
}

document.twine.creatureTakeObject = function (creature) {
    var playerLocation = passage.name;
    var append = $("#append");
    var noun = creature.noun;
    var article = document.twine.capitalize(creature.article);
    var adjective = creature.adjective;
    var uid = creature.uid;
    var name = article + " " + adjective + " " + noun;
    var objects = document.twine.getLocationObjects(creature.location).objects;
    if (objects.length !== 0) {
        var takeObject = objects[Math.floor(Math.random() * objects.length)];
        if (creature.strenght <= takeObject.weight) {
            console.log(name + " tried to take " + takeObject.noun + " but it's too heavy.");
            return;
        };
        takeObject.location = uid;
        takeObject.secondLocation = "";
        if (creature.location === playerLocation) {
            document.twine.wipe($("#" + takeObject.uid));
            document.twine.wipe($("#take_" + takeObject.uid));
            append.append(name + " takes ");
            append.append(takeObject.article + " " + takeObject.adjective + " ");
            if (takeObject.expired) {
                if (takeObject.objectType === "NPC") {
                    append.append("dead ");
                } else {
                    append.append("broken ");
                };
            };
            append.append(takeObject.noun + ".<br/>");
        };
    };
}

document.twine.creatureDropObject = function (creature) {
    var playerLocation = passage.name;
    var append = $("#append");
    var noun = creature.noun;
    var article = document.twine.capitalize(creature.article);
    var adjective = creature.adjective;
    var uid = creature.uid;
    var name = article + " " + adjective + " " + noun;
    var objects = document.twine.getLocationObjects(uid).objects;
    if (objects.length !== 0) {
        var dropObject = objects[Math.floor(Math.random() * objects.length)];
        dropObject.location = creature.location;
        if (creature.location === playerLocation) {
            append.append(name + " drops ");
            append.append(dropObject.article + " " + dropObject.adjective + " ");
            if (dropObject.expired) {
                if (dropObject.objectType === "NPC") {
                    append.append("dead ");
                } else {
                    append.append("broken ");
                };
            };
            append.append("<span id='take_" + dropObject.uid + "'><a href=''>" + dropObject.noun + "</a></span>.<br/>");
            document.twine.take($("#take_" + dropObject.uid), dropObject.uid);
        };
    } else {
        console.log(article + " " + adjective + " " + noun + " would like to drop an object but is carring nothing.");
    };
}

document.twine.creatureDropAll = function (creature) {
    var playerLocation = passage.name;
    var append = $("#append");
    var noun = creature.noun;
    var article = document.twine.capitalize(creature.article);
    var adjective = creature.adjective;
    var uid = creature.uid;
    var name = article + " " + adjective + " " + noun;
    var objects = document.twine.getLocationObjects(uid).objects;
    if (objects.length !== 0) {
        if (creature.location === playerLocation) {
            append.append(name + " drops ");
        };
        for (var index = 0; index < objects.length; ++index) {
            var dropObject = objects[index];
            dropObject.location = creature.location;
                if (creature.location === playerLocation) {
                    if (index === objects.length - 1 && index !== 0) {
                        append.append(", and ");
                                    
                    } else if (index !== 0) {
                        append.append(", ");
                };
                append.append(dropObject.article + " " + dropObject.adjective + " ");
                if (dropObject.expired) {
                    if (dropObject.objectType === "NPC") {
                        append.append("dead ");
                    } else {
                        append.append("broken ");
                    };
                };
                append.append("<span id='" + dropObject.uid + "'><a href=''>" + dropObject.noun + "</a></span>");
                document.twine.interact($("#" + dropObject.uid), dropObject.uid);
            };
        };
        if (creature.location === playerLocation) {
            append.append(".<br/>");
        };
    };
}

//
// TODO:
// -Abstract away the player actions to be like an NPC
// -Script jumps/logic, follow other, capture?
//
document.twine.updateNPCs = function () {
    var playerLocation = passage.name;
    var append = $("#append");
    for (var index = 0; index < document.twine.objects.length; ++index) {
        var object = document.twine.objects[index];
        if (object.objectType === "NPC" && !object.expired) {
            var noun = object.noun;
            var article = document.twine.capitalize(object.article);
            var adjective = object.adjective;
            var uid = object.uid;
            var name = article + " " + adjective + " " + noun;
            var exits = document.twine.getExits(object.location);

            for (var subindex = 0; subindex < object.script.length; ++subindex) {
                var script = object.script[object.scriptPos];
                object.scriptPos = (object.scriptPos + 1) % object.script.length;
                
                if (script === "random_walk" && exits !== null) {
                    document.twine.creatureRandomWalk(object);
                    break;
                } else if (script === "wait") {
                    document.twine.creatureWait(object);
                    break;
                } else if (script === "attack_foe" && object.location === playerLocation) {
                    // TODO: deal with attacking NPCs
                    document.twine.creatureAttackFoe(object);
                    break;
                } else if (script === "drop_object" && document.twine.getLocationObjects(uid).objects.length !== 0) {
                    document.twine.creatureDropObject(object);
                    break;
                } else if (script === "take_object" && document.twine.getLocationObjects(object.location).objects.length !== 0) {
                    document.twine.creatureTakeObject(object);
                    break;
                };
            };
        };
        // Stop any more NPC updates if player has expired
        if (document.twine.player.expired) {
            break;
        };
    };
};

document.twine.gameOver = function () {
    var append = $("#append");
    append.append("You are dead.<br/>");
    append.append("You have mastered ");
    append.append(Math.round(((document.twine.visitedScore - 1) / (document.twine.map.length - 1)) * 200) / 2);
    append.append("% of this adventure.<br/><br/>");
    document.twine.wipeAll();
    document.twine.clearTimeout();
    document.twine.player.expired = true;
    append.append("<a href=''>Try again?</a><br/>");
};

document.twine.visitedScore = 0;

document.twine.extractTwineMap();

document.twine.clearTimeout = function () {
    if (typeof document.twine.timerId !== 'undefined') {
        clearTimeout(document.twine.timerId);
    };
};

document.twine.resetEvent = function () {
    document.twine.timeout = 30000;
    document.twine.clearTimeout();
    document.twine.timerId = setTimeout(document.twine.wait, document.twine.timeout);
    window.scrollTo(0, document.body.scrollHeight);
};

document.twine.wait = function() {
    var append = $("#append");
    var waitMessageArray = document.twine.waitMessageArray;
    var waitMessage = waitMessageArray[Math.floor(Math.random() * waitMessageArray.length)];
    document.twine.blankLine();
    document.twine.wipe($("#wait"));
    append.append("You <span id='wait'><a href=''>wait</a></span>.<br/>");
    $("#wait").click(function(e) {
        e.preventDefault();
        document.twine.wipe($("#wait"));
        document.twine.wait();
    });
    append.append(waitMessage + "<br/>");
    document.twine.resetEvent();
    document.twine.updateNPCs();
};

document.twine.blankLine = function() {
    var append = $("#append");
    if (!document.twine.newPassage) {
        append.append("<br/>"); // Blank line between time events
        };
    document.twine.newPassage = false;
};

document.twine.initImage = function (imageFile, color) {
    var append = $("#append");
    var image = $("#image");
    image.css("background-color", color);
    image.css("height", "0");
    image.css("padding-bottom", "66.6%");
    image.append("<img src='" + document.twine.image_path + imageFile +"'>");
};

document.twine.randomColour = function () {
    var color = '#';
    var letters = ['0000CD', '0000FF', 'CD0000', 'FF0000', 'CD00CD', 'FF00FF', 
                   '00CD00', '00FF00', '00CDCD', '00FFFF', 'CDCD00', 'FFFF00', 
                   'CDCDCD', 'FFFFFF'];
    color += letters[Math.floor(Math.random() * letters.length)];
    return color;
};

document.twine.darkColour = function () {
    var color = '#';
    var letters = ['0000CD', 'CD0000', '00CD00'];
    color += letters[Math.floor(Math.random() * letters.length)];
    return color;
};

document.twine.brightColour = function () {
    var color = '#';
    var letters = ['CD00CD', '00CDCD', 'CDCD00', 'CDCDCD', 'CDCDCD'];
    color += letters[Math.floor(Math.random() * letters.length)];
    return color;
};

document.twine.chooseBackground = function (light) {
    // ZX Spectrum like colour backgrounds
    if (light === "bright") {
        return document.twine.brightColour();
    } else if (light === "dark"){
        return document.twine.darkColour();
    } else if (light === "black"){
        return document.body.style.background = "#000000";
    } else if (light === "red"){
        return document.body.style.background = "#CD0000";
    } else if (light === "blue"){
        return document.body.style.background = "#0000CD";
    } else if (light === "green"){
        return document.body.style.background = "#00CD00";
    } else if (light === "cyan"){
        return document.body.style.background = "#00CDCD";
    } else if (light === "magenta"){
        return document.body.style.background = "#CD00CD";
    } else if (light === "yellow"){
        return document.body.style.background = "#CDCD00";
    } else if (light === "white"){
        return document.body.style.background = "#CDCDCD";
    } else if (light === "bright_red"){
        return document.body.style.background = "#FF0000";
    } else if (light === "bright_blue"){
        return document.body.style.background = "#0000FF";
    } else if (light === "bright_green"){
        return document.body.style.background = "#00FF00";
    } else if (light === "bright_cyan"){
        return document.body.style.background = "#00FFFF";
    } else if (light === "bright_magenta"){
        return document.body.style.background = "#FF00FF";
    } else if (light === "bright_yellow"){
        return document.body.style.background = "#FFFF00";
    } else if (light === "bright_white"){
        return document.body.style.background = "#FFFFFF";
    } else {
        return document.twine.randomColour();
    };
};

document.twine.passageObjectUpdate = function (location) {
    // Find objects in this location
    var objects = document.twine.getLocationObjects(location).objects;
    
    // Hide or show passage text class (not id # as ther may be several changes) based on closed/open flag
    for (var index = 0; index < objects.length; ++index) {
        var object = objects[index];
        if (object.openClosed === "closed") {
            $(".open_" + object.uid).hide();
            $(".closed_" + object.uid).show();
                } else if (object.openClosed === "open") {
            $(".open_" + object.uid).show();
            $(".closed_" + object.uid).hide();
        };
    };
}

//
// Each game passage calls this
//
document.twine.eventLoop = function (light, imageFile, messageArray) {
    var append = $("#append");
    var color = document.twine.chooseBackground(light);
    var playerLocation = passage.name;
    document.twine.player.location = playerLocation;
    document.twine.updateVisitedScore(playerLocation);
    document.twine.newPassage = true;
    document.twine.waitMessageArray = messageArray;
    document.body.style.background = color;
    document.twine.initImage(imageFile, color);
    document.twine.showObjects();
    document.twine.showPlayer();
    append.append("<span id='decorator'>&nbsp;</span><br/>");
    document.twine.passageObjectUpdate(playerLocation);
    document.twine.resetEvent();
    document.twine.updateNPCs();
};

//
// Only used by The Mirk start page
//
document.twine.beginGame = function (light, imageFile) {
    var color = document.twine.chooseBackground(light);
    document.body.style.background = color;
    document.twine.initImage(imageFile, color);
};



