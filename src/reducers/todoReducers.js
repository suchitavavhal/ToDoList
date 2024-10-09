const initialData={
    list:[
        {
            id:new Date().getTime().toString() + '1',
            data:'Get Groceries'
        },
        {
            id:new Date().getTime().toString() + '2',
            data:'Schedule Meetings'
        },
        {
            id:new Date().getTime().toString() + '3',
            data:'Assignment Check'
        },

]
}

const todoReducers = (state= initialData, action)=>{
    switch(action.type){
        case 'ADD_TODO':{
          const {id, data}= action.payload;


            return{
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        }

        case 'DELETE_TODO':{
            const newList= state.list.filter((element)=> element.id !== action.id)
  
  
              return{
                  ...state,
                  list: newList
              }
          }
          case 'REMOVE_TODO':{
        
              return{
                  ...state,
                  list: []
              }
          }
        default: return state;
    }

}

export default todoReducers;