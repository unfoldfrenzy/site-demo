# Full Benchmark Site Repo

This repo is a production-ready benchmark pages + automation starter.
It expects a Google Sheet (vendors) and an Airtable jobs base for jobs (optional).

## Quick setup

1. Create a GitHub repo and push these files to `main`.
2. Add Secrets (Settings → Secrets → Actions):
   - SHEET_CSV_URL : your CSV export link for the Google Sheet, e.g. https://docs.google.com/spreadsheets/d/1LBevQAeMmu2F2tHMSJG7lpC3vqtYehm8eamjMmXv09E/export?format=csv
   - AIRTABLE_API_KEY
   - AIRTABLE_BASE_ID
3. Run Actions manually once: `Update Vendors from Sheet` then `Generate Benchmark Pages`.
4. Enable GitHub Pages (Settings → Pages → main branch → root).
5. Visit https://<your-username>.github.io/<repo>/benchmark/

## Google Sheet
You provided sheet: https://docs.google.com/spreadsheets/d/1LBevQAeMmu2F2tHMSJG7lpC3vqtYehm8eamjMmXv09E
Make sure the sheet is "Anyone with link – Viewer" and then use the export CSV URL as the secret `SHEET_CSV_URL`
