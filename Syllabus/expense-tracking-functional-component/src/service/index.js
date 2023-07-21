
const login ={
    loadSuccess:function(dispatch,list){
        dispatch({
            type:"success",
            payload:list
        })
    },
    failure:function(dispatch){
        dispatch({
            type:'failure',
            payload:{}
        })
    }

};

export default login;