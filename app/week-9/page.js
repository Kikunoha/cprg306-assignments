"use client";
import { useUserAuth } from "./_utils/auth-context";
import { useState,useEffect } from "react";
import { redirect } from 'next/navigation'
import Link from 'next/link'
 

export default function Page()
{
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    const signInAndOut = async () => {
        if(user === null){
          await gitHubSignIn();
        }
        if(user){
          await firebaseSignOut();
        }
    };

    if (user){
        return (
            <main className="flex-1">
                <p className="pl-4 text-xl font-bold">Welcome, {user.displayName} ({user.email})</p>
                <Link className="flex p-4 m-4 border rounded-md bg-teal-400 text-xl font-bold w-40" href={{pathname:'/week-9/shopping-list'}}>Open Page</Link>
                <button className="flex p-4 m-4 border rounded-md bg-teal-400 text-xl font-bold w-40" onClick={signInAndOut}>Logout</button>
            </main>
        );
    } else {
        return (
            <main className="flex-1">
                <p className="pl-4 text-xl font-bold">Welcome, please login.</p>
                <button className="flex p-4 m-4 border rounded-md bg-teal-400 text-center text-xl font-bold w-40" onClick={signInAndOut}>Login</button>
            </main>
        );
    }
};