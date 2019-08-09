#!/bin/sh

git pull origin master
npm install
npm run build
rm -rf /var/www/qels-front/*
cp -r dist/* /var/www/qels-front
