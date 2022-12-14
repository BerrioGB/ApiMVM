import { rows } from "mssql";
import { getConnection, sql, queries } from "../database";

export const getSolicitud = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllSolicitudes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewSolicitud = async (req, res) => {
  const {
    Radicado,
    Descripcion,
    FechaSolicitud,
    FechaRespuesta,
    IDResponsable,
    CorreoSolicitante,
    NombreSolicitante,
    ApellidoSolicitante,
    TelefonoSolicitante,
    NombreEmpresa,
    IdTipoSolicitud,
    IDEstado,
  } = req.body;
  /*if (IDResponsable == null || Cargo==null || NombreResponsable==null || CorreoResponsable==null)
      {
         return res.status(400).json({msg:'Bad request. Rellene todos los campos'})
      }
      */

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Radicado", sql.VarChar, Radicado)
      .input("Descripcion", sql.VarChar, Descripcion)
      .input("FechaSolicitud", sql.DateTime, FechaSolicitud)
      .input("FechaRespuesta", sql.DateTime, FechaRespuesta)
      .input("IDResponsable", sql.Int, IDResponsable)
      .input("CorreoSolicitante", sql.VarChar, CorreoSolicitante)
      .input("NombreSolicitante", sql.VarChar, NombreSolicitante)
      .input("ApellidoSolicitante", sql.VarChar, ApellidoSolicitante)
      .input("TelefonoSolicitante", sql.VarChar, TelefonoSolicitante)
      .input("NombreEmpresa", sql.VarChar, NombreEmpresa)
      .input("IdTipoSolicitud", sql.Int, IdTipoSolicitud)
      .input("IDEstado", sql.Int, IDEstado)
      .query(queries.createNewSolicitud);
    res.json({
      Radicado,
      Descripcion,
      FechaSolicitud,
      FechaRespuesta,
      IDResponsable,
      CorreoSolicitante,
      NombreSolicitante,
      ApellidoSolicitante,
      TelefonoSolicitante,
      NombreEmpresa,
      IdTipoSolicitud,
      IDEstado,
    });
    console.log(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getSolicitudById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("IDSolicitud", id)
      .query(queries.getSolicitudById);
    res.send(result.recordset[0]);
    console.log(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateSolicitud = async (req, res) => {
  const { FechaRespuesta, IDResponsable, IDEstado } = req.body;
  const { id } = req.params;

  if (IDResponsable == null || IDEstado == null) {
    IDResponsable == "";
    IDEstado = "";
  }
  if (FechaRespuesta == null) {
    FechaRespuesta = "2020-20-22 20:20:20.000";
  }

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("FechaRespuesta", sql.Date, FechaRespuesta)
    .input("IDResponsable", sql.Int, IDResponsable)
    .input("IDEstado", sql.Int, IDEstado)
    .input("IDSolicitud", sql.Int, id)
    .query(queries.updateSolicitud);
  console.log(result);

  res.json({ FechaRespuesta, IDResponsable, IDEstado });
};
