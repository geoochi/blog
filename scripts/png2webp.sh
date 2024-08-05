#!/bin/sh

folder_list=("docs/public")

for folder in "${folder_list[@]}"; do
    for file in $folder/*.webp; do
        cwebp $file -q 50 -o ${file%.webp}.webp -quiet
        rm $file
    done
done
