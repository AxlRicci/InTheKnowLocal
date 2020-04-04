const contactReducer = (state = {}, action) => {
    switch (action.type){
        case 'ADD_CONTACT':
            //console.log('Added Contact..', action.contact);
            return state;
        case 'ADD_CONTACT_ERROR':
            //console.log('Add Contact Error', action.err);
            return state;
        default:
            return state;
    }
}

export default contactReducer