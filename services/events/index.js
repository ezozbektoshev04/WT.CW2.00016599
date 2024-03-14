const fs = require("fs");
const events = require(global.mock_db);
const eventService = {
  gettingAllEvents() {
    return events;
  },
  gettingEventById(id) {
    return events.find((e) => e.id == id);
  },

  creatingNewEvent(req, res) {
    const newEvent = {
      id: genRandomId(6),
      event: req.body,
    };
    events.push(newEvent);
    writeToFile(events);
    return newEvent;
  },
  updatingEvent(id, updateData) {
    const findEventIndex = events.findIndex((e) => e.id == id);
    if (findEventIndex === -1) return null;

    events[findEventIndex].event = {
      ...events[findEventIndex].event,
      ...updateData,
    };
    writeToFile(events);
    return events[findEventIndex];
  },

  deletingEvent(id) {
    const eventIndex = events.findIndex((e) => e.id == id);
    events.splice(eventIndex, 1);
    writeToFile(events);
  },
};

let writeToFile = async (users) => {
  await fs.writeFileSync(
    global.mock_db,
    JSON.stringify(users, null, 4),
    "utf8"
  );
};

let genRandomId = (count) => {
  let randomId = "";
  const idCharacters = "ABCDEFGabcdefg0123456789";
  const idCharactersLength = idCharacters.length;
  for (let i = 0; i < count; i++) {
    randomId += idCharacters.charAt(
      Math.floor(Math.random() * idCharactersLength)
    );
  }
  return randomId;
};
module.exports = eventService;
