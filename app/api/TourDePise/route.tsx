"use server";
 
import { NextResponse } from "next/server";
import { open } from "sqlite";
import sqlite3 from "sqlite3";
 
export async function POST(req: Request) {
  // Get body request
  const body = await req.json();
  const {email, oeuvrevue, registration} = body;
 
  // Call register function (see below)
  const response = await register(email, oeuvrevue, registration);
 
  // If response is false
  if (response == false) {
    // Return an appropriate error message
    return NextResponse.json(
      { message: "User already exists" },
      { status: 403 }
    );
  }
 
  return NextResponse.json({ response });
}
 
async function register(
  
  email: string,
  oeuvrevue: string,
  registration: string
) {
  let db = null;
 
  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: process.env.DATABASE_NAME || "", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }

 
  // Insert the new user
  const sql = `INSERT INTO loginusers (email, oeuvrevu, registration) VALUES (?, ?, ?)`;
  const insert = await db.get(sql, email, oeuvrevue, registration);
 
  return insert; 
}


