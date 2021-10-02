import axios from "axios";
import { createContext, useState, useEffect } from "react";
import ProductsAPI from "./api/ProductsAPI";
import UserAPI from "./api/UserAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  // useEffect(() =>{
  //     const firstLogin = localStorage.getItem('firstLogin')
  //     if(firstLogin){
  //         const refreshToken = async () =>{
  //             const res = await axios.get('/user/refresh_token')

  //             setToken(res.data.accesstoken)

  //             setTimeout(() => {
  //                 refreshToken()
  //             }, 10 * 60 * 1000)
  //         }
  //         refreshToken()
  //     }
  // },[])

  const refreshToken = async () => {
    const res = await axios.get("/user/refresh_token");

    setToken(res.data.accesstoken);
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) refreshToken();
  });

  const state = {
    token: [token, setToken],
    productsAPI: ProductsAPI(),
    userAPI: UserAPI(token),
    //     categoriesAPI: CategoriesAPI()
  };

  ProductsAPI();

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
