const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "Users" });
  }

  insert(Users) {
    return this.connection.query(
      `insert into ${this.table} (pseudo, password) values (?, ?)`,
      [Users.pseudo, Users.password]
    );
  }

  update(Users) {
    return this.connection.query(
      `update ${this.table} set pseudo = ? where id = ?`,
      [Users.pseudo, Users.id]
    );
  }
}

module.exports = UsersManager;
