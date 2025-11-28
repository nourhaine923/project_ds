@echo off
echo 🚦 Starting Smoke Test...

set IMAGE_NAME=%1
set CONTAINER_NAME=react_test_container

echo 🐳 Removing old container if exists...
docker rm -f %CONTAINER_NAME% >nul 2>&1

echo 🐳 Starting container from image: %IMAGE_NAME%
docker run -d -p 3000:3000 --name %CONTAINER_NAME% %IMAGE_NAME%

echo ⏳ Waiting for the app to start...
timeout /t 5 >nul

echo 🌐 Testing http://localhost:3000 ...
curl -I http://localhost:3000 > response.txt 2>&1

findstr /C:"HTTP/1.1 200" response.txt >nul
if %errorlevel%==0 (
    echo ✅ SMOKE TEST PASSED
    echo PASSED > smoke_test_result.log
) else (
    echo ❌ SMOKE TEST FAILED
    echo FAILED > smoke_test_result.log
)

echo 🧹 Cleaning up...
docker rm -f %CONTAINER_NAME% >nul 2>&1
exit /b 0
