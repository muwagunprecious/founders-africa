import pg from 'pg';

const connectionString = "postgresql://postgres.fmftcjrjzlhtcjstvklu:dtee00DIgf5V2qnU@aws-1-eu-west-2.pooler.supabase.com:5432/postgres";

const client = new pg.Client({ connectionString });

async function main() {
  await client.connect();
  console.log("Connected to Supabase PostgreSQL database successfully.");

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS "waitlist_entries" (
        "id" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "email" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT "waitlist_entries_pkey" PRIMARY KEY ("id")
    );

    CREATE UNIQUE INDEX IF NOT EXISTS "waitlist_entries_email_key" ON "waitlist_entries"("email");
  `;

  await client.query(createTableQuery);
  console.log("SUCCESS: Table 'waitlist_entries' created or already exists safely without modifying any existing tables!");

  const res = await client.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';`);
  console.log("Database tables count:", res.rows.length);
  console.log("Database tables:", res.rows.map(r => r.table_name).join(', '));

  await client.end();
}

main().catch(err => {
  console.error("Database setup error:", err);
  process.exit(1);
});
