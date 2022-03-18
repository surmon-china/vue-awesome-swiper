#!/bin/sh

set -e

PKG_VERSION=$(jq -r '.version' package.json)

git fetch origin v"$PKG_VERSION" || {
  npx standard-version --skip.changelog --skip.commit -a --release-as "$PKG_VERSION"
  git push --follow-tags origin main
}
