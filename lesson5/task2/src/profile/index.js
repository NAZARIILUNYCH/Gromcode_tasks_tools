import { fetchUser } from './gateway';
import printProfile from './printProfile.js';

fetchUser('github').then(({ name, location }) =>
  printProfile({
    name,
    location,
  }),
);
//
