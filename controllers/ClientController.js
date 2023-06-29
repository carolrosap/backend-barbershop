const UserController = require("./UserController");
const { User } = require("../models/");

class ClientController extends UserController {
  async getAllClients(req, res) {
    try {
      const clients = await User.findAll({
        where: {
          user_type: "client",
          active: 1,
        },
      });
      res.json(clients);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getClient(req, res) {
    const { chat_id } = req.query;
    try {
      const client = await User.findOne({
        where: {
          chat_id: chat_id,
          user_type: "client",
          active: 1,
        },
      });

      if (client) {
        res.json(client);
      } else {
        res.status(200).json({ error: "Client Not Found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createClient(req, res) {
    try {
      const clientData = req.body;
      clientData.user_type = "client";
      const newClient = await User.create(clientData);
      //console.log('created =========', newClient)
      res.status(201).json(newClient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // async testeCallback(req, res) {
  //   res.status(200).json(req.body);
  // }
}

module.exports = ClientController;
