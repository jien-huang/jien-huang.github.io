#!/usr/bin/env sh
npm i -g angular-cli-ghpages
npm ci
npm run build --prod
cp CNAME dist
ngh --branch master -S --repo https://jien-huang.github.com/jien-huang.github.io -e huang_jien@msn.com --no-silent