# Meyvizhi's Inclusive Academic Portfolio

An accessibility-first, multilingual academic portfolio website with comprehensive support for diverse abilities and languages.

## ✨ Accessibility Features

### Visual Accessibility
- **High Contrast Mode**: Enhanced color contrast for better visibility (WCAG AAA compliant)
- **Dyslexia-Friendly Font**: Atkinson Hyperlegible & Lexend fonts optimized for readability
- **Adjustable Text Size**: Increase or decrease text size (A+/A-)
- **Responsive Design**: Works on all devices and screen sizes
- **Reduced Motion Support**: Respects `prefers-reduced-motion` for users sensitive to animations

### Audio/Speech
- **Text-to-Speech**: Hover over any text to hear it read aloud
- **Multi-language Voice Support**: Automatic language detection for TTS
- **Screen Reader Optimized**: Full ARIA labels, semantic HTML, skip links

### Sign Language & Braille
- **Sign Language Interpreter Window**: Toggleable video interpreter support
- **Braille Display Mode**: Real-time braille conversion (hover to see braille text)

### Navigation
- **Keyboard Navigation**: Full keyboard support (Tab, Enter, Esc)
- **Skip to Main Content**: Quick navigation for screen readers
- **Clear Focus Indicators**: Visible focus states for all interactive elements

### Language Support
Currently supports 10 languages:
- English
- தமிழ் (Tamil)
- हिन्दी (Hindi)
- ಕನ್ನಡ (Kannada)
- తెలుగు (Telugu)
- മലയാളം (Malayalam)
- Español (Spanish)
- Français (French)
- Deutsch (German)
- Português (Portuguese)

## 🗂️ Website Structure

### Sections
1. **Home** - Introduction and bio
2. **Research Papers** - Academic publications
3. **Teaching** - Course materials and tutorials
4. **Academic Resources** - Research tools and scholarly materials
5. **Writing Resources** - Academic writing guides
6. **Design Resources** - Visualization and design tools
7. **Design Portfolio** - Science communication cartoons and infographics
8. **Pop Culture Corner** - Book recommendations and interests
9. **Foodie Corner** - Food recommendations and culinary adventures
10. **Academic Collaborations** - Collaboration opportunities
11. **Fancy Schmancy CV** - Detailed curriculum vitae
12. **Need Help?** - Accessibility support and documentation

## 🚀 Deployment Options

### Option 1: GitHub Pages (Current Setup)
1. Keep your repository at `meyvizhii.github.io`
2. Upload these files to your repository
3. Enable GitHub Pages in Settings
4. Your site will be at `https://meyvizhii.github.io`

### Option 2: GitHub Pages + Custom Domain
1. Register domain with 1984.hosting or Porkbun
2. Add CNAME file with your domain name
3. Configure DNS:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
   
   Type: CNAME
   Name: www
   Value: meyvizhii.github.io
   ```
4. Enable custom domain in GitHub Pages settings

### Option 3: Netlify (Recommended for Best Performance)
1. Sign up at netlify.com
2. Connect your GitHub repository
3. Build settings:
   - Build command: (leave empty for static site)
   - Publish directory: `/`
4. Add custom domain in Netlify settings
5. Netlify will auto-configure SSL

### Option 4: 1984.hosting (Full Privacy)
1. Register domain at 1984.hosting
2. Purchase hosting (€4.72/month)
3. Upload files via FTP/SFTP
4. Use their FreeDNS service

## 📁 Files Included

```
├── index.html          # Main HTML structure
├── styles.css          # Accessibility-optimized CSS
├── script.js           # Interactive features & accessibility
├── photo.jpg           # Profile photo (add your own)
├── Meyvizhi_CV_Oct_25.pdf  # CV file (add your own)
└── README.md           # This file
```

## 🎨 Customization Guide

### Adding Content

#### Research Papers
Add papers in the `#research-papers` section:
```html
<div class="paper-item">
    <h3>Paper Title</h3>
    <p class="authors">Authors</p>
    <p class="journal">Journal Name, Year</p>
    <a href="link-to-paper.pdf">Read Paper</a>
</div>
```

#### Design Portfolio
Add portfolio items:
```html
<div class="portfolio-item">
    <img src="image.jpg" alt="Description">
    <h3>Project Title</h3>
    <p>Description</p>
</div>
```

### Color Scheme
Edit CSS variables in `styles.css`:
```css
:root {
    --color-primary: #1a5490;      /* Main brand color */
    --color-accent: #d97706;       /* Accent color */
    --color-bg: #ffffff;           /* Background */
}
```

### Adding New Languages
Edit `script.js` translations object:
```javascript
const translations = {
    // ... existing languages
    newlang: {
        name: "Your Name",
        role: "Your Role",
        // ... other translations
    }
};
```

Add option to language selector in HTML:
```html
<option value="newlang">New Language Name</option>
```

## 🔧 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Screen Readers: JAWS, NVDA, VoiceOver, TalkBack

## ♿ WCAG Compliance

This website meets WCAG 2.1 Level AAA standards:
- ✅ Perceivable: Multiple ways to access content
- ✅ Operable: Full keyboard navigation
- ✅ Understandable: Clear language, consistent navigation
- ✅ Robust: Works with assistive technologies

## 🔐 Privacy

- No tracking scripts
- No cookies
- No external analytics
- LocalStorage only for user preferences
- All features work offline (after first load)

## 📝 Maintenance

### Regular Updates
1. Update research papers as published
2. Add new portfolio items
3. Keep CV current
4. Refresh teaching materials

### Testing Accessibility
1. Use keyboard only to navigate
2. Test with screen reader (NVDA/VoiceOver)
3. Verify color contrast ratios
4. Check with different text sizes
5. Test in different languages

## 🆘 Troubleshooting

### Text-to-Speech Not Working
- Ensure browser supports Web Speech API
- Check browser permissions for speech
- Try a different browser (Chrome works best)

### Language Not Switching
- Clear browser cache
- Check console for errors
- Verify translation exists in script.js

### Braille Mode Issues
- Ensure browser supports UTF-8
- Some characters may not have braille equivalents

## 📚 Resources

### Accessibility Testing Tools
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse (Chrome DevTools)](https://developers.google.com/web/tools/lighthouse)

### Screen Readers
- [NVDA (Free, Windows)](https://www.nvaccess.org/)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/)
- VoiceOver (Built into macOS/iOS)
- TalkBack (Built into Android)

### Fonts Used
- [Atkinson Hyperlegible](https://brailleinstitute.org/freefont) - Designed for low vision
- [Lexend](https://www.lexend.com/) - Optimized for dyslexia

## 🤝 Contributing

To suggest improvements:
1. Test accessibility features
2. Report issues via email
3. Suggest new language translations
4. Share feedback on usability

## 📄 License

This template is open source. Feel free to use and modify for your own portfolio.

## 📞 Contact

For accessibility issues or questions:
- Email: 3019046s@student.gla.ac.uk
- Use the "Need Help?" section on the website

---

Built with ❤️ for accessibility and inclusion
