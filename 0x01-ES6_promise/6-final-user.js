import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => {
      for (const promise of result) {
        if (promise.status === 'rejected') {
          promise.value = `Error: ${promise.reason.message}`;
          delete promise.reason;
        }
      }
    });
}