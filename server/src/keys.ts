import { IKeys } from "./interfaces";

const keys: IKeys = {
  pgUser: process.env.PGUSER as string,
  pgHost: process.env.PGHOST as string,
  pgDatabase: process.env.PGDATABASE as string,
  pgPassword: process.env.PGPASSWORD as string,
  pgPort: Number(process.env.PGPORT)
};

export default keys;
