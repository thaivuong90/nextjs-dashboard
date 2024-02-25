import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';

let serviceAccount = require('../../app/lib/cqb-vn-6c3ac-firebase-adminsdk-p5mqo-3553651c4a.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const getUserInfo = async (uid: string) => {
  const userRecord = await getAuth().getUser(uid);
  return userRecord ? userRecord : null;
};

const updatePassword = async (uid: string, password: string) => {
  return null;
}

export {
  getUserInfo,
  updatePassword
};
