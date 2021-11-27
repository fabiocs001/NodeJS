import { Pool } from 'pg';

const connectionString = 'Cole a string do server cloud aqui';



const db = new Pool ({ connectionString });

export default db;