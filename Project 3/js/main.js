
TweenMax.to(".ul1", 3, {top: 0});
TweenMax.to(".logo", 2, {left: 25});
TweenMax.to(".banner-image", 1, {opacity: 1, delay: 2});
TweenMax.to(".myBackgroundImage", 1, {opacity: 1, delay: 3});

function showThumbnails(){
	TweenMax.to(".far-right-thumb", 1, {opacity: 1, delay: 1});
	TweenMax.to(".pic2", 1, {opacity: 1, delay: 1});
	TweenMax.to(".pic3", 1, {opacity: 1, delay: 1});
	TweenMax.to(".pic4", 1, {opacity: 1, delay: 1});
}