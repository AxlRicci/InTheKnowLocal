export const addContact = (contact) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('contact').add({
            ...contact,
            submittedAt: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_CONTACT', contact });
        }).catch((err)=>{
            dispatch({ type: 'ADD_CONTACT_ERROR', err});
        })
    }
};