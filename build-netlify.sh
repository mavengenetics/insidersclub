#!/bin/bash
echo "Starting Netlify build..."
echo "Node version:"
node --version
echo "NPM version:"
npm --version
echo "Current directory:"
pwd
echo "Files in directory:"
ls -la
echo "Installing dependencies..."
npm install
echo "Building client..."
npm run build:client
echo "Build complete!"
echo "Output directory contents:"
ls -la dist/spa/
