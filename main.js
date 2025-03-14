// POO
class Partners {
    static id = 0;
    constructor(id, name, surname, dni, email, equipment, levelOfKnowledge) {
        this.id = Partners.id++;
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.email = email;
        this.equipment = equipment;
        this.levelOfKnowledge = levelOfKnowledge;

    }
    add() { }
    del() { }
    mod() { }
}

class Event {
    constructor(idEvent, activity, calendar) {
        this.idEvent = idEvent;
        this.activity = activity;
        this.calendar = calendar;
        this.assistants = [];
    }
    addAssistants(assistant) {
        if(assistant.levelOfKnowledge >= this.activity.minLevelOfKnowledge) {
            this.assistants.push(assistant);
        }
    }
}

class Calendar {
    constructor(date, hour, location, meteorologicPrevision, lunarPhase) {
        this.date = date;ad
        this.hour = hour;
        this.location = location;
        this.meteorologicPrevision = meteorologicPrevision;
        this.lunarPhase = lunarPhase;
    }

}

class Activity {
    constructor( neededEquipment, minLevelOfKnowledge, celestialObjects) {
        this.neededEquipment = neededEquipment;
        this.minLevelOfKnowledge = minLevelOfKnowledge;
        this.celestialObjects = celestialObjects;

        this.types = new Type(["observaciones nocturnas", "charlas divulgativas", "talleres practicos", "salidas"]);
        this.type = this.types[0];
    }

    setTypeOfActivity(nameOfActivity) {
        for(let i of this.types) {
            if(i == nameOfActivity) {
                this.types = i;
            }
        }

    }

    addTypeOfActivity(newActivityType) {
        this.types.push(newActivityType);
    }

    deleteTypeOfActivity(activityTypeId) {
        //Delete Activity
    }

}

class CelestialObject {
    constructor(idCelestialObject, name, hasBeenSeen) {
        this.idCelestialObject = idCelestialObject;
        this.name = name;
        this.hasBeenSeen = false;
    }

}

class Type {
    constructor(listOfNames) {
        this.listOfNames = listOfNames;
    }
}

