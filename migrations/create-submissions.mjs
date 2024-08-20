import Submission from '../app/(api)/_schema/Submission.mjs';

export async function up(db) {
  await db.createCollection('submissions', {
    validator: {
      $jsonSchema: Submission,
    },
  });
}

export async function down(db) {
  await db.collection('submissions').drop();
}
