#!/bin/sh

set -e

PKG_VERSION=$(jq -r '.version' package.json)

git fetch origin v"$PKG_VERSION" || {
  type standard-version || npm i -g standard-version
  standard-version -a --release-as "$PKG_VERSION"
}
