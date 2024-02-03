// The first letter of this file name is lower case, which is generally the case when we are not exporting a React component from the file.

import { CAMPSITES } from '../../app/shared/CAMPSITES';


// the selectAllCampsites function is a selector function that returns the entire array of campsites from the CAMPSITES array.
export const selectAllCampsites = () => {
    return CAMPSITES;
};

// Line13: this arrow function returns a single random campsite from the CAMPSITES array
// Line 14: Inside the function, this line generates a random index by multiplying the length of the CAMPSITES array by a random number (between 0 and 1) using Math.random(). The result is then rounded down to the nearest integer using Math.floor().
// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())]; 
// };

// The function on line 13 was removed because it was tied to the random button that was a stepping stone in the coding project. I am keeping it because it explains math.floor and math.random.

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id);
};