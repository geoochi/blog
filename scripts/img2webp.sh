#!/bin/sh

folder_list=("src/public")
extensions=("png" "jpg" "jpeg")

for ext in "${extensions[@]}"; do
    for folder in "${folder_list[@]}"; do
        for file in $folder/*.$ext; do
            cwebp $file -q 50 -o ${file%.$ext}.webp -quiet
            rm $file
        done
    done
done
