import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, state } = body;

    // Validate required fields (basic validation)
    if (!firstName || !phone) {
      return NextResponse.json(
        { error: 'First name and Contact No are required.' },
        { status: 400 }
      );
    }

    // Prepare CSV data
    const timestamp = new Date().toISOString();
    // Escape commas and quotes for CSV
    const escapeCsv = (str: string) => {
      if (!str) return '';
      const stringified = String(str);
      if (stringified.includes(',') || stringified.includes('"') || stringified.includes('\n')) {
        return `"${stringified.replace(/"/g, '""')}"`;
      }
      return stringified;
    };

    const row = [
      timestamp,
      escapeCsv(firstName),
      escapeCsv(lastName),
      escapeCsv(email),
      escapeCsv(phone),
      escapeCsv(state)
    ].join(',') + '\n';

    // File path to store the leads
    const filePath = path.join(process.cwd(), 'leads.csv');

    // Check if file exists to write headers if it doesn't
    let fileExists = false;
    try {
      await fs.access(filePath);
      fileExists = true;
    } catch {
      fileExists = false;
    }

    const headers = 'Timestamp,First Name,Last Name,Email,Contact No,State\n';
    
    // Append to file
    if (!fileExists) {
      await fs.writeFile(filePath, headers + row, 'utf8');
    } else {
      await fs.appendFile(filePath, row, 'utf8');
    }

    return NextResponse.json({ success: true, message: 'Quote request saved successfully.' });
  } catch (error) {
    console.error('Error saving quote:', error);
    return NextResponse.json(
      { error: 'Failed to process request.' },
      { status: 500 }
    );
  }
}
