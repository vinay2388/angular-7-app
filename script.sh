#!/bin/bash
if [[ -z "${username}" && -z "${password}" ]]; then
  gitUrl=$giturl
fi
echo $gitUrl
git clone ${gitUrl} /opt/apps/angular
cp /opt/apps/angular/start.sh /opt/apps
cd /opt/apps/angular
npm install