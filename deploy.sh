#!/bin/sh

git pull origin master
npm install
npm run build
sudo rm -rf /var/www/qels-front/*
sudo cp -r dist/* /var/www/qels-front
