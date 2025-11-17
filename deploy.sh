#!/bin/bash

# Vercel Deployment Script for Examlock
# Run with: bash deploy.sh

set -e  # Exit on error

echo "🚀 Starting Vercel Deployment Process..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check if Vercel CLI is available
echo -e "${BLUE}Step 1: Checking Vercel CLI...${NC}"
if ! command -v vercel &> /dev/null && ! [ -f "./node_modules/.bin/vercel" ]; then
    echo -e "${YELLOW}Vercel CLI not found. Installing locally...${NC}"
    npm install --save-dev vercel
fi
echo -e "${GREEN}✓ Vercel CLI ready${NC}"
echo ""

# Step 2: Install dependencies
echo -e "${BLUE}Step 2: Installing Composer dependencies...${NC}"
composer install --no-dev --optimize-autoloader --no-interaction
echo -e "${GREEN}✓ Composer dependencies installed${NC}"
echo ""

echo -e "${BLUE}Step 3: Installing NPM dependencies...${NC}"
npm install
echo -e "${GREEN}✓ NPM dependencies installed${NC}"
echo ""

# Step 4: Build assets
echo -e "${BLUE}Step 4: Building frontend assets...${NC}"
npm run build
echo -e "${GREEN}✓ Assets built successfully${NC}"
echo ""

# Step 5: Verify api/index.php exists
echo -e "${BLUE}Step 5: Verifying Vercel serverless function...${NC}"
if [ ! -f "api/index.php" ]; then
    echo -e "${RED}✗ Error: api/index.php not found${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Serverless function verified${NC}"
echo ""

# Step 6: Check environment variables
echo -e "${BLUE}Step 6: Environment variables check...${NC}"
echo -e "${YELLOW}⚠ Make sure you've set these in Vercel Dashboard:${NC}"
echo "  - APP_KEY"
echo "  - HUBSPOT_API_KEY"
echo "  - HUBSPOT_PORTAL_ID"
echo "  - HUBSPOT_CONTACT_FORM_GUID"
echo "  - HUBSPOT_DEMO_FORM_GUID"
echo ""
read -p "Have you set all environment variables in Vercel? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Please set environment variables first:${NC}"
    echo "  1. Go to https://vercel.com/dashboard"
    echo "  2. Select your project → Settings → Environment Variables"
    echo "  3. Add all required variables"
    echo ""
    exit 1
fi
echo ""

# Step 7: Deploy
echo -e "${BLUE}Step 7: Deploying to Vercel...${NC}"
echo ""
echo -e "${YELLOW}Choose deployment type:${NC}"
echo "  1) Production deployment (vercel --prod)"
echo "  2) Preview deployment (vercel)"
echo ""
read -p "Enter choice (1 or 2): " choice

if [ "$choice" = "1" ]; then
    echo -e "${BLUE}Deploying to production...${NC}"
    npx vercel --prod
elif [ "$choice" = "2" ]; then
    echo -e "${BLUE}Deploying preview...${NC}"
    npx vercel
else
    echo -e "${RED}Invalid choice${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "Your site should be live at the URL shown above."
echo -e "Check Vercel dashboard for deployment details: ${BLUE}https://vercel.com/dashboard${NC}"
echo ""
