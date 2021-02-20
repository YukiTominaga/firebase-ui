import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.createKarteId = functions.auth.user().onCreate(async (user) => {
  const app = admin.initializeApp();
  console.log(app);
  try {
    await admin.firestore().collection("users").add({user: user.uid});
  } catch (err) {
    console.error(err);
  }
});
