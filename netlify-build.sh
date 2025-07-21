#!/bin/bash

# Netlify Build Script for Maven Insiders
echo "🚀 Starting Maven Insiders build..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the client
echo "🔨 Building client application..."
npm run build:client

# Verify build output
echo "✅ Build completed! Files in dist/spa:"
ls -la dist/spa/

echo "🎉 Maven Insiders is ready for deployment!"
