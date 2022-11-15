const initialState = {
    countries: [],
  };
  
  const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case "SET_COUNTRY_LIST":{
            return{
                ...state,
                coutries: action.payload,
            }
        }

        default:
        return state;

    }      
    
  }
     
    
  export default rootReducer;