import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDS2Kal1zIAhb75B_0Qx44BZvCgbVBWUro",
  authDomain: "itkl-799ca.firebaseapp.com",
  databaseURL: "https://itkl-799ca.firebaseio.com",
  projectId: "itkl-799ca",
  storageBucket: "itkl-799ca.appspot.com",
  messagingSenderId: "19765427118",
  appId: "1:19765427118:web:bd3f2c10ed280e62dae63f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export firestore
export const firestore = firebase.firestore();


// 1. get all features
export const getAllFeatures = async (limit) => {
  const featureArray = []
  const ref = firestore.collection('features')
  if (!limit) {
    const snapshot = await ref.get();
    snapshot.forEach(doc => featureArray.push(doc.data()))
  } else {
    const snapshot = await ref.limit(limit).get()
    snapshot.forEach(doc => featureArray.push(doc.data()))
  }
  return featureArray;
}

// 2. get single feature issue
export const getFeature = async (slug) => {
  const ref = firestore.doc(`features/${slug}`)
  return ref.get()
    .then(doc => doc.data())
    .catch(err => console.error(err))
}

export const getRealFeatures = async (slug) => {
  const realFeatureArray = []
  const ref = firestore.collection('features')
  const snapshot = await ref.where('1', '!=', '').get()
  snapshot.forEach(doc => {
      realFeatureArray.push(doc.data())
  })
  return realFeatureArray
}

// 3. get site content
export const getSiteContent = async () => {
  const ref = firestore.doc('siteContent/site-content')
  return ref.get()
    .then(doc => doc.data())
    .catch(err => console.error(err))
}

// 4. get legacy route(s) using slug
export const getLegacyRoutes = async (routeSlug) => {
  if (routeSlug) {
    const ref = firestore.doc(`legacyRoutes/${routeSlug}`)
    return ref.get()
      .then(doc => doc.data())
      .catch(err => console.error(err))
  }
  const legacyRoutesArray = []
  const ref = firestore.collection(`legacyRoutes`)
  const snapshot = await ref.get()
  snapshot.forEach(doc => {
    legacyRoutesArray.push(doc.data())
  })
  return legacyRoutesArray;
}

// 5. get placeholders
export const getPlaceholders = async () => {
  const placeholderArray = []
  const ref = firestore.collection('placeholders')
  const snapshot = await ref.get()
  snapshot.forEach(doc => {
    placeholderArray.push(doc.data())
  })
  return placeholderArray
}

// 6. get questions from specific set
export const getQuestionSet = async (set) => {
  const questionArray = []
  const ref = firestore.collection('questions')
  const snapshot = await ref.where('type', '==', set).get()
  snapshot.forEach(doc => {
    questionArray.push(doc.data())
  })
  return questionArray;
}
