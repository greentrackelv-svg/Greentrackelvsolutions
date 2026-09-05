# GreenTrack ELV Solutions – Professional Website

Static HTML/CSS/JS website prepared for GitHub Pages.

## Files
- `index.html` – complete homepage
- `style.css` – responsive design
- `script.js` – mobile navigation and small form checks
- `logo.png` – existing GreenTrack logo
- `CNAME` – custom domain

## Important before launch

1. Confirm that `Greentrackelvsolutions@gmail.com` is the correct business email.
2. Confirm that `9639010102` is the correct phone/WhatsApp number.
3. Replace any service/claim wording that does not exactly match your real business operations.
4. Add real company address, registrations, certifications, service areas and photographs where applicable.
5. Confirm your FormSubmit setup and verify the first form submission.
6. Add Privacy Policy and Terms & Conditions pages before collecting significant customer data.
7. Connect Google Search Console and Google Analytics after launch.
8. Do not commit passwords, API keys or other secrets to GitHub.

## GitHub Pages

Keep `CNAME` in the repository root. In GitHub:
Settings → Pages → Deploy from branch → select your main branch and `/root`.

For a custom domain, configure the required DNS records at your domain provider and enable HTTPS after GitHub verifies the domain.

## Form handling

The quote form currently posts to FormSubmit. Test this carefully after deployment. For a production lead system, consider moving to a dedicated form backend/CRM later.
