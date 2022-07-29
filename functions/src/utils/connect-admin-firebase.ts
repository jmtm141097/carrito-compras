import * as admin from 'firebase-admin'
import { ServiceAccount } from 'firebase-admin'
import cert from '../../cert.json'

admin.initializeApp({
  credential: admin.credential.cert(cert as ServiceAccount)
})

export const persistenceFirestore = admin.firestore()
