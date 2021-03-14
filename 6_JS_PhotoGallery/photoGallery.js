var smallPict = ["1_small.jpg","2_small.jpg","3_small.jpg","4_small.jpg"];
var bigPict = ["1_big.jpg","2_big.jpg","3_big.jpg","4_big.jpg"];
var nowPicture = 0;  
var imageDomElement = document.createElement("img");
var appDiv = document.getElementById("big_img");
var src;

function showBigPict(numNowPict){
  src= "img/big/" + bigPict[numNowPict];
  imageDomElement.src = src;
  appDiv.appendChild(imageDomElement);
}

function prevPict() {
  if (nowPicture ==  0) {
    nowPicture = bigPict.length;
    showBigPict(nowPicture);
  }

  appDiv.innerHTML = "";
  showBigPict(nowPicture-1);
  nowPicture--;
}

function nextPict() {    
  if ((0 > nowPicture) || (nowPicture < bigPict.length-1)) {
    ++nowPicture;
    appDiv.innerHTML = "";
    showBigPict(nowPicture);

  } else {
    nowPicture = 0;
    showBigPict(nowPicture);		 
    }
}
