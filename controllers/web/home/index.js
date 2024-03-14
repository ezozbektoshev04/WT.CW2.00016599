const eventService = require("../../../services/events");
const homeController = {
  index: async (req, res) => {
    res.render("home");
  },
  update: async (req, res) => {
    let id = req.params.id;
    const eventData = await eventService.gettingEventById(id);
    res.render("home/addUpdate", { mode: "Update", eventData: eventData });
  },
  add: async (req, res) => {
    res.render("home/addUpdate", { mode: "Add" });
  },
};

module.exports = homeController;
