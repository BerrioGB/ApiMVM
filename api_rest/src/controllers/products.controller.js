import { getConnection, sql } from "../database/connection"

   export const getProducts = async (req,res) => {

    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM Solicitud')
    res.json(result.recordset)
   }

   export const createNewProduct = async (req,res) => {
      const { Radicado, Descripcion, FechaSolicitud, FechaRespuesta, IDResponsable, CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud, IDEstado } = req.body
      /*if (IDResponsable == null || Cargo==null || NombreResponsable==null || CorreoResponsable==null)
      {
         return res.status(400).json({msg:'Bad request. Rellene todos los campos'})
      }
      */
      const pool = await getConnection();

      const result = await pool 
      .request()
      .input('Radicado', sql.VarChar, Radicado)
      .input('Descripcion', sql.VarChar, Descripcion)
      .input('FechaSolicitud', sql.DateTime, FechaSolicitud)
      .input('FechaRespuesta', sql.DateTime, FechaRespuesta)
      .input('IDResponsable', sql.Int, IDResponsable)
      .input('CorreoSolicitante', sql.VarChar, CorreoSolicitante)
      .input('NombreSolicitante', sql.VarChar, NombreSolicitante)
      .input('ApellidoSolicitante', sql.VarChar, ApellidoSolicitante)
      .input('TelefonoSolicitante', sql.VarChar, TelefonoSolicitante)
      .input('NombreEmpresa', sql.VarChar, NombreEmpresa)
      .input('IdTipoSolicitud', sql.Int, IdTipoSolicitud)
      .input('IDEstado', sql.Int, IDEstado)
      .query(
         'INSERT INTO Solicitud (Radicado, Descripcion, FechaSolicitud, FechaRespuesta, IDResponsable, CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud, IDEstado)  VALUES (@Radicado, @Descripcion, @FechaSolicitud, null, null, @CorreoSolicitante, @NombreSolicitante, @ApellidoSolicitante, @TelefonoSolicitante, @NombreEmpresa, @IdTipoSolicitud, @IDEstado)')
      
         res.json(
            {Radicado, Descripcion, FechaSolicitud, FechaRespuesta, IDResponsable, CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud, IDEstado} )
     console.log(result)

   }
