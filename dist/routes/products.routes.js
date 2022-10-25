"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controller");

var router = (0, _express.Router)();
router.get("/products/solicitudes", _products.getSolicitud);
router.post("/products/create", _products.createNewSolicitud);
router.put("/products/update/:id", _products.updateSolicitud);
router.get("/products/edit/:id", _products.getSolicitudById);
var _default = router;
exports["default"] = _default;