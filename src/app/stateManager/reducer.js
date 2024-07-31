export const initialState = {
  toggleProfile: false,
  toggleToast: false,
  bookmarkModal: false,
  personalizeModal: false,
  jobId: "",
  jobs: {},
  userPreferences: {}
};

const reducer = (state, action) => {
  if (action.type == "TOGGLE_PROFILE") { 
    return {
      ...state,
      toggleProfile: action.payload,
    };
  }

  if (action.type == "SAVE_JOB") {
    return {
      ...state,
      toggleToast: action.payload,
    };
  }

  if (action.type === "PROMPT_USER") {
    return {
      ...state,
      bookmarkModal: action.payload,
    };
  }

  if (action.type === "REMOVE_JOB") {
    return {
      ...state,
      jobId: action.payload,
    };
  }
  if (action.type === "JOBS") {
    return {
      ...state,
      jobs: action.payload,
    };
  }

  if (action.type === "PERSONALIZE_MODAL") {
    return {
      ...state,
      personalizeModal: action.payload,
    };
  }

  if(action.type === "USER_PREFERENCES") {
    return {
      ...state,
      userPreferences: action.payload
    }
  }
};

export default reducer;
