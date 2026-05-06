# Café MRM Website - Complete CMS System

## 🎉 Overview
A fully-featured Content Management System (CMS) for the Café MRM Franco-Brazilian coffee research project with admin panel, page manager, and dynamic content creation.

## 📁 Files Structure
```
website/
├── index.html          # Main website (dynamic, loads from localStorage)
├── admin.html         # Admin panel (login required)
├── page-manager.html  # Page/Section manager (CRUD operations)
├── styles.css         # All styling (responsive design)
├── script.js          # Core JavaScript (admin + dynamic loading)
├── start-server.sh    # Quick start script (executable)
├── README.md          # This file
└── images/
    ├── logo_final.png          # Project logo (197KB)
    ├── logo_final_colorful.png  # Enhanced colorful version (193KB)
    ├── Logos_instituicoes.png   # All institution logos (62KB)
    ├── serra-brigadeiro-1.jpg  # Serra do Brigadeiro (6.8KB)
    └── serra-brigadeiro-2.jpg  # Serra do Brigadeiro (6.6KB)
```

## 🔐 Login Credentials
**Username**: `admin`
**Password**: `cafe2024`

## 🚀 How to Run

### Quick Start:
```bash
cd /home/gustavo/Documentos/agente_ai/projeto/website
./start-server.sh
```

### Manual Start:
```bash
cd /home/gustavo/Documentos/agente_ai/projeto/website
python3 -m http.server 8000
```

### Access URLs (after starting server):
- **Main Website**: http://localhost:8000
- **Admin Panel**: http://localhost:8000/admin.html
- **Page Manager**: http://localhost:8000/page-manager.html

## ✅ Features

### 👥 Regular Visitors Can:
- ✅ View all website sections
- ✅ Read news articles
- ✅ Watch videos
- ✅ Navigate through all pages
- ✅ See institution logos (colorful)
- ✅ View Serra do Brigadeiro gallery

### 🔐 Admin Users Can:
- ✅ **Login** to admin panel and page manager
- ✅ **Create new pages/sections** (add to main site or create new pages)
- ✅ **Edit existing sections** (Research, Team, Partnerships, etc.)
- ✅ **Delete sections** no longer needed
- ✅ **Post news articles** (button hidden from regular users)
- ✅ **Add/delete videos** (button hidden from regular users)
- ✅ **Manage menus** (create custom menu items with ordering)
- ✅ **Insert web links** of interest in any section
- ✅ **Customize logos** (change colors via color picker)
- ✅ **Manage all content** through Page Manager interface

## 🎨 Logos (Now Colorful!)
- **Project Logo**: `logo_final_colorful.png` (enhanced with 80% saturation boost)
- **Institution Logos**: `Logos_instituicoes.png` (contains UFV, AMU, CIRAD, etc.)
- **Logo Customization**: Admin can change logo colors via Page Manager → Logo Customization

## 📝 Page Manager Features

### Create New Section/Page:
1. Login to Page Manager (`page-manager.html`)
2. Click "+ Create New Section/Page"
3. Enter section name and content (HTML supported)
4. Choose: "Add to Main Page" or "Create New Page"
5. Set menu order (0 = at end)
6. Save - it appears instantly on the website!

### Edit Existing Sections:
1. Go to Page Manager
2. Find section in "Existing Sections" grid
3. Click "Edit" button
4. Modify content (HTML supported)
5. Save changes

### Manage Links of Interest:
1. In Page Manager, scroll to "Manage Links"
2. Click "+ Add New Link"
3. Enter title, URL, and select section
4. Edit/Delete existing links as needed

## 🔒 Security Features
- ✅ **Admin-only posting**: News/videos buttons hidden from regular users
- ✅ **Login required**: Admin panel and Page Manager require authentication
- ✅ **Session management**: Uses `localStorage` for admin session
- ✅ **Logout capability**: Admin can logout from any admin page

## 💾 Data Storage
Currently uses **browser localStorage** (no backend required):
- `cafe-mrm-admin-logged-in` - Admin session
- `cafe-mrm-news` - News articles
- `cafe-mrm-videos` - Video links
- `cafe-mrm-menus` - Menu items
- `cafe-mrm-sections` - Page/section content
- `cafe-mrm-links` - Web links
- `cafe-mrm-settings` - Site settings
- `cafe-mrm-logo-color` - Logo color preference

**Note**: For production, integrate with a backend database.

## 📱 Responsive Design
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (< 768px)
- ✅ Navigation collapses to hamburger menu on mobile

## 🎯 Sections Managed
Admin can edit ALL these sections via Page Manager:
1. Hero Section (Home)
2. About the Project
3. Team (Scientific Committee)
4. Research Themes
5. Videos
6. News
7. Partnerships
8. Results (with Biome table)
9. Contact
10. **+ Create unlimited new sections!**

## 🌐 Web Links of Interest
Admin can add links to:
- Research papers
- EUDR regulation
- GitHub repositories
- Partner websites
- Any URL of interest
- Links appear in relevant sections

## 🔧 Troubleshooting

### Can't Login?
1. Clear browser localStorage: `localStorage.clear()` in console
2. Use credentials: **admin** / **cafe2024**
3. Refresh page

### Logos Not Showing?
Check that these files exist in `/images/`:
- `logo_final_colorful.png`
- `Logos_instituicoes.png`

### Changes Not Appearing?
1. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
2. Check localStorage in browser console: `localStorage.getItem('cafe-mrm-sections')`
3. Make sure you're logged in as admin

### Page Manager Not Loading?
1. Login as admin first
2. Check browser console for errors
3. Make sure JavaScript is enabled

## 📞 Contact
For more information about the Café MRM project:
- **Email**: gustavo.bastos@ufv.br
- **Institution**: Universidade Federal de Viçosa (UFV)
- **Program**: #DigitAg

## 📄 Credits
Website created based on PowerPoint presentations in `/projeto/` folder:
- Café MRM.pptx
- Histoire du Partenariat Café Brésil.pptx
- Traçabilité du Café.pptx
- École du Café Durable(1).pptx
- Slide_11_dez.pptx

---
**Built with**: HTML5, CSS3, Vanilla JavaScript, Python SimpleHTTPServer
**Design**: Responsive, modern, with coffee-themed color palette
**CMS**: Full CRUD operations for pages, sections, news, videos, menus, and links
