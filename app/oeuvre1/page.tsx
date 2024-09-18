"use client"

import { getSession } from "@/utils/sessions";
import Image from "next/image";
import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web";



export default function Oeuvre1() {

  const saveVisite = async () => {
    const session = await getSession()
    const now = new Date()
    fetch("/api/TourDePise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: session.email,
        /* savoir qui est sur la page*/
        oeuvrevue :'oeuvre 1',
        registration: now
      }),
    });
  }

  useEffect(() => {
    saveVisite()
  }, [])

  const vote = async() => {

    const session = await getSession()
    const now = new Date()
    fetch("/api/Vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: session.email,
        /* savoir qui est sur la page*/
        UserVote:'oeuvre 1',
        dateVote: now
      }),
    });

   
  }

  return (
    <>
      <h1>Oeuvre 1</h1>
      <button onClick={vote}>Voter</button>
    </>
  )
}
