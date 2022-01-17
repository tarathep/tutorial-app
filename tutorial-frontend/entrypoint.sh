#!/bin/sh

ROOT_DIR=/usr/share/nginx/html

echo "Replacing env constants in JS"
for file in $ROOT_DIR/js/app.*.js* $ROOT_DIR/index.html $ROOT_DIR/js/chunk-*.js;
do
  echo "Processing $file ..."

  sed -i 's|http://localhost:8089/api|'${VUE_APP_ENPOINT_API_BACKEND}'|g' $file

done

nginx -g 'daemon off;'
