export const initialState = {
    toggleProfile: false,
    toggleToast: false,
    bookmarkModal: false,
    jobId: "",
    jobs: {},
}



const reducer = (state, action) => {



    if (action.type == "TOGGLE_PROFILE") {
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
        console.log(action.payload)
        return {
            state,
            jobId: action.payload
        }
    }
    if (action.type === "JOBS") {
        return {
            state,
            jobs: action.payload
        }
    }
}

export default reducer