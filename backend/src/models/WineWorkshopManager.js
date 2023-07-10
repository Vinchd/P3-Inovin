const db = require("./index");

const createWineWorkshop = (selection) => {
  const {
    idworkshop1,
    idwine1,
    idworkshop2,
    idwine2,
    idworkshop3,
    idwine3,
    idworkshop4,
    idwine4,
    idworkshop5,
    idwine5,
  } = selection;
  const SQL =
    "INSERT INTO wine_workshop (id_workshop, id_wine) VALUES ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?)), ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?)), ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?)), ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?)), ((SELECT id FROM workshop WHERE id = ?),(SELECT id FROM wine WHERE id = ?));";
  return db.query(SQL, [
    idworkshop1,
    idwine1,
    idworkshop2,
    idwine2,
    idworkshop3,
    idwine3,
    idworkshop4,
    idwine4,
    idworkshop5,
    idwine5,
  ]);
};

module.exports = {
  createWineWorkshop,
};
