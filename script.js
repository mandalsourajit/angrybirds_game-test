var highestScore = 0;
var gameNotOver = true;
restart();




function restart() {

  var cross = true;
  var sco = 0;

  const vid = document.getElementById('vid');
  vid.src = 'bg1.mp4';
  score = document.querySelector('#score');
  score.style.display = 'inline-block';
  mainObj = document.querySelector('.mainObj');
  mainObj.style.display = 'inline-block';
  mainObj.style.left = 700 + 'px';
  gameNotOver = true;

  updateScore(sco);



  document.onkeydown = function (e) {
    // console.log("The key is", e.key);

    if (e.key === "ArrowRight") {
      mainObj = document.querySelector('.mainObj');
      mainX = parseInt(window.getComputedStyle(mainObj, null).getPropertyValue('left'));
      mainObj.style.left = mainX + 10 + 'px';
    }
    if (e.key === "ArrowLeft") {
      mainObj = document.querySelector('.mainObj');
      mainX = parseInt(window.getComputedStyle(mainObj, null).getPropertyValue('left'));
      mainObj.style.left = (mainX - 10) + 'px';
    }
    if (e.key === "ArrowUp") {
      mainObj = document.querySelector('.mainObj');
      mainY = parseInt(window.getComputedStyle(mainObj, null).getPropertyValue('top'));
      mainObj.style.top = (mainY - 10) + 'px';
    }
    if (e.key === "ArrowDown") {
      mainObj = document.querySelector('.mainObj');
      mainY = parseInt(window.getComputedStyle(mainObj, null).getPropertyValue('top'));
      mainObj.style.top = (mainY + 10) + 'px';
    }

    // if (e.key == "Enter" && !(gameNotOver)) {
    //   restart();    
    //   console.log("The key is", e.key);

    // }

  }

  // document.addEventListener('DOMContentLoaded', function () {
  //   const vid = document.getElementById('vid');
  //   function changeVideo(newSrc) {
  //     vid.setAttribute('src', newSrc);
  //     vid.load();
  //     vid.play();
  //   }

  //   changeVideo("bg2.mp4");
  // });
  //ANIM -1


  // obs2 = document.querySelector('.obs2');
  // obs2.classList.add('piganimation');
  // setTimeout(() => {
  //   obs2.classList.remove('piganimation');
  //   obs2.style.display = none;
  // }, 7000);


  //ANIM - 2

  // obs10 = document.querySelector('.obs10');
  // obs10.classList.add('birdanimation');
  // setTimeout(() => {
  //   obs10.classList.remove('birdanimation');
  //   obs10.style.display = none;
  // }, 1950);

  //ANIM - 3

  // obs11 = document.querySelector('.obs11');
  // obs12 = document.querySelector('.obs12');
  // obs13 = document.querySelector('.obs13');

  // obs12.style.display = 'inline-block';
  // setTimeout(() => {
  //   obs12.style.display = 'none';
  //   obs11.style.display = 'inline-block';
  //   setTimeout(() => {
  //     obs11.style.display = 'none';
  //     obs13.style.display = 'inline-block';
  //     setTimeout(() => {
  //       obs13.style.display = 'none';


  //       setTimeout(() => {
  //         obs11.style.display = 'inline-block';
  //         obs11.classList.add('cloud1');
  //         setTimeout(() => {
  //           obs11.classList.remove('cloud1');
  //           obs11.style.display = 'none';
  //           setTimeout(() => {
  //             obs11.style.display = 'inline-block';
  //             obs11.classList.add('cloud2');
  //             setTimeout(() => {
  //               obs11.classList.remove('cloud2');
  //               obs11.style.display = 'none';
  //             }, 3000);
  //           }, 1000);
  //         }, 3000);
  //       }, 1000);

  //     }, 300);

  //   }, 300);
  // }, 300);



  // ANIM- NONE

  // obs11.classList.add('cloud1');
  // setTimeout(() => {
  //   obs11.classList.remove('cloud1');
  //   obs11.style.display = 'none';
  //   setTimeout(() => {
  //     obs11.style.display = 'inline-block';
  //     obs11.classList.add('cloud2');
  //     setTimeout(() => {
  //       obs11.classList.remove('cloud2');
  //       obs11.style.display = 'none';
  //     }, 3000);
  //   }, 1000);
  // }, 3000);

  // obs11.classList.add('cloud2');
  // setTimeout(() => {
  //   obs11.classList.remove('cloud2');
  //   obs11.style.display = none;
  // }, 3000);


  //ANIM - 4

  // obs1 = document.querySelector('.obs1');
  // obs1.classList.add('fireball');
  // setTimeout(() => {
  //   obs1.classList.remove('fireball');
  //   obs1.style.display = 'none;'

  // }, 5000);
  obs1 = document.querySelector('.obs1');
  obs2 = document.querySelector('.obs2');
  obs3 = document.querySelector('.obs3');
  obs4 = document.querySelector('.obs4');
  obs5 = document.querySelector('.obs5');
  obs6 = document.querySelector('.myScore');
  obs7 = document.querySelector('.high');
  obs8 = document.querySelector('.obs8');
  obs9 = document.querySelector('.obs9');
  obs10 = document.querySelector('.obs10');
  obs11 = document.querySelector('.obs11');
  obs12 = document.querySelector('.obs12');
  obs13 = document.querySelector('.obs13');
  obs1.style.left = 2000 + 'px';
  obs2.style.left = 2000 + 'px';
  obs3.style.left = 2000 + 'px';
  obs4.style.left = 2000 + 'px';
  obs5.style.left = 2000 + 'px';
  obs6.style.left = 2000 + 'px';
  obs7.style.left = 2000 + 'px';
  obs8.style.left = 2000 + 'px';
  obs9.style.left = 2000 + 'px';
  obs10.style.left = 2000 + 'px';
  obs11.style.left = 2000 + 'px';
  obs12.style.left = 2000 + 'px';
  obs13.style.left = 2000 + 'px';


  ////REAL ANIME
  animation();

  //a-1
  function animation() {
    if (gameNotOver) {
      obs2 = document.querySelector('.obs2');
      obs2.style.display = 'inline-block';
      obs2.style.left = 70 + 'px';
      obs2.classList.add('piganimation');
      setTimeout(() => {
        obs2.classList.remove('piganimation');
        obs2.style.display = 'none';
        obs2.style.left = 2000 + 'px';
      }, 7000);
    }

    if (gameNotOver) {
      setTimeout(() => {

        //a-2 after a-1
        if (gameNotOver) {
          obs10 = document.querySelector('.obs10');
          obs10.style.left = 70 + 'px';
          obs10.classList.add('birdanimation');
          obs10.style.display = 'inline-block';
          setTimeout(() => {
            obs10.classList.remove('birdanimation');
            obs10.style.display = 'none';
            obs10.style.left = 2000 + 'px';
          }, 1950);
        }

        if (gameNotOver) {
          setTimeout(() => {
            //a-3 after a-2
            obs1 = document.querySelector('.obs1');
            obs1.style.left = 70 + 'px';
            obs1.classList.add('fireball');
            obs1.style.display = 'inline-block';
            setTimeout(() => {
              obs1.classList.remove('fireball');
              obs1.style.display = 'none';
              obs1.style.left = 7000 + 'px';

            }, 5000);

            if (gameNotOver) {
              setTimeout(() => {
                //a-1 again just after a-3
                obs2 = document.querySelector('.obs2');
                obs2.style.left = 70 + 'px';
                obs2.classList.add('piganimation');
                obs2.style.display = 'inline-block';
                setTimeout(() => {
                  obs2.classList.remove('piganimation');
                  obs2.style.display = 'none';
                  obs2.style.left = 2000 + 'px';
                }, 7000);

                if (gameNotOver) {
                  setTimeout(() => {
                    //a-2 in middle of a-1
                    obs10 = document.querySelector('.obs10');
                    obs10.style.left = 70 + 'px';
                    obs10.classList.add('birdanimation');
                    obs10.style.display = 'inline-block';
                    setTimeout(() => {
                      obs10.classList.remove('birdanimation');
                      obs10.style.display = 'none';
                      obs10.style.left = 2000 + 'px';
                    }, 1950);

                    if (gameNotOver) {
                      setTimeout(() => {
                        obs1 = document.querySelector('.obs1');
                        obs1.style.left = 70 + 'px';
                        obs1.classList.add('fireball');
                        obs1.style.display = 'inline-block';
                        setTimeout(() => {
                          obs1.classList.remove('fireball');
                          obs1.style.display = 'none';
                          obs1.style.left = 2000 + 'px';

                        }, 5000);

                        if (gameNotOver) {
                          setTimeout(() => {
                            //a-2 and a-1 together

                            obs2 = document.querySelector('.obs2');
                            obs2.style.left = 70 + 'px';
                            obs2.classList.add('piganimation');
                            obs2.style.display = 'inline-block';
                            setTimeout(() => {
                              obs2.classList.remove('piganimation');
                              obs2.style.display = 'none';
                              obs2.style.left = 7000 + 'px';
                            }, 7000);
                            obs10 = document.querySelector('.obs10');
                            obs10.style.left = 70 + 'px';
                            obs10.classList.add('birdanimation');
                            obs10.style.display = 'inline-block';
                            setTimeout(() => {
                              obs10.classList.remove('birdanimation');
                              obs10.style.display = 'none';
                              obs10.style.left = 7000 + 'px';
                            }, 1950);

                            if (gameNotOver) {
                              setTimeout(() => {
                                //a-3 again

                                obs1 = document.querySelector('.obs1');
                                obs1.style.left = 70 + 'px';
                                obs1.classList.add('fireball');
                                obs1.style.display = 'inline-block';
                                setTimeout(() => {
                                  obs1.classList.remove('fireball');
                                  obs1.style.display = 'none';
                                  obs1.style.left = 7000 + 'px';

                                }, 5000);

                                if (gameNotOver) {
                                  setTimeout(() => {
                                    //a-1 , a-2 and a-3 together

                                    obs2 = document.querySelector('.obs2');
                                    obs2.style.left = 70 + 'px';
                                    obs2.classList.add('piganimation');
                                    obs2.style.display = 'inline-block';
                                    setTimeout(() => {
                                      obs2.classList.remove('piganimation');
                                      obs2.style.display = 'none';
                                      obs2.style.left = 7000 + 'px';
                                    }, 7000);

                                    obs10 = document.querySelector('.obs10');
                                    obs10.style.left = 70 + 'px';
                                    obs10.classList.add('birdanimation');
                                    obs10.style.display = 'inline-block';
                                    setTimeout(() => {
                                      obs10.classList.remove('birdanimation');
                                      obs10.style.display = 'none';
                                      obs10.style.left = 7000 + 'px';
                                    }, 1950);

                                    obs1 = document.querySelector('.obs1');
                                    obs1.style.left = 70 + 'px';
                                    obs1.classList.add('fireball');
                                    obs1.style.display = 'inline-block';
                                    setTimeout(() => {
                                      obs1.classList.remove('fireball');
                                      obs1.style.display = 'none';
                                      obs1.style.left = 7000 + 'px';

                                    }, 5000);


                                    setTimeout(() => {
                                      const vid = document.getElementById('vid');
                                      vid.src = 'bg2.mp4';
                                    }, 7000);

                                    if (gameNotOver) {
                                      setTimeout(() => {


                                        const vid = document.getElementById('vid');
                                        vid.src = 'bg2.mp4';
                                        //special cloud
                                        if (gameNotOver) {
                                          obs11 = document.querySelector('.obs11');
                                          obs12 = document.querySelector('.obs12');
                                          obs13 = document.querySelector('.obs13');


                                          obs12.style.display = 'inline-block';
                                          setTimeout(() => {
                                            obs12.style.display = 'none';
                                            obs12.style.left = 7000 + 'px';
                                            obs11.style.display = 'inline-block';
                                            setTimeout(() => {
                                              obs11.style.display = 'none';
                                              obs11.style.left = 7000 + 'px';
                                              obs13.style.display = 'inline-block';
                                              setTimeout(() => {
                                                obs13.style.display = 'none';
                                                obs13.style.left = 7000 + 'px';


                                                setTimeout(() => {
                                                  obs11.style.display = 'inline-block';
                                                  obs11.classList.add('cloud1');
                                                  setTimeout(() => {
                                                    obs11.classList.remove('cloud1');
                                                    obs11.style.display = 'none';
                                                    obs11.style.left = 7000 + 'px';
                                                    setTimeout(() => {
                                                      obs11.style.display = 'inline-block';
                                                      obs11.classList.add('cloud2');
                                                      setTimeout(() => {
                                                        obs11.classList.remove('cloud2');
                                                        obs11.style.display = 'none';
                                                        obs11.style.left = 7000 + 'px';
                                                      }, 3000);
                                                    }, 1000);
                                                  }, 3000);
                                                }, 1000);

                                              }, 300);

                                            }, 300);
                                          }, 300);

                                        }

                                      }, 12000);
                                    }

                                  }, 5005);
                                }

                              }, 4000);
                            }

                          }, 5000);
                        }
                      }, 5500);
                    }
                  }, 3000);
                }
              }, 5000);
            }
          }, 2950);
        }
      }, 8000);
    }
  }






    setInterval(() => {
      score = document.querySelector('#score');
      mainObj = document.querySelector('.mainObj');
      obs1 = document.querySelector('.obs1');
      obs11 = document.querySelector('.obs11');
      obs10 = document.querySelector('.obs10');
      obs2 = document.querySelector('.obs2');


      dx = parseInt(window.getComputedStyle(mainObj, null).getPropertyValue('left')) + 55;
      dy = parseInt(window.getComputedStyle(mainObj, null).getPropertyValue('top')) + 60;


      ox1 = parseInt(window.getComputedStyle(obs1, null).getPropertyValue('left'));
      oy1 = parseInt(window.getComputedStyle(obs1, null).getPropertyValue('top'));


      ox11 = parseInt(window.getComputedStyle(obs11, null).getPropertyValue('left')) + 65;
      oy11 = parseInt(window.getComputedStyle(obs11, null).getPropertyValue('top')) + 85;
      ox12 = parseInt(window.getComputedStyle(obs11, null).getPropertyValue('left')) + 65;
      oy12 = parseInt(window.getComputedStyle(obs11, null).getPropertyValue('top')) + 85;
      ox13 = parseInt(window.getComputedStyle(obs11, null).getPropertyValue('left')) + 65;
      oy13 = parseInt(window.getComputedStyle(obs11, null).getPropertyValue('top')) + 85;

      ox10 = parseInt(window.getComputedStyle(obs10, null).getPropertyValue('left') + 6);
      oy10 = parseInt(window.getComputedStyle(obs10, null).getPropertyValue('top') + 17);


      ox2 = parseInt(window.getComputedStyle(obs2, null).getPropertyValue('left')) + 10;
      oy2 = parseInt(window.getComputedStyle(obs2, null).getPropertyValue('top')) + 15;



      // console.log(ox1);      
      // console.log("dy" + dy);    
      // console.log(oy1);    

      offsetX1 = Math.abs(dx - ox1);
      offsetY1 = Math.abs(dy - oy1);

      offsetX11 = Math.abs(dx - ox11);
      offsetY11 = Math.abs(dy - oy11);
      offsetX12 = Math.abs(dx - ox12);
      offsetY12 = Math.abs(dy - oy12);
      offsetX13 = Math.abs(dx - ox13);
      offsetY13 = Math.abs(dy - oy13);

      offsetX10 = ox10 - dx;
      offsetY10 = oy10 - dy;


      offsetX2 = Math.abs(dx - ox2);
      offsetY2 = Math.abs(dy - oy2);

      // console.log(dx);   
      // console.log(offsetX2);
      // console.log(offsetY2);

      if (offsetX1 < 65 && offsetY1 < 50) {       //for fireball
        score.innerHTML = " fireball Game-Over";
        cross = false;
        gameOver(sco);
      } else if (cross && dx - ox1 < 350) {
        sco += 10;
        updateScore(sco);
        cross = false;
        setTimeout(() => {
          cross = true;
        }, 5000);
      }


      if (offsetX11 < 82 && offsetY11 < 110) {      //for clouds
        score.innerHTML = " clouds Game-Over";
        console.log("clouds game over");
        cross = false;
        gameOver(sco);
      } else if (cross && dx - ox11 < 350) {
        sco += 10;
        updateScore(sco);
        cross = false;
        setTimeout(() => {
          cross = true;
        }, 10000);
      }

      if (offsetX12 < 82 && offsetY12 < 110) {
        score.innerHTML = "clouds Game-Over";
        console.log("clouds game over");
        cross = false;
        gameOver(sco);
      } else if (cross && dx - ox12 < 350) {
        sco += 10;
        updateScore(sco);
        cross = false;
        setTimeout(() => {
          cross = true;
        }, 10000);
      }

      if (offsetX13 < 82 && offsetY13 < 110) {
        score.innerHTML = "clouds Game-Over";
        console.log("clouds game over");
        cross = false;
        gameOver(sco);
      } else if (cross && dx - ox13 < 350) {
        sco += 10;
        updateScore(sco);
        cross = false;
        setTimeout(() => {
          cross = true;
        }, 10000);
      }


      if (offsetX10 < 50 && offsetY10 < 30 && offsetY10 > 0 && offsetX10 > 20) {
        score.innerHTML = "bird Game-Over";
        cross = false;
        gameOver(sco);
      } else if (cross && dx - ox10 < 300) {
        sco += 10;
        updateScore(sco);
        cross = false;
        setTimeout(() => {
          cross = true;
        }, 1950);
      }

      if (offsetX2 < 55 && offsetY2 < 45) {
        score.innerHTML = " pig Game-Over";
        cross = false;
        gameOver(sco);
      } else if (cross && dx - ox2 < 300) {
        sco += 10;
        updateScore(sco);
        cross = false;
        setTimeout(() => {
          cross = true;
        }, 7000);
      }




    }, 10);






    function updateScore(sco) {
      score.innerHTML = "Score :" + sco;

    }

    function gameOver(sco) {
      const vid = document.getElementById('vid');
      vid.src = 'bg3.mp4';
      score.style.display = 'none';
      mainObj.style.display = 'none';
      mainObj.style.left = 12000 + 'px';
      gameNotOver = false;

      innermyScore = document.querySelector('.innermyScore');
      innermyScore.innerHTML = "Score : " + sco;

      innerHigh = document.querySelector('.innerHigh');
      if (highestScore < sco) {
        highestScore = sco;
        innerHigh.innerHTML = "New Highest Score : " + sco;
      } else {
        innerHigh.innerHTML = "Highest Score : " + sco;
      }
      setTimeout(() => {
        myScore = document.querySelector('.myScore');
        high = document.querySelector('.high');
        myScore.style.display = 'inline-block';
        high.style.display = 'inline-block';
      }, 1100);




      obs1.classList.remove('fireball');
      obs1.style.display = 'none';
      obs1.style.left = 7000 + 'px';

      obs2.classList.remove('piganimation');
      obs2.style.display = 'none';
      obs2.style.left = 7000 + 'px';

      obs10.classList.remove('birdanimation');
      obs10.style.display = 'none';
      obs10.style.left = 7000 + 'px';

      obs11.classList.remove('cloud1');
      obs11.style.display = 'none';
      obs11.style.left = 7000 + 'px';

      obs11.classList.remove('cloud2');
      obs11.style.display = 'none';
      obs11.style.left = 7000 + 'px'; 

      obs12.style.display = 'none';
      obs12.style.left = 7000 + 'px';

      obs13.style.display = 'none';
      obs13.style.left = 7000 + 'px';


      document.removeEventListener("keydown", restart);

      // Add a new event listener for "Enter" key to trigger the restart() function
      document.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !gameNotOver) {
          // vid.src = 'bg2.mp4';
          console.log("Fuv");
          gameNotOver = true; // Set gameNotOver to true when restarting
          sco = 0; // Reset score to 0
          // Update the score display to show 0
          myScore.style.display = 'none';
          high.style.display = 'none';
          restart(); // Call restart function to start the game again
        }
      });


    }

  }





// document.onkeydown = function (e) {
//   if (e.key == "Enter" && !(gameNotOver)) {
//     gameNotOver = true; // Set gameNotOver to true when restarting
//     sco = 0; // Reset score to 0
//     updateScore(sco); // Update the score display to show 0
//     restart(); // Call restart function to start the game again
//   }
// };


