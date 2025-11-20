# Payroll SaaS Intelligence - Full GitHub Repo (Auto-generated)

This repository is a fully generated GitHub-ready project that includes:
- Static frontend (index, benchmark, jobboard)
- Google Apps Script collector for vendor pages + OpenAI summarization
- GitHub Actions workflows to fetch Vendors (from published Google Sheet CSV) and Jobs (from Airtable)
- Data files written into `/data` by workflows
- Newsletter template and sponsor materials

## Quick start (deploy to GitHub Pages)

1. Create a new repository on GitHub (e.g. `payroll-saas-intel`) and push the contents of this repo to `main`.
2. In your repo settings -> Pages -> set Source to `main` branch and folder `/ (root)` and save.
3. Add the following repository Secrets (Settings -> Secrets -> Actions):
   - `SHEET_CSV_URL` : publish-to-web CSV URL for your Vendors sheet (or leave and use local CSV)
   - `AIRTABLE_API_KEY` : your Airtable API key
   - `AIRTABLE_BASE_ID` : your Airtable base id (starts with 'app...')
   - (Optional) `OPENAI_API_KEY` : for Apps Script summarization (also set in Apps Script project properties)
   - (Optional) `BEEHIIV_API_KEY``, `BEEHIIV_PUBLICATION_ID` : if you want automated newsletters

4. Configure Google Sheets:
   - Create a Google Sheet with tabs: `Vendors` (export as CSV) and `Sources` & `Incoming` (for Apps Script).
   - Open Extensions -> Apps Script, create a project, paste `scripts/gs_collect_apps_script.txt`.
   - Set a time-driven trigger for `fetchSourcesToSheet` (daily).

5. Configure Airtable:
   - Create a base named e.g. `Payroll SaaS Job Board` and a table `Jobs` with fields:
     `Job Title`, `Company`, `Location`, `Job Type`, `Salary Range`, `Description`, `Apply Link`, `Tags`, `Featured` (checkbox).
   - Optionally set up Gumroad + Zapier for paid featured listings.

6. Run the GitHub Actions workflows manually (Actions tab -> choose workflow -> Run workflow) to generate `data/vendors.json` and `data/jobs.json`.

7. Visit your site: `https://<your-username>.github.io/<repo>/`

If you'd like I can pre-populate `data/vendors.json` with five sample vendors and sample pricing rows — say 'yes' and I'll add them.
