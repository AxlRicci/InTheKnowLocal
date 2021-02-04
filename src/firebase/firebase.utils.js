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

// 7. Get suggested issues.
// Fetch 6 other issues that are not the slug.
export const getSuggestedIssues = async (slug) => {
  const ref = firestore.collection('features')
  const snapshot = await ref.where('slug', '!=', slug).limit(6).get()
  const suggestedIssues = []
  snapshot.forEach(doc => {
      suggestedIssues.push(doc.data())
  })
  return suggestedIssues
}

// 8. Organize interview questions and answers.
export const formatQuestions = async (feature) => {
  const fetchedFeatureKeys = Object.keys(feature);
  const questions = await getQuestionSet(feature.type)
  const sortedQuestions = questions.map(question => {
  const questionId = question.qid.replace(/[a-z]/,'')
  if (fetchedFeatureKeys.includes(questionId)) {
      return {id: questionId, question: question.desc, answer: feature[questionId]}
  }
  return null
  }).sort((a,b) => a.id - b.id)
  return sortedQuestions
}
