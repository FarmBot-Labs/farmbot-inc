#!/bin/bash
npm install
./clean.sh
node_modules/typescript/bin/tsc
npm version patch
npm publish