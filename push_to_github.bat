@echo off
setlocal
cd /d "%~dp0"
set GIT_EXE=%LOCALAPPDATA%\Programs\Git\cmd\git.exe
if not exist "%GIT_EXE%" (
    set GIT_EXE=git
)

echo ========================================================
echo   Pushing Solar System Exhibit to GitHub
echo ========================================================
echo.
echo Make sure you have created an empty repository on GitHub:
echo https://github.com/new
echo (Suggested Repository Name: solar-system-gravity-exhibit)
echo.

set /p REPO_URL="Enter your GitHub Repository URL (or press Enter for https://github.com/gopi0502/solar-system-gravity-exhibit.git): "
if "%REPO_URL%"=="" set REPO_URL=https://github.com/gopi0502/solar-system-gravity-exhibit.git

echo.
echo Setting remote origin to %REPO_URL%...
"%GIT_EXE%" remote remove origin 2>nul
"%GIT_EXE%" remote add origin %REPO_URL%

echo Pushing main branch to GitHub...
"%GIT_EXE%" push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   SUCCESS: Project published to GitHub!
    echo ========================================================
) else (
    echo.
    echo [NOTE] If prompted for credentials, you can enter your GitHub Username
    echo and a Personal Access Token (PAT) with 'repo' scope.
)

pause
