import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Updated Supabase service
@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://zfmpkgvfucvknvrsokix.supabase.co', // Supabase URL
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmbXBrZ3ZmdWN2a252cnNva2l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5OTkwNzgsImV4cCI6MjA0MTU3NTA3OH0.mkfjj4Jj4M5gHZl7dFepCSnWnFq-Nc1nwBsSNIJMspY' // Supabase Anon Key
    );
  }

  // Function to insert a response into the 'responses' table
  async insertResponse(answer: string) {
    const { data, error } = await this.supabase
      .from('responses')
      .insert([{ answer }]) // Insert the task/answer
      .select(); // Select the inserted data

    if (error) {
      console.error('Error inserting response:', error);
    } else {
      console.log('Response added:', data);
    }

    return data; // Return inserted data
  }

  // Function to fetch all distinct activities (answers) from the 'responses' table
  async getDistinctActivities() {
    const { data: responses, error } = await this.supabase
      .from('responses')
      .select('answer'); // Select only the 'answer' field

    if (error) {
      console.error('Error fetching distinct activities:', error);
      return [];
    }

    return responses; // Return fetched data
  }

  // Function to fetch all responses for graphing purposes
  async getAllResponses() {
    const { data: responses, error } = await this.supabase
      .from('responses')
      .select('*'); // Fetch all columns from the 'responses' table

    if (error) {
      console.error('Error fetching responses:', error);
      return [];
    }

    return responses; // Return fetched data
  }
}
