import JudgeGroupToTeam from '../app/(api)/_schema/JudgeGroupToTeam.mjs';

export async function up(db) {
  await db.createCollection('judgeGroupToTeams', {
    validator: {
      $jsonSchema: JudgeGroupToTeam,
    },
  });
}

export async function down(db) {
  await db.collection('judgeGroupToTeams').drop();
}
