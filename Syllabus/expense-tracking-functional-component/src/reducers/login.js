const initialState={
    email:'',
    password:'',
    flag:false
};

function login(state=initialState,action){
    switch(action.type){
        case 'success':
            return{
                ...state,
                ...action.payload
            }
       case 'failure':
           return{
            email:'',
            password:'',
            flag:false 
           }
       default:
           return {
               ...state
           }    
    }
}

export default login;