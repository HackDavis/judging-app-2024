import { faker } from '@faker-js/faker';
import { ObjectId } from 'mongodb';
import tracks from '../app/(api)/_data/tracks.json' assert { type: 'json' };

function generateData(collectionName, numDocuments) {
  const specialties = ['tech', 'business', 'design'];
  const roles = ['judge', 'admin'];
  const fakeTracks = Array.from(
    { length: Math.ceil(Math.random() * 5) },
    () => tracks[Math.floor(Math.random() * tracks.length)].name
  );

  let data = [];
  if (collectionName === 'judges') {
    data = Array.from({ length: numDocuments }, () => ({
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      specialty: specialties[Math.floor(Math.random() * specialties.length)],
      judge_group_id: new ObjectId(),
      role: roles[Math.floor(Math.random() * roles.length)],
    }));
  } else if (collectionName === 'teams') {
    data = Array.from({ length: numDocuments }, () => ({
      number: faker.number.int({ min: 1, max: 1000 }),
      name: faker.lorem.word(),
      tracks: fakeTracks,
    }));
  } else if (collectionName === 'submissions') {
    data = Array.from({ length: numDocuments }, () => ({
      judge_id: new ObjectId(),
      team_id: new ObjectId(),
      scores: Array.from({ length: 5 }, () => Math.ceil(Math.random() * 5)),
      correlations: Array.from(fakeTracks, (fakeTrack) => ({
        track: fakeTrack,
        score: Math.ceil(Math.random() * 5),
      })),
      comments: faker.lorem.sentence(),
    }));
  }

  return data;
}

export default generateData;