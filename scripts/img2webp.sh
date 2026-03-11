#!/bin/zsh

folder_list=("./docs/public")
extensions=("png" "jpg" "jpeg")

# zsh's null matching
setopt NULL_GLOB

for ext in "${extensions[@]}"; do
    for folder in "${folder_list[@]}"; do
        # check if folder exists
        if [ ! -d "$folder" ]; then
            echo "Warning: Folder $folder does not exist"
            continue
        fi

        for file in "$folder"/*."$ext"; do
            # check if file exists
            if [ -f "$file" ]; then
                if cwebp "$file" -q 90 -o "${file%.$ext}.webp" -quiet; then
                    rm "$file"
                    echo "$file -> ${file%.$ext}.webp"
                else
                    echo "Warning: $file conversion failed"
                fi
            fi
        done
    done
done
