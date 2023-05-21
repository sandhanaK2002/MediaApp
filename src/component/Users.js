import {fetchUsers} from "../store"
import {useEffect} from "react"
import {useDispatch , useSelector} from "react-redux"


export const Users = () =>{
    const dispatch =  useDispatch()

    const {isLoading , data , error} = useSelector((state)=>{
          return state.users 
    })


   

    useEffect(()=>{
        dispatch(fetchUsers())
        
    },[])


    if(isLoading){
       
    }

    if (error){
        return <div>error fetching...........</div>
    }
   
}