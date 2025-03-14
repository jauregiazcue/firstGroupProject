class Event {
    static id = 0;

    //Constructs Event, using an Activity class variable and a Calendar class variable
    constructor(activity, calendar) {
        this.idEvent = Event.id++;
        this.activity = activity;
        this.calendar = calendar;
        this.partners = [];
    }
    //Adds a Partner class variable to a list if their knowledge is iqual or bigger than the activities minimum knowledge
    addAssistants(partner) {
        if (partner.levelOfKnowledge >= this.activity.minLevelOfKnowledge) {
            this.partners.push(partner);
        }
    }

    celestialObjectSeen(nameOfCelestial) {
        for (let c of this.activity.celestialObjects) {
            if (c.name == nameOfCelestial) {
                c.hasBeenSeen = true;
            }
        }
    }

    requeriedEquipment() {
        //Need to do
    }
    //Use to console.log some of the Even information
    log() {
        console.log(`Event ${this.idEvent}`);
        console.log(`Activity \n Needed Equipment ${this.activity.neededEquipment} \n Min of Knowledge ${this.activity.minLevelOfKnowledge} \n Celestial Objects `);
        for (let i = 0; i < this.activity.celestialObjects.length; i++) {
            console.log("\tCelestial Object : " + this.activity.celestialObjects[i].name + "  Has been seen : " + this.activity.celestialObjects[i].hasBeenSeen);
        }
        console.log("Partners");
        for (let i = 0; i < this.partners.length; i++) {
            console.log("\t" + this.partners[i].name);
        }
    }
}


class Activity {
    //Constructor of Activity
    //sets the list of the equipments that are needed for this activity
    //sets the min knowledge for this activity for the partners
    //sets the celestial objects that we want to see in the activity
    constructor(neededEquipment, minLevelOfKnowledge, celestialObjects) {
        this.neededEquipment = neededEquipment;
        this.minLevelOfKnowledge = minLevelOfKnowledge;
        this.celestialObjects = celestialObjects;


        this.types = new Type(["observaciones nocturnas", "charlas divulgativas", "talleres practicos", "salidas"]);
        this.type = this.types[0];
    }

    //Sets the type of activity we are going to do
    setTypeOfActivity(nameOfActivity) {
        if (this.types.listOfNames.includes(nameOfActivity)) {
            this.type = nameOfActivity;
        }
    }
    //add a type the activity CAN be
    addTypeOfActivity(newActivityType) {
        this.types.push(newActivityType);
    }

    //delete a type the activity COULD be
    deleteTypeOfActivity(activityTypeId) {
        //Delete Activity
    }

}

class Partner {
    static id = 0;
    //Sets different strings like name, surname, dni and email
    // Sets a list of equipment the Partner has
    // Sets the level of knowledge the partner has
    constructor(name, surname, dni, email, equipment, levelOfKnowledge) {
        this.id = Partner.id++;
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.email = email;
        this.equipment = equipment;
        this.levelOfKnowledge = levelOfKnowledge;


    }
}

class Calendar {
    //sets different information for the calendar, very easy to understand
    constructor(date, hour, location, meteorologicPrevision, lunarPhase) {
        this.date = date;
        this.hour = hour;
        this.location = location;
        this.meteorologicPrevision = meteorologicPrevision;
        this.lunarPhase = lunarPhase;
    }


}

class CelestialObject {
    static id = 0;
    //Constructor of Celestial Objects, sets the name and hasBeenSeen to false
    constructor(name) {
        this.idCelestialObject = CelestialObject.id++;
        this.name = name;
        this.hasBeenSeen = false;
    }

    celestialSeen() {
        this.hasBeenSeen = true;
    }
}

class Type {
    constructor(listOfNames) {
        this.listOfNames = listOfNames;
    }
}

function example() {
    let partners = [];
    partners.push(new Partner("Marta", "Jimenez Perez", "54768576U", "antonio@gmail.com", ["telescopio", "tripode"], 1));
    partners.push(new Partner("Pedro", "Suarez Jimene", "45345678L", "pedro@gmail.com", ["camara CCD"], 3));
    partners.push(new Partner("Antonio", "Jimenez Tejera", "45563423E", "luis@gmail.com", ["telescopio", "tripode"], 2));

    let calendar = new Calendar("19-09-2025", "17:00", "Valencia", "sunny", "full");


    let celestialObjects = [];
    celestialObjects.push(new CelestialObject("pluton"));
    celestialObjects.push(new CelestialObject("mars"));
    celestialObjects.push(new CelestialObject("nebulosas"));
    celestialObjects.push(new CelestialObject("sol"));

    let activity = new Activity(["telescopio", "saco de dormir"], 2, celestialObjects);
    activity.setTypeOfActivity("observaciones nocturnas");


    let moonEvent = new Event(activity, calendar);
    for (let i of partners) {
        moonEvent.addAssistants(i);
    }
    moonEvent.celestialObjectSeen("pluton");
    moonEvent.log();
}

example();