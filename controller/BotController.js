const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {

    async introduction(request) {
      await this.deleteState();
      return this.reply("Halo")
    }

}