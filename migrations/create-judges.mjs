import Judge from '../app/(api)/_schema/Judge.mjs';

export async function up(db) {
  await db.createCollection('judges', {
    validator: {
      $jsonSchema: Judge,
    },
  });
}

export async function down(db) {
  await db.collection('judges').drop();
}
