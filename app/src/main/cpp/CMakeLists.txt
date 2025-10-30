cmake_minimum_required(VERSION 3.22.1)

project("edgeviewer")

find_package(OpenCV REQUIRED)

add_library(native_opencv SHARED
    native_opencv.cpp)

target_link_libraries(native_opencv
    ${OpenCV_LIBS}
    android
    log)