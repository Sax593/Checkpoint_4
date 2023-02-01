const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "item" });
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (name, type, pictures, description) values (?,?,?,?)`,
      [item.name, item.type, item.pictures, item.description]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set name = ?, type = ?, pictures = ?, description = ? where id = ?`,
      [item.name, item.type, item.pictures, item.description, item.id]
    );
  }
}

module.exports = ItemManager;
