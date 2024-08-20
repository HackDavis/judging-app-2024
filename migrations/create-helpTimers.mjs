import HelpTimer from '../app/(api)/_schema/HelpTimer.mjs';

export async function up(db) {
  await db.createCollection('helpTimers', {
    validator: {
      $jsonSchema: HelpTimer,
    },
  });
}

export async function down(db) {
  await db.collection('helpTimers').drop();
}
