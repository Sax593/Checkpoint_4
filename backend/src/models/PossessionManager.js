const AbstractManager = require("./AbstractManager");

class PossessionManager extends AbstractManager {
  constructor() {
    super({ table: "Possession" });
  }

  insert(Possession) {
    return this.connection.query(
      `insert into ${this.table} (users_id, item_id, quantity) values (?,?,?)`,
      [Possession.user_id, Possession.item_id, Possession.quantity]
    );
  }

  update(Possession) {
    return this.connection.query(
      `update ${this.table} set item_id = ?, quantity = ? where users_id = ?`,
      [Possession.item_id, Possession.quantity, Possession.user_id]
    );
  }
}

module.exports = PossessionManager;
