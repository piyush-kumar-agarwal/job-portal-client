import {configureStore} from '@reduxjs/toolkit';
import  useRegister from '../Redux/Slices/User/registerSlice';
import userLogin from './Slices/User/loginSlice';
import userMe  from './Slices/User/loadUser';
import newJob from './Slices/Jobs/newJob';
import getAllJobs from './Slices/Jobs/getAllJobs';
import getJob from './Slices/Jobs/getJob';
import allUser from './Slices/User/getAllUser';
import applyJob from './Slices/ApplyJob/apply';
import fetchUser from './Slices/User/getUser';
import upadetUser from './Slices/User/updateProfile'
const Store = configureStore({
    reducer:{
        useRegister,
        userLogin,
        userMe,
        newJob,
        getAllJobs,
        getJob,
        allUser,
        applyJob,
        fetchUser,
        upadetUser
        
    }
});

export const BASE_URL = "https://job-portal-backend-z4qx.onrender.com";
export default Store;