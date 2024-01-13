#!/bin/bash

CONTAINER_NAME='markdown_previewer'
IMAGE_NAME='samjgoes/markdown_previewer:v0.0.0'

docker create \
	--name $CONTAINER_NAME \
    -p 3000:3000 \
    -v /$HOME/markdown-previewer/src:/app/src \
    -v /$HOME/markdown-previewer/public:/app/public \
    -v /$HOME/markdown-previewer/package.json:/app/package.json \
    -v /$HOME/markdown-previewer/.eslintrc.json:/app/.eslintrc.json \
    -v /$HOME/markdown-previewer/.prettierrc:/app/.prettierrc \
    $IMAGE_NAME 
