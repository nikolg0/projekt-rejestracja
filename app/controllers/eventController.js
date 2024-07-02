const Event = require("../models/Events");

module.exports = {
  index: (req, res) => {
    Event.find({})
      .lean()
      .then((events) => {
        res.render("eventViews/event", { events: events });
      })
      .catch((err) => {
        res.send(err);
      });
  },

  create: (req, res) => {
    const { name, event, city } = req.body;
    const newEvent = new Event({ name, event, city });
    console.log(req);
    newEvent
      .save()
      .then(() => {
        res.redirect("/new");
      })
      .catch((err) => {
        res.send(err);
      });
    console.log(req.body);
  },

  delete: (req, res) => {
    Event.findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect("/new");
      })
      .catch((err) => {
        res.send(err);
      });
    console.log("Pomyślnie usunięto użytkownika");
  },
};
