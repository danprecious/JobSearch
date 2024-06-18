export const initialState = {
    toggleProfile: false,
    toggleToast: false,
    bookmarkModal: false,
    jobId: ""
}



const reducer = (state, action) => {



    if (action.type == "TOGGLEPROFILE") {
        return {
            ...state,
            toggleProfile: action.payload
        }
    }

    if (action.type == "SAVE_JOB") {
        return {
            ...state,
            toggleToast: action.payload
        }
    }

    if (action.type === "PROMPT_USER") {
        return {
            ...state,
            bookmarkModal: action.payload
        }
    }

    if (action.type === "REMOVE_JOB") {
        return {
            state,
            job: action.payload
        }
    }

}

export default reducer