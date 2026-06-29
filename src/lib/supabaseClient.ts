import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://pfyzmfebaqnzihsryflp.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmeXptZmViYXFuemloc3J5ZmxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NTgyNzksImV4cCI6MjA5NzQzNDI3OX0.s572ww2tf9spCgkGGrRjz996-2yZ3DptjcV-fGQ8j8Q";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
