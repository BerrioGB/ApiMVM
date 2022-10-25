import sql from "mssql";

const dbSettings = {
  user: "jovenesmvm",
  password: "0^618Bjt37y@",
  server: "sql-gestionsolicitudes-pdn-001.database.windows.net",
  database: "sqldb-gestionsolicitudes-pdn-001",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
}

export { sql };
