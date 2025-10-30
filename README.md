# FlamApp Edge Detection Viewer

A real-time Android app for edge detection using OpenCV (C++), OpenGL ES, and JNI, with a TypeScript web viewer.

## Features

- **Camera Feed Integration**: Captures live camera frames using Android Camera2 API.
- **OpenCV Processing**: Applies Canny edge detection in C++ via JNI.
- **OpenGL ES Rendering**: Displays processed frames in real-time (target 10-15 FPS).
- **Web Viewer**: TypeScript-based page to display processed frames with stats.
- **Toggle Feature**: Switch between raw camera feed and edge-detected output.
- **FPS Counter**: Real-time FPS display.

## Screenshots

![App Screenshot](screenshots/app_screenshot.png)  
*Screenshot of the Android app showing edge detection.*

## Setup Instructions

### Prerequisites
- Android Studio with NDK installed.
- OpenCV Android SDK (download from [OpenCV releases](https://opencv.org/releases/)).
- Node.js for TypeScript compilation.

### Android Setup
1. Clone the repository.
2. Place OpenCV Android SDK in the project root as `opencv/`.
3. Open in Android Studio and sync Gradle.
4. Build and run on a device with camera.

### Web Viewer Setup
1. Navigate to `web/` directory.
2. Run `npm install typescript` (if needed).
3. Compile TypeScript: `tsc viewer.ts`.
4. Open `index.html` in a browser.

## Architecture

- **Android App (`app/`)**: Java code for camera access, UI, and JNI calls.
- **JNI/Native (`jni/`, `app/src/main/cpp/`)**: C++ code with OpenCV for image processing.
- **OpenGL (`gl/`)**: Renderer classes for displaying textures.
- **Web (`web/`)**: TypeScript for a simple viewer page.

Frame flow: Camera → JNI → OpenCV Processing → OpenGL Rendering → Display.  
Web viewer receives static frames for demonstration.

## Git Repository

[Link to GitHub Repo](https://github.com/mithun0524/FlamApp-Assignment)

Commit history reflects development progress.