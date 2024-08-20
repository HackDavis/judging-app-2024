import Team from '../app/(api)/_schema/Team.mjs';

export async function up(db) {
  await db.createCollection('teams', {
    validator: {
      $jsonSchema: Team,
    },
  });
}

export async function down(db) {
  await db.collection('teams').drop();
}
