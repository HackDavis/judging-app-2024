import JudgeGroup from '../app/(api)/_schema/JudgeGroup.mjs';

export async function up(db) {
  await db.createCollection('judgeGroups', {
    validator: {
      $jsonSchema: JudgeGroup,
    },
  });
}

export async function down(db) {
  await db.collection('judgeGroups').drop();
}
