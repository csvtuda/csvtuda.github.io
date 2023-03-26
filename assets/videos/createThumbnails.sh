for f in $(
    find . \
    -name '*.mp4' -or \
    -name '*.mkv'
); do
    echo "Processing $f...";
    basename=${f%.*};
    ffmpeg -y -i $f -vframes 1 -r 1 -f image2 -update 1 "$basename.jpg" &>/dev/null;
    echo "  Saved to $basename.jpg";
done
