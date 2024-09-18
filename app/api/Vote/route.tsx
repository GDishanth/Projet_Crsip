"use server";
 
import { NextResponse } from "next/server";
import { open } from "sqlite";
import sqlite3 from "sqlite3";
 
export async function POST(req: Request) {
  // Get body request
  const body = await req.json();
  const {email, UserVote, dateVote} = body;
 
  // Call register function (see below)
  const response = await register(email, UserVote, dateVote);
 
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
  UserVote: string,
  dateVote: string,
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
  const sql = `INSERT INTO vote (email, UserVote, dateVote) VALUES (?, ?, ?)`;
  const insert = await db.get(sql, email, UserVote, dateVote);
 
  return insert; 
}
