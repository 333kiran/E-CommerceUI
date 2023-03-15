import axios from 'axios';

const URL = "";

 export const authenticateSignup = async (data) => {
    try {
       return await axios.post(`${URL}/signup`, data)
    } catch (error){
        console.log("error while calling signup", error);
    }
 }


 export const authenticateLogin = async (data) => {
   try {
      return await axios.post(`${URL}/login`, data)
   } catch (error){
       console.log("error while calling login", error);
       return error.response;
   }
}

export const payWithPaytm = async (data) => {
   try {
     let res =  await   axios.post(`${URL}/payment`, data)
       return res.data;
   } catch(error){
      console.log('error while calling payment api', error)
   }
}