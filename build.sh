#!/usr/bin/env sh
npm ci
ng deploy --branch=master --no-silent --repo=https://github.com/jien-huang/jien-huang.github.io.git --cname=www.automation-test.com
