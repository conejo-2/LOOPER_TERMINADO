// supabaseClient.js
const supaUrl = 'https://ovfvlnyjonjptmatzxbz.supabase.co';
const supaKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92ZnZsbnlqb25qcHRtYXR6eGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MjY3MzksImV4cCI6MjA3MTIwMjczOX0.8zBRh5Qh2GujIf4aBGLc8PX3SLJn9YgSyr372SpuGDk'; // tu key

// 👇 usamos 'client' global para no romper nada
window.client = window.supabase.createClient(supaUrl, supaKey);
