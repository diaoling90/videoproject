
var videoApp = angular.module('video',[]);
videoApp.controller('video_ctrl',function ($scope) {
   $scope.video_url = "../video_assert/1.mp4";
   $scope.video_name = "test";
});

var videoPlay = document.getElementById('videoPlay');
var videoPause = document.getElementById('videoPause');
var video = document.getElementById('video');
video.src ="../video_assert/1.mp4";
videoPlay.onclick = function () {
    video.play();
};

videoPause.onclick = function () {
    video.pause();
};