
import * as admin from "firebase-admin"

admin.initializeApp({
    credential: admin.credential.cert(require("../../cert.json"))
});

export const persistenceFirestore = admin.firestore()