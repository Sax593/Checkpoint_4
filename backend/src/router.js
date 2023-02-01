const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const usersControllers = require("./controllers/usersControllers");

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);
router.delete("/users/:id", usersControllers.destroy);

const possessionControllers = require("./controllers/possessionControllers");

router.get("/possession", possessionControllers.browse);
router.get("/possession/:id", possessionControllers.read);
router.put("/possession/:id", possessionControllers.edit);
router.post("/possession", possessionControllers.add);
router.delete("/possession/:id", possessionControllers.destroy);

module.exports = router;
