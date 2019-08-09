#!/bin/sh

git pull origin master
npm install
npm run build
# rm -rf /var/www/bifrost-builder/*
# cp -r dist/* /var/www/bifrost-builder
