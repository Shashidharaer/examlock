# Examlock - Project Instruction Manual

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [System Requirements](#system-requirements)
4. [Project Structure](#project-structure)
5. [Installation & Setup](#installation--setup)
6. [Development Workflow](#development-workflow)
7. [Key Features & Components](#key-features--components)
8. [Configuration](#configuration)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)
11. [Additional Resources](#additional-resources)

---

## 📖 Project Overview

**Examlock** is a modern web application built to provide secure browser-based examination solutions. The application combines Laravel's powerful backend with React's dynamic frontend, powered by Statamic CMS for content management.

### Key Characteristics
- **Type**: Full-stack Web Application
- **Primary Purpose**: Secure examination platform with browser locking capabilities
- **Architecture**: Laravel + React (Inertia.js) + Statamic CMS
- **Development Approach**: Modern JavaScript/TypeScript with PHP backend

---

## 🛠 Technology Stack

### Backend
- **Framework**: Laravel 12.x (PHP 8.2+)
- **CMS**: Statamic 5.65+
- **Authentication**: Laravel Fortify
- **API Client**: Guzzle HTTP
- **Database**: SQLite (development), supports MySQL/PostgreSQL (production)

### Frontend
- **Framework**: React 19.x
- **Language**: TypeScript 5.7+
- **UI Library**: Radix UI Components
- **Styling**: Tailwind CSS 4.x
- **SPA Bridge**: Inertia.js 2.x
- **Icons**: Iconify, Lucide React
- **Carousel**: Embla Carousel

### Build Tools
- **Module Bundler**: Vite 7.x
- **Package Manager**: npm
- **Code Quality**: ESLint, Prettier
- **Type Checking**: TypeScript
- **Testing**: PHPUnit (backend)

### Additional Integrations
- **HubSpot**: CRM and marketing automation
- **Wayfinder**: Laravel route helpers for frontend
- **Vercel**: Deployment platform

---

## 💻 System Requirements

### Required Software
- **PHP**: 8.2 or higher
- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **Composer**: 2.x or higher
- **Git**: For version control

### Recommended Tools
- **IDE**: VS Code, PhpStorm, or similar
- **Database GUI**: TablePlus, DBngin, or similar
- **Terminal**: iTerm2 (macOS), Windows Terminal, or similar

### Operating Systems
- macOS (primary development environment)
- Linux (Ubuntu/Debian)
- Windows (with WSL2 recommended)

---

## 📁 Project Structure

```
examlock/
├── app/                          # Laravel application code
│   ├── Http/
│   │   ├── Controllers/         # Request handlers
│   │   │   ├── Controller.php
│   │   │   ├── FormController.php
│   │   │   ├── SearchController.php
│   │   │   └── StatamicEntryController.php
│   │   ├── Middleware/          # HTTP middleware
│   │   └── Requests/            # Form requests
│   ├── Models/                  # Eloquent models
│   │   └── User.php
│   ├── Providers/               # Service providers
│   │   ├── AppServiceProvider.php
│   │   └── FortifyServiceProvider.php
│   └── Services/                # Business logic
│       └── HubSpotService.php   # HubSpot API integration
│
├── bootstrap/                    # Application bootstrap
│   ├── app.php
│   └── cache/                   # Framework cache files
│
├── config/                       # Configuration files
│   ├── app.php                  # Main app config
│   ├── auth.php                 # Authentication config
│   ├── database.php             # Database config
│   ├── fortify.php              # Fortify settings
│   ├── inertia.php              # Inertia.js config
│   ├── services.php             # Third-party services (HubSpot)
│   └── statamic/                # Statamic CMS config
│
├── content/                      # Statamic content (flat files)
│   ├── assets/                  # Media files
│   ├── collections/             # Content entries
│   ├── globals/                 # Global sets
│   ├── navigation/              # Navigation trees
│   └── taxonomies/              # Terms & categories
│
├── database/                     # Database files
│   ├── database.sqlite          # SQLite database
│   ├── factories/               # Model factories
│   ├── migrations/              # Database migrations
│   └── seeders/                 # Database seeders
│
├── public/                       # Web root
│   ├── index.php                # Entry point
│   ├── assets/                  # Uploaded assets
│   ├── build/                   # Compiled frontend assets
│   └── storage -> ../storage/   # Symlink to storage
│
├── resources/                    # Frontend resources
│   ├── css/
│   │   ├── globals.css          # Global styles
│   │   └── theme.css            # Theme variables
│   ├── js/
│   │   ├── app.tsx              # Main app entry
│   │   ├── ssr.tsx              # SSR entry point
│   │   ├── components/          # React components
│   │   │   ├── sections/        # Page sections
│   │   │   ├── ui/              # UI components (Radix)
│   │   │   └── NavigationProvider.tsx
│   │   ├── hooks/               # Custom React hooks
│   │   ├── layouts/             # Page layouts
│   │   └── pages/               # Page components
│   │       ├── index.tsx        # Dynamic Statamic pages
│   │       ├── download.tsx
│   │       └── extension.tsx
│   ├── blueprints/              # Statamic blueprints
│   ├── fieldsets/               # Statamic fieldsets
│   └── views/                   # Blade templates (minimal)
│
├── routes/                       # Route definitions
│   ├── web.php                  # Web routes
│   ├── auth.php                 # Authentication routes
│   ├── console.php              # Console routes
│   └── settings.php             # Settings routes
│
├── storage/                      # Storage directory
│   ├── app/                     # Application storage
│   ├── framework/               # Framework files
│   ├── logs/                    # Log files
│   └── statamic/                # Statamic cache & storage
│
├── tests/                        # Automated tests
│   ├── Feature/                 # Feature tests
│   └── Unit/                    # Unit tests
│
├── users/                        # Statamic user files (flat file)
│   ├── user1@email.com.yaml
│   └── user2@email.com.yaml
│
├── vendor/                       # PHP dependencies
├── node_modules/                 # Node dependencies
│
├── .env                          # Environment configuration
├── artisan                       # Laravel CLI
├── composer.json                 # PHP dependencies
├── package.json                  # Node dependencies
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
├── eslint.config.js             # ESLint configuration
├── components.json              # Radix UI config
├── vercel.json                  # Vercel deployment config
└── README.md                     # Project documentation
```

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url> examlock
cd examlock
```

### 2. Install PHP Dependencies

```bash
composer install
```

### 3. Install Node Dependencies

```bash
npm install
```

### 4. Environment Configuration

Copy the environment file (if it exists):
```bash
cp .env.example .env  # If .env.example exists
```

Or create `.env` file manually with these essential variables:

```env
# Application
APP_NAME=Examlock
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

# Database
DB_CONNECTION=sqlite
# DB_DATABASE=/absolute/path/to/database/database.sqlite

# Statamic
STATAMIC_LICENSE_KEY=
STATAMIC_API_ENABLED=true

# HubSpot Integration (Optional)
HUBSPOT_API_KEY=
HUBSPOT_PORTAL_ID=
HUBSPOT_CONTACT_FORM_GUID=

# Mail
MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"
```

### 5. Generate Application Key

```bash
php artisan key:generate
```

### 6. Create Database

```bash
touch database/database.sqlite
```

### 7. Run Migrations

```bash
php artisan migrate
```

### 8. Create Storage Symlink

```bash
php artisan storage:link
```

### 9. Build Frontend Assets

```bash
npm run build
```

---

## 🔄 Development Workflow

### Starting Development Servers

#### Option 1: All-in-One Development (Recommended)
```bash
composer dev
```

This command starts:
- Laravel development server (port 8000)
- Queue worker
- Log viewer (Pail)
- Vite dev server (HMR for frontend)

#### Option 2: Individual Services

**Backend (Laravel):**
```bash
php artisan serve
# Runs on http://localhost:8000
```

**Frontend (Vite):**
```bash
npm run dev
# Runs on http://localhost:5173 with HMR
```

**Queue Worker:**
```bash
php artisan queue:listen --tries=1
```

**Logs:**
```bash
php artisan pail --timeout=0
```

### SSR Development Mode

For Server-Side Rendering:
```bash
composer dev:ssr
```

### Alternative Start Script (using 'please')

The project includes a `please` script for convenience:
```bash
php please serve
```

---

## 🎨 Key Features & Components

### 1. Statamic CMS Integration

**Dynamic Content Rendering**
- Content stored in flat files (`content/` directory)
- `StatamicEntryController` handles dynamic page rendering
- Automatic transformation of Statamic entries to Inertia props

**Content Types:**
- Pages (collections)
- Navigation trees
- Global sets (branding, settings)
- Assets (media management)

### 2. Inertia.js SPA Architecture

**Benefits:**
- Single-page application experience
- No API layer needed
- Server-side routing with client-side navigation
- Shared state between pages

**Key Files:**
- `resources/js/app.tsx` - Main entry point
- `resources/js/ssr.tsx` - Server-side rendering
- `resources/js/pages/*.tsx` - Page components

### 3. React Components

**Component Library:**
- **UI Components** (`resources/js/components/ui/`): Radix UI-based components
  - Button, Dialog, Dropdown, Navigation Menu
  - Accordion, Carousel, Tooltip, etc.

- **Section Components** (`resources/js/components/sections/`):
  - `HeroSection.tsx`
  - `OurFeatures.tsx`
  - `WhyChooseUs.tsx`
  - `IntegrationsSection.tsx`
  - `FAQSection.tsx`
  - etc.

**Navigation:**
- `NavigationProvider.tsx` - Context provider for navigation state
- Responsive navigation with mobile support

### 4. Form Handling

**Controllers:**
- `FormController.php` - Standard form submission
- `FormControllerWithHubSpot.php` - HubSpot integration

**Routes:**
```php
POST /contact          -> FormController@submitContactForm
POST /request-demo     -> FormController@submitRequestDemo
```

**Features:**
- Server-side validation
- HubSpot CRM integration
- Email notifications
- Statamic form storage (fallback)

### 5. Search Functionality

**Implementation:**
```php
POST /api/search -> SearchController@search
```

Searches through Statamic content collections.

### 6. Authentication

**Provider:** Laravel Fortify
- User registration
- Login/logout
- Password reset
- Email verification

**Protected Routes:**
```php
/dashboard - Requires authentication
```

### 7. HubSpot Integration

See dedicated documentation:
- `HUBSPOT_README.md`
- `HUBSPOT_INTEGRATION_GUIDE.md`
- `HUBSPOT_QUICK_SETUP.md`

**Features:**
- Contact form submission to HubSpot
- Lead tracking
- CRM synchronization

---

## ⚙️ Configuration

### Key Configuration Files

#### `config/app.php`
- Application name, environment, debug mode
- Timezone, locale settings
- Service provider registration

#### `config/database.php`
- Database connections (SQLite default)
- Redis configuration

#### `config/statamic/*.php`
- CMS configuration
- API settings
- Asset handling
- User management

#### `config/services.php`
```php
'hubspot' => [
    'api_key' => env('HUBSPOT_API_KEY'),
    'portal_id' => env('HUBSPOT_PORTAL_ID'),
    'contact_form_guid' => env('HUBSPOT_CONTACT_FORM_GUID'),
],
```

### Frontend Configuration

#### `vite.config.ts`
```typescript
- Input files: globals.css, theme.css, app.tsx
- SSR entry: ssr.tsx
- Plugins: React, Tailwind, Wayfinder
```

#### `tsconfig.json`
- TypeScript compiler options
- Path aliases
- Module resolution

#### `components.json`
- Radix UI component configuration
- Component path mapping

---

## 🔨 Common Development Tasks

### Creating a New Page

1. **Create Statamic Entry:**
   - Add entry in `content/collections/pages/`
   - Or use Statamic Control Panel

2. **Add Route (if custom):**
```php
// routes/web.php
Route::get('/my-page', function () {
    return Inertia::render('my-page');
})->name('my-page');
```

3. **Create React Component:**
```tsx
// resources/js/pages/my-page.tsx
export default function MyPage() {
    return <div>My Page Content</div>;
}
```

### Adding a New Component

```tsx
// resources/js/components/ui/my-component.tsx
import * as React from 'react';

export function MyComponent() {
    return <div>Component</div>;
}
```

### Creating API Endpoints

```php
// routes/web.php
Route::post('/api/my-endpoint', [MyController::class, 'method']);

// app/Http/Controllers/MyController.php
public function method(Request $request)
{
    return response()->json(['status' => 'success']);
}
```

### Running Database Migrations

```bash
# Create new migration
php artisan make:migration create_something_table

# Run migrations
php artisan migrate

# Rollback last migration
php artisan migrate:rollback

# Reset and re-run all migrations
php artisan migrate:fresh
```

### Clearing Caches

```bash
# Clear all caches
php artisan optimize:clear

# Individual caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Statamic cache
php artisan statamic:stache:clear
```

### Code Quality

```bash
# Format code
npm run format

# Lint code
npm run lint

# Type check
npm run types

# PHP code style (if Pint is configured)
./vendor/bin/pint
```

### Running Tests

```bash
# PHP tests
composer test
# or
php artisan test

# Run specific test
php artisan test --filter=TestName
```

---

## 🌐 Deployment

### Vercel Deployment (Configured)

The project includes `vercel.json` configuration.

**Build Command:**
```bash
npm run vercel-build
```

This command:
1. Builds frontend assets with Vite
2. Copies storage to public directory

**Environment Variables:**
Set all `.env` variables in Vercel dashboard.

### Manual Deployment Steps

1. **Prepare Environment:**
```bash
composer install --no-dev --optimize-autoloader
npm install
npm run build
```

2. **Optimize Laravel:**
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

3. **Set Permissions:**
```bash
chmod -R 775 storage bootstrap/cache
```

4. **Configure Web Server:**
- Point document root to `public/`
- Enable URL rewriting
- PHP 8.2+ required

### Environment Variables for Production

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

# Use production database
DB_CONNECTION=mysql
DB_HOST=your-host
DB_DATABASE=your-database
DB_USERNAME=your-username
DB_PASSWORD=your-password

# Add production mail settings
MAIL_MAILER=smtp
# ... mail configuration

# Add production HubSpot keys
HUBSPOT_API_KEY=prod-key
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. "Class not found" errors
```bash
composer dump-autoload
```

#### 2. Frontend not updating
```bash
npm run build
php artisan optimize:clear
```

#### 3. Permission errors
```bash
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

#### 4. Database connection errors
- Check `.env` database settings
- Ensure `database.sqlite` exists
- Verify file permissions

#### 5. Statamic content not showing
```bash
php artisan statamic:stache:clear
php artisan statamic:assets:generate-presets
```

#### 6. TypeScript errors
```bash
npm run types  # Check errors
rm -rf node_modules package-lock.json
npm install
```

#### 7. Vite build failures
```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Debug Mode

Enable detailed error messages:
```env
APP_DEBUG=true
```

View logs:
```bash
tail -f storage/logs/laravel.log
```

---

## 📚 Additional Resources

### Official Documentation

- **Laravel**: https://laravel.com/docs
- **Statamic**: https://statamic.dev
- **Inertia.js**: https://inertiajs.com
- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Vite**: https://vitejs.dev

### Project-Specific Documentation

- `HUBSPOT_README.md` - HubSpot integration overview
- `HUBSPOT_INTEGRATION_GUIDE.md` - Detailed HubSpot setup
- `HUBSPOT_QUICK_SETUP.md` - Quick start for HubSpot
- `SEO_META_DESCRIPTION_SETUP.md` - SEO configuration

### Useful Commands Reference

```bash
# Laravel
php artisan list                    # List all commands
php artisan route:list             # Show all routes
php artisan tinker                 # Interactive shell

# Statamic
php artisan statamic:make:user     # Create user
php artisan statamic:install:ssg   # Static site generation

# Composer
composer show                      # List installed packages
composer update                    # Update dependencies
composer require package/name      # Install new package

# npm
npm list                           # List installed packages
npm outdated                       # Check for updates
npm update                         # Update packages
```

---

## 👥 Users & Access

Current users configured in `users/`:
- `abhijitk@examroom.ai`
- `shashidharakv@examroom.ai`

### Creating New Users

```bash
php artisan statamic:make:user
```

Or create YAML file in `users/` directory.

---

## 🔐 Security Notes

1. **Never commit `.env` file** - Contains sensitive credentials
2. **Keep dependencies updated** - Run `composer update` and `npm update` regularly
3. **Use strong passwords** - For database and admin accounts
4. **Enable HTTPS in production** - Always use SSL certificates
5. **Validate user input** - Use Laravel's validation features
6. **Set proper file permissions** - Restrict access to sensitive directories

---

## 📞 Support & Contribution

### Getting Help

1. Check this manual first
2. Review project-specific documentation files
3. Check Laravel/Statamic documentation
4. Review code comments and existing implementations

### Development Guidelines

1. **Code Style**: Follow PSR-12 for PHP, use Prettier for JS/TS
2. **Git Workflow**: 
   - Create feature branches
   - Use descriptive commit messages
   - Test before committing
3. **Testing**: Write tests for new features
4. **Documentation**: Update docs when adding features

---

## 📝 License

MIT License - See project repository for details.

---

**Last Updated**: November 2025  
**Project Version**: 1.0  
**Maintainers**: Abhijit Khatua, Shashidhara KV

---

## Quick Reference Card

```bash
# Start everything
composer dev

# Build for production
npm run build

# Clear all caches
php artisan optimize:clear

# Run tests
composer test

# Format code
npm run format

# Check types
npm run types
```

---

*This manual is maintained alongside the project. Please keep it updated as the project evolves.*