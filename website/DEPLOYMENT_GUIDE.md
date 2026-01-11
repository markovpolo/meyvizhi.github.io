# Deploying to 1984.hosting - Step by Step Guide

## Why 1984.hosting?

1. **Privacy First**: Based in Iceland with strong privacy laws
2. **100% Green Energy**: Geothermal and hydroelectric power
3. **Free WHOIS Privacy**: Your personal info stays private by default
4. **Ethical Values**: Freedom of speech, no data mining
5. **Free DNS**: FreeDNS service with unlimited domains

## Step 1: Register Your Domain

### Visit 1984.hosting
1. Go to https://1984.hosting/
2. Click on "FreeDNS" or "Domain Registration"

### Check Domain Availability
1. Search for your desired domain name
2. Popular extensions:
   - `.com` - Most recognized (~€15/year)
   - `.org` - For organizations (~€12/year)
   - `.is` - Iceland domain, great for privacy (~€20/year)
   - `.io` - Tech/startup vibe (~€30/year)

### Purchase Domain
1. Add domain to cart
2. WHOIS privacy is included FREE
3. Create account or sign in
4. Complete payment (they accept PayPal, Credit Card, Bitcoin!)

**Cost**: ~€10-30/year depending on extension

## Step 2: Choose Hosting Option

### Option A: Free Hosting (GitHub Pages + 1984 DNS)
**Best for**: Minimal cost, easy setup
**Monthly Cost**: FREE (only domain cost annually)

1. Keep using GitHub Pages for hosting
2. Use 1984's free DNS service to point domain
3. Skip to "Step 3A" below

### Option B: Paid Hosting at 1984.hosting
**Best for**: Full privacy, no GitHub involvement
**Monthly Cost**: €4.72/month (~€57/year)

1. Click "Order Hosting" on 1984.hosting
2. Choose "Shared Hosting" plan
3. Includes:
   - Free SSL certificate
   - Unlimited storage & bandwidth
   - Email accounts
   - Free domain registration (if not already purchased)

## Step 3A: Setup with Free Hosting (GitHub Pages)

### Configure DNS at 1984.hosting
1. Log into your 1984.hosting account
2. Go to "FreeDNS" section
3. Add your domain
4. Add these DNS records:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: meyvizhii.github.io.
```

### Configure GitHub Pages
1. In your GitHub repository settings
2. Go to "Pages" section
3. Add your custom domain (e.g., `yourname.com`)
4. Wait 24-48 hours for DNS to propagate
5. Enable HTTPS (GitHub does this automatically)

**You're done!** Your site is now at your custom domain.

## Step 3B: Setup with Paid Hosting at 1984.hosting

### Upload Your Website Files
1. After purchasing hosting, you'll receive:
   - FTP credentials
   - Control panel login
   - Server details

2. **Via FTP** (Recommended for beginners):
   - Download FileZilla: https://filezilla-project.org/
   - Connect using credentials from 1984
   - Upload all files (index.html, styles.css, script.js, etc.)
   - Upload to `public_html` or `www` folder

3. **Via Control Panel**:
   - Log into i-MSCP control panel
   - Use File Manager
   - Upload files to web directory

### Configure Domain
1. Domain should auto-configure if purchased together
2. If separate, go to Domain Management
3. Point domain to your hosting account
4. SSL certificate installs automatically

**You're done!** Visit your domain in 24-48 hours.

## Step 4: Test Your Website

### Accessibility Checklist
- [ ] Test with keyboard navigation only
- [ ] Try all accessibility toolbar features
- [ ] Test on mobile device
- [ ] Check with screen reader
- [ ] Verify all languages work
- [ ] Test text-to-speech

### Performance Checklist
- [ ] Page loads in under 3 seconds
- [ ] Images are optimized
- [ ] HTTPS is working
- [ ] All links work
- [ ] Contact form/email works

## Cost Breakdown

### Option A: GitHub + 1984 Domain
- Domain: €15/year (for .com)
- Hosting: FREE (GitHub Pages)
- DNS: FREE (1984 FreeDNS)
- **Total: €15/year (~€1.25/month)**

### Option B: Full 1984.hosting
- Hosting: €4.72/month (€57/year)
- Domain: Included FREE
- DNS: Included
- Email: Included
- SSL: Included
- **Total: €57/year (~€4.72/month)**

## Privacy & Security Features

### What 1984.hosting Protects
✅ WHOIS privacy (your info hidden)
✅ Free SSL/HTTPS encryption
✅ DDoS protection
✅ No logging of your activities
✅ Will only respond to Icelandic court orders
✅ Will notify you of any legal requests

### Payment Privacy
- Use Bitcoin for maximum anonymity
- PayPal doesn't share financial details
- Credit card through secure processor

## Email Setup (If using paid hosting)

1. Log into i-MSCP control panel
2. Go to "Email Accounts"
3. Create email: you@yourdomain.com
4. Use webmail at: https://vefpostur.1984.is
5. Or configure with:
   - IMAP: mail.yourdomain.com, Port 993
   - SMTP: mail.yourdomain.com, Port 465

## Maintenance

### Monthly Tasks
- Check website is loading correctly
- Test accessibility features
- Update content as needed

### Annual Tasks
- Renew domain (1984 will email reminder)
- Review and update CV
- Check for broken links
- Update profile photo if needed

## Support

### 1984.hosting Support
- Email: 1984@1984.is
- Phone: +354 546 1984
- Knowledge base: https://kb.1984hosting.com

### Website Support
- Refer to README.md in your files
- Test with accessibility tools
- Contact for help: 3019046s@student.gla.ac.uk

## Troubleshooting

### Domain not working after 48 hours
- Check DNS records are correct
- Verify domain points to right servers
- Clear browser cache
- Try different browser/device

### Website files not showing
- Verify uploaded to correct folder (public_html)
- Check file names match (case-sensitive)
- Look for .htaccess file blocking access
- Check file permissions (should be 644)

### Email not receiving
- Check spam folder
- Verify DNS MX records
- Test with webmail first
- Contact 1984 support

## Alternative: Netlify + 1984 Domain (Recommended!)

This gives you the best of both worlds:

1. Register domain at 1984.hosting (privacy + ethics)
2. Host website at Netlify (performance + features)
3. Point 1984 DNS to Netlify servers

### Setup
1. Sign up at netlify.com (FREE)
2. Connect your GitHub repository
3. Netlify auto-deploys on every commit
4. In 1984 DNS, add Netlify's records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

### Benefits
- ✅ Automatic HTTPS
- ✅ Global CDN (super fast worldwide)
- ✅ Automatic deployments
- ✅ Free tier is generous
- ✅ Better performance than basic hosting
- ✅ Still ethical (domain at 1984)

**This is my top recommendation!**

---

## Summary: Best Setup for You

**For Maximum Ethics + Performance:**
1. Domain: 1984.hosting (~€15/year)
2. Hosting: Netlify (FREE)
3. DNS: 1984 FreeDNS (FREE)

**Total Cost: €15/year**

You get:
- ✅ Ethical, privacy-focused domain registrar
- ✅ Lightning-fast global hosting
- ✅ Free SSL
- ✅ Auto-deploys from GitHub
- ✅ Easy to update (just push to GitHub)

Perfect balance of ethics, performance, and affordability! 🎉
