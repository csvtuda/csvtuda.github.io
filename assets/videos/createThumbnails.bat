@echo off
for /R %%f in (*.mp4 *.mkv) do (
    @echo Processing %%f...
    REM extract first image of video file and save it as a jpg.
    ffmpeg -y -i %%f -vframes 1 -r 1 -f image2 -update 1 "%%~dpf%%~nf.jpg" >nul 2>&1
    @echo   Saved to %%~dpf%%~nf.jpg
)