#!/bin/zsh

# Check if the commit message is provided
if [ -z "$1" ]; then
    echo "Error: Please provide a commit message"
    exit 1
fi

# Run git add and git commit
git add . && git commit -m "$1"
