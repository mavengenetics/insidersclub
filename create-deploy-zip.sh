#!/bin/bash

# Create deployment directory
mkdir -p netlify-deploy

# Copy essential files to deployment directory
cp package.json netlify-deploy/
cp package-lock.json netlify-deploy/
cp netlify.toml netlify-deploy/
cp tsconfig.json netlify-deploy/
cp vite.config.ts netlify-deploy/
cp postcss.config.js netlify-deploy/
cp tailwind.config.ts netlify-deploy/
cp components.json netlify-deploy/
cp .nvmrc netlify-deploy/

# Copy directories
cp -r client netlify-deploy/
cp -r server netlify-deploy/
cp -r shared netlify-deploy/
cp -r public netlify-deploy/
cp -r netlify netlify-deploy/

echo "Deployment directory created at: netlify-deploy/"
echo "Zip this directory for manual Netlify deployment"
echo ""
echo "Contents:"
ls -la netlify-deploy/
