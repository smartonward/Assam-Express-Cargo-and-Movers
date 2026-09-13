const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://cqztbemtfvysmhktocop.supabase.co';
const supabaseAnonKey = 'sb_publishable_OmuPgs8ZSxhMH5_rJlrZbQ_afjuKPDq';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  const { data, error } = await supabase
    .from('quotes')
    .insert([
      {
        first_name: 'Test',
        last_name: 'User',
        email: 'test@example.com',
        phone: '1234567890',
        state: 'TestState'
      }
    ]);

  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Success:', data);
  }
}

test();
