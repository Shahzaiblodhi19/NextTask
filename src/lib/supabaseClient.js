// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sdscffnbhcvhwsbraqbc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkc2NmZm5iaGN2aHdzYnJhcWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMzI3MTUsImV4cCI6MjA1OTkwODcxNX0.cgb6V0z8rro5GlVVrrAHzG3Mnt322BsOxuh_WNp0Gd0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
