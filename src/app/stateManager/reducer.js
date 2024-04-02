

export const reducer = (state, action) => {
  
  
  
  
    if (action.type == "TOGGLEPROFILE"){
       return{ 
           ...state,
        toggleProfile : action.payload
       }

    }

    if (action.type == "SAVEJOB"){
        return{
            ...state,
        
        }
    }
}