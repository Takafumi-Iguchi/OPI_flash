set = new Array();

flag = 0;
blank = 100;

cd_text = new Array("①","②","③");
// 画像倉庫
imglist = [
            // imglist0 AKB48
            ["img/akb48/a_maeda.jpg",
             "img/akb48/itano3.jpg",
             "img/akb48/yukirin.jpeg",
             "img/akb48/mayuyu.jpg",
             "img/akb48/mayuyu2.jpg",
             "img/akb48/yo.jpg",
             "img/akb48/kojiharu.jpg",
             "img/akb48/yukirin2.jpg",
             "img/akb48/shinoda.jpeg",
             "img/akb48/ere.jpg",
             "img/akb48/mariko.jpg"
             ],
             // imglist1 NMB４８
            ["img/nmb48/yama1.gif",
             "img/nmb48/yama2.jpg",
             "img/nmb48/nana1.jpeg",
             "img/nmb48/nana2.png",
             "img/nmb48/rei1.png",
             "img/nmb48/rei2.jpg",
             "img/nmb48/rei3.jpg",
             "img/nmb48/rei4.jpg",
             "img/nmb48/yama3.jpg",
             "img/nmb48/siro.jpg",
             "img/nmb48/siro2.jpg"
             ],
             // imglist2 乃木坂
            ["img/nogizaka/op.jpg",
             "img/nogizaka/erika1.jpg",
             "img/nogizaka/erika2.jpg",
             "img/nogizaka/erika3.jpg",
             "img/nogizaka/israishi1.jpg",
             "img/nogizaka/erika4.jpg",
             "img/nogizaka/kaidou1.jpeg",
             "img/nogizaka/kaidou2.jpeg",
             "img/nogizaka/mituki1.jpg",
             "img/nogizaka/mituki2.jpg"
             ],
             // imglist3 稀勢の里
            ["img/kise/kise1.jpg",
             "img/kise/kise2.jpg",
             "img/kise/kise3.jpg",
             "img/kise/kise4.jpeg",
             "img/kise/kise5.jpg",
             "img/kise/kise6.jpg",
             "img/kise/kise7.jpg",
             "img/kise/kise8.jpg",
             "img/kise/kise9.jpeg",
             "img/kise/kise10.jpg"
             ],
             // imglist4 恵比寿マスカット
            ["img/ebisu/kawakami.jpg",
             "img/ebisu/aoi2.jpg",
             "img/ebisu/kirara.jpg",
             "img/ebisu/masiro1.jpg",
             "img/ebisu/mikami1.jpg",
             "img/ebisu/minato.jpg",
             "img/ebisu/rio1.jpg",
             "img/ebisu/rio2.jpg",
             "img/ebisu/siraishi.jpg",
             "img/ebisu/toda1.jpg",
             "img/ebisu/yosi1.jpg",
             "img/ebisu/yuma1.jpg",
             "img/ebisu/yuuri1.jpg"
             ]
           ]
kotae_img = ["img/kotae/kise_k1.jpg","img/kotae/yasusi.jpeg","img/kotae/ebisu_k.jpg",]

// 1. Displayの切り替え関数
const DPSwitch = ()=> {
      const Stop   = document.getElementById("top");
      const Sflash = document.getElementById("flash");
      Stop.style.display = "none";
      Sflash.style.display = "block";
}

// 2. levelのランダム出力関数
const LVRandom = ()=> {
      const imglists = ["imglist0","imglist1","imglist2","imglist3","imglist4" ];
      var r = Math.random();
      Num = Math.floor(r * imglists.length);
      var selectnum = Math.floor(r * imglist.length);
      console.log(imglist[Num]);
      console.log("Num = " + Num);
}

// 3. Click LevelsID 関数  & Level別の速度変化
document.getElementById("begin").onclick  = ()=> { DPSwitch(); LVRandom(); document.flash.set3.value = 1; };
document.getElementById("normal").onclick = ()=> { DPSwitch(); LVRandom(); document.flash.set3.value = .5;};
document.getElementById("pro").onclick    = ()=> { DPSwitch(); LVRandom(); document.flash.set3.value = .15;};

// 3.所得したimglilst番号を下記のランダム関数に当てはめる。

// タイマー起動
function f_start() {
  if (flag == 0) {
       set[1] = document.flash.set2.value;
       set[2] = document.flash.set3.value;
       // タイマー起動
       document.flash.b_start.disabled = true;
       // kotae = 0;
       // タイマー処理
       count = 3;
       f_countdown();
  } else {
       f_kotae();
  }
}

// カウントダウン
function f_countdown() {
  count--;
  document.flash.number.value = cd_text[count];
  if (count == 0) {
      timerID = setTimeout("f_blank()", 1000);
  } else {
      timerID = setTimeout("f_countdown()", 1000);
  }
}

// 計算カウント
function f_count() {
  count++;
      // 重複チェック用配列
      var randoms = [];
      var r = Math.random();
      // ====  重複しいない乱数を作る  ====

      var selectnum = Math.floor(r * imglist[Num].length);
      console.log(imglist[Num][selectnum]);
      // if(!randoms.includes(imglist[Num][selectnum])) {
      //         randoms.push(imglist[Num][selectnum]);
      //     }
      // const arr1 = imglist[Num].reduce((a, v) => {
      //   if (!a.includes(v)) {
      //      a.push(v);
      //   }
      //   return a;
      // }, []);
          // ==== 画像の表示 ====
          var output   = "<img src=" + imglist[Num][selectnum] + ">";
          document.getElementById("image").innerHTML = output;

          timerID = setTimeout("f_blank()",set[2]*1000);
}

// ブランク
function f_blank() {
  document.flash.number.value = "";
  document.getElementById("image").innerHTML = "";
  if(set[1] ==  count) {
       f_clear();
  } else {
   timerID = setTimeout("f_count()", blank);
  }
}

// タイマー停止
function f_clear() {
    // タイマー停止
    clearInterval(timerID);
    document.flash.number.value = "";
    document.flash.b_start.disabled = false;
    document.flash.b_start.value = "なんのお〜っぱい？";
    flag = 1;
}


// 答えの表示
function f_kotae() {
  document.flash.b_start.onclick = ()=> {
        if (Num == 0) {
           yasusi = '<img src=' + ' "img/kotae/yasusi.jpeg" '+ '>';
           document.getElementById("image").innerHTML = yasusi;
        } else if (Num == 1) {
           nmb = '<img src=' + ' "img/kotae/nmb_k.jpg" '+ '>';
           document.getElementById("image").innerHTML = nmb;
        } else if (Num == 2) {
           nogi = '<img src=' + ' "img/kotae/nogi.jpg" '+ '>';
           document.getElementById("image").innerHTML = nogi;
        } else if (Num == 3) {
           kise = '<img src=' + ' "img/kotae/kise_k1.jpg" '+ '>';
           document.getElementById("image").innerHTML = kise;
        } else if (Num == 4){
           ebisu = '<img src=' + ' "img/kotae/ebisu_k.jpg" '+ '>';
           document.getElementById("image").innerHTML = ebisu;
        }
  }
    // 初期化
          // document.flash.b_start.value = "スタート";
          // flag = 0;
          // document.getElementById("image").innerHTML = "";
}

  // function imgShufle() {
  //   var selectnum = Math.floor(r *imgllist.length);
  //   var output   = "<img src="imglist[selectnum] + ">";
  //   document.write(output); 
  // }














