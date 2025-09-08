
# Payroll SaaS Benchmark - Production Starter

This repository is a production-ready **static site** + automation scaffolding for a Payroll SaaS benchmark, weekly newsletter, and job board.

## What's included
- Static frontend (index, benchmark, jobboard) with responsive CSS
- `/data` folder where GitHub Actions writes `vendors.json`, `jobs.json`, `changes.json`
- GitHub Actions workflows for:
  - Fetching Google Sheets CSV and converting to `data/vendors.json`
  - Fetching Airtable jobs and saving to `data/jobs.json`
  - Generating `changes.json` diffs
- Google Apps Script (collector) to auto-collect and summarize with OpenAI
- Newsletter template and sponsor deck placeholder

## Quick deploy (short)
1. Fork/upload this repo to GitHub as `your-username/b2b-intel-pack-prod`
2. Go to **Settings → Pages** and enable Pages from `main` branch, `/root`
3. Add the following repository secrets (Settings → Secrets → Actions):
   - `SHEET_CSV_URL` (publish-to-web CSV link for Vendors sheet) OR `GOOGLE_SHEET_ID` if using API
   - `AIRTABLE_API_KEY`
   - `AIRTABLE_BASE_ID`
   - `OPENAI_API_KEY` (if you will use Apps Script integration)
   - `BEEHIIV_API_KEY` & `BEEHIIV_PUBLICATION_ID` (if you plan to auto-publish newsletter)
4. Manually create Airtable base `Jobs` with fields (Job Title, Company, Location, Job Type, Salary Range, Description, Apply Link, Tags, Featured)

## Files you should edit
- `data/vendors.json` (example schema)
- `data/jobs.json` (jobs from Airtable)
- `newsletter_template.md` (edit and send via Beehiiv/Substack)
- `scripts/gs_collect_apps_script.txt` (copy into Google Apps Script)

## Apps Script collector
Copy `scripts/gs_collect_apps_script.txt` into a Google Apps Script bound to your Google Sheet. Set up a time-driven trigger.
See the script for details and comments.

## GitHub Actions
Two workflows are included in `.github/workflows`:
- `update-vendors.yml` (fetch vendors CSV → data/vendors.json)
- `update-jobs.yml` (fetch Airtable jobs → data/jobs.json)

Customize secrets and sheet IDs as instructed in the workflows.

## Support
I built this starter for you — edit freely. If you want me to plug in your Airtable IDs and run initial tests, provide them (or add into GitHub Secrets) and I can help further.
