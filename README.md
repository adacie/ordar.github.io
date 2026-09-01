# 小叮噹團露訂餐｜GitHub Pages + Supabase

## 1. 建立 Supabase
1. 建立 Supabase Project。
2. 到 SQL Editor，貼上並執行 `supabase.sql`。
3. 到 Project Settings → API Keys，取得 **Publishable key**（舊專案也可暫時使用 anon key）。
4. 編輯 `config.js`：
   - `SUPABASE_URL` 填入 Project URL
   - `SUPABASE_PUBLISHABLE_KEY` 填入 Publishable key
5. 絕對不要把 `service_role` / `secret key` 放進 `config.js`。

Supabase 的瀏覽器端 client 可使用 publishable/anon key，但必須搭配 RLS；secret/service_role key 不可放在瀏覽器。詳見官方文件。

## 2. 上傳 GitHub
把以下檔案放在 repository 根目錄：
- index.html
- config.js
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png

`supabase.sql` 可保留在 repo，也可以放在其他安全位置；它不會被網站執行。

## 3. 開啟 GitHub Pages
Repository → Settings → Pages → Deploy from branch → `main` / `/ (root)`。

## 4. 資料同步方式
- 訂單內容仍寫在 `index.html`。
- 繳費狀態寫入 Supabase `camp_payment`。
- 多支手機/電腦讀取同一份雲端資料。
- Supabase Realtime 會把其他裝置的變更推送到目前頁面。
- `localStorage` 只保留最後資料作為離線備援，不再當主要資料庫。
- 更新密碼由資料庫 RPC 驗證，前端不直接決定是否有寫入權限。

目前管理密碼：`0912`。
