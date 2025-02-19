// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Las variables de entorno REACT_APP_SUPABASE_URL y REACT_APP_SUPABASE_ANON_KEY son requeridas.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);