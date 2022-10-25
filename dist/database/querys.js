"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getAllSolicitudes: "SELECT * FROM Solicitud",
  createNewSolicitud: "INSERT INTO Solicitud (Radicado, Descripcion, FechaSolicitud, FechaRespuesta, IDResponsable, CorreoSolicitante, NombreSolicitante, ApellidoSolicitante, TelefonoSolicitante, NombreEmpresa, IdTipoSolicitud, IDEstado)  VALUES (@Radicado, @Descripcion, @FechaSolicitud, null, null, @CorreoSolicitante, @NombreSolicitante, @ApellidoSolicitante, @TelefonoSolicitante, @NombreEmpresa, @IdTipoSolicitud, @IDEstado)",
  getSolicitudById: "SELECT * FROM Solicitud WHERE IDSolicitud = @IDSolicitud",
  updateSolicitud: "UPDATE Solicitud SET FechaRespuesta = @FechaRespuesta, IDResponsable = @IDResponsable, IDEstado = @IDEstado WHERE IDSolicitud = @IDSolicitud"
};
exports.queries = queries;