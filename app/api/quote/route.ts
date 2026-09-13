import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, state, additionalInfo } = body;

    // Validate required fields
    if (!firstName || !phone) {
      return NextResponse.json(
        { error: 'First name and Contact No are required.' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    // We assume there is a table called "quotes"
    const { data, error } = await supabase
      .from('quotes')
      .insert([
        {
          first_name: firstName,
          last_name: lastName || null,
          email: email || null,
          phone: phone,
          state: state || null,
          additional_info: additionalInfo || null,
        }
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true, message: 'Quote request saved to database successfully.' });
  } catch (error: any) {
    console.error('Error saving quote:', error);
    return NextResponse.json(
      { error: 'Failed to process request.' },
      { status: 500 }
    );
  }
}
