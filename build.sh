#!/bin/sh
cd ../
npm run build
mkdir output
cp -R ./skklub-v3-frontend/.next ./output
cp -R ./output ./skklub-v3-frontend/.next