#!/bin/sh

set -e

PKG_VERSION=$(jq -r '.version' package.json)

git fetch origin v"$PKG_VERSION" || {
  type standard-version || npm i -g standard-version
  git add *
  git commit -am "$PKG_VERSION"
  standard-version --skip.changelog --skip.commit -a --release-as "$PKG_VERSION"
  git push --follow-tags origin master
}
