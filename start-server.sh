#!/bin/bash
# Quick start script for Café MRM Website

echo "Starting Café MRM Website Server..."
echo "======================================"
echo ""

cd "$(dirname "$0")"

# Check if images exist
echo "Checking image files..."
ls -lh images/*.png images/*.jpg 2>/dev/null

echo ""
echo "Starting Python HTTP Server on port 8000..."
echo ""
echo "✅ Main Website: http://localhost:8000"
echo "✅ Admin Panel: http://localhost:8000/admin.html"
echo ""
echo "Admin Login Credentials:"
echo "   Username: admin"
echo "   Password: cafe2024"
echo ""
echo "Press Ctrl+C to stop the server"
echo "======================================"
echo ""

python3 -m http.server 8000
