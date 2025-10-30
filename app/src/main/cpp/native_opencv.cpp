#include <jni.h>
#include <opencv2/opencv.hpp>
#include <android/log.h>

#define LOG_TAG "NativeOpenCV"
#define LOGD(...) __android_log_print(ANDROID_LOG_DEBUG, LOG_TAG, __VA_ARGS__)

extern "C" {

JNIEXPORT void JNICALL
Java_com_flamapp_edgeviewer_MainActivity_processFrame(JNIEnv *env, jobject thiz, jlong addrRgba, jlong addrGray) {
    cv::Mat& mRgb = *(cv::Mat*)addrRgba;
    cv::Mat& mGray = *(cv::Mat*)addrGray;

    // Convert to grayscale
    cv::cvtColor(mRgb, mGray, cv::COLOR_RGBA2GRAY);

    // Apply Canny edge detection
    cv::Canny(mGray, mGray, 50, 150);
}

}