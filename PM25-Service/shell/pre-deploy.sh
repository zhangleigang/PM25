#!/bin/bash
set -e

npm --registry=http://r.npm.sankuai.com install
npm outdated --depth=0
