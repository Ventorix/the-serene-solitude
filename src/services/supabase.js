import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://cdxnrefzaqylhufxlsbs.supabase.co';

const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkeG5yZWZ6YXF5bGh1Znhsc2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyODkzOTUsImV4cCI6MjAxMTg2NTM5NX0.mGvg_iLiH2UFZAeBI0rY123Rn0QdvGU4Dxp4JcTHh1I';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
