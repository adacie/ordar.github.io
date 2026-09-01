// Supabase 設定
// 只放「Publishable key」；絕對不要放 service_role / secret key。
window.SUPABASE_URL = 'https://ifmshidzcfqlhpzcbyve.supabase.co';
window.SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_YEckG3xtzc6imcLSAiE8Ow_wxWRPKHT';

if (window.supabase?.createClient &&
    !window.SUPABASE_URL.includes('YOUR_') &&
    !window.SUPABASE_PUBLISHABLE_KEY.includes('YOUR_')) {
  window.supabaseClient = window.supabase.createClient(
    window.SUPABASE_URL,
    window.SUPABASE_PUBLISHABLE_KEY
  );
}
