import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import Hero from '../Hero/Hero';
import SignUp1 from '../SignUp/SignUp1/SignUp1';
import SignUp2 from '../SignUp/SignUp1/SignUp2';
import SignUp3 from '../SignUp/SignUp1/SignUp3';
import Attendence from '../Attendence/Attendence';


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Hero></Hero>,
            children: [
                {
                    path: '/',
                    element: <SignUp1></SignUp1>
                },
                {
                    path: '/signUp2',
                    element: <SignUp2></SignUp2>
                },
                {
                    path: '/signUp3',
                    element: <SignUp3></SignUp3>
                },
                {
                    path: '/login',
                    element: <LogIn></LogIn>
                }
            ]
        },
        {
                path: '/attendence',
                element: <Attendence></Attendence>
        }
    ])


export default router;