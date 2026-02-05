import { createClient } from "@supabase/supabase-js";

// Create a single instance logic or dynamic creation
// Since the user can change keys in settings, we export a creator function.
// If your app was static keys, we would export a constant 'supabase'.

export const getSupabase = (url, key) => {
  if (!url || !key) return null;
  try {
    return createClient(url, key);
  } catch (e) {
    console.error("Supabase init error:", e);
    return null;
  }
};

// Helper: Format date for our app (YYYY-MM-DD for sorting/filtering)
export const formatDate = (date) => {
  if (!date) return "";
  return date.toISOString().split("T")[0];
};
