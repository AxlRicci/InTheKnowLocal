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

/* Caching system.
What it does:
  1. Adds new article data to the local storage.
  2. Checks the local storage before fetching data from Firestore.
  3. Creates an array of slugs that are available within the local storage (so the array can be used when querying firestore)
*/

const itklDataCache = {
  features: [],
  placeholders: [],
  siteContent: [],
  questions: [],
}

export const initCache = () => {
  const itklData = localStorage.getItem('itkl-data');
  if (!itklData) {
    localStorage.setItem('itkl-data', JSON.stringify(itklDataCache))
  }
}

// determines what items are in the cache.
const checkCache = (type) => {
  const itklData = localStorage.getItem('itkl-data');
  if (itklData && JSON.parse(itklData)[type].length > 0) {
    return JSON.parse(itklData)[type].reduce((acc, cur) => {
      if (!acc.some(item => item.slug === cur.slug)) {
        acc.push(cur)
        return acc
      }
      return acc
    },[])
  }
  return []
}

// add newly fetched data to the cache.
const mergeCache = (type, fetchedData) => {
  const itklData = localStorage.getItem('itkl-data');
  if (itklData) {
    const currentCache = JSON.parse(itklData);
    const joinedTypeData = [...currentCache[type], ...fetchedData];
    const updatedTypeData = joinedTypeData.reduce((acc, cur) => {
      if (!acc.some(item => item.slug === cur.slug)) {
        acc.push(cur)
        return acc
      }
      return acc
    },[])

    const updatedCache = {
      ...currentCache,
      [type]: updatedTypeData
    }
    localStorage.setItem('itkl-data', JSON.stringify(updatedCache))
  } else {
    initCache()
  }
}

// 1. get all features
export const getAllFeatures = async (limit) => {
  const featureArray = []
  const ref = firestore.collection('features')
  const snapshot = await ref.limit(limit).get();
  snapshot.forEach(doc => featureArray.push(doc.data()))
  return featureArray
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

export const getSuggestedIssues = async (slug) => {
  const ref = firestore.collection('features')
  const snapshot = await ref.where('slug', '!=', slug).limit(6).get()
  const suggestedIssues = []
  snapshot.forEach(doc => {
      suggestedIssues.push(doc.data())
  })
  return suggestedIssues
}
