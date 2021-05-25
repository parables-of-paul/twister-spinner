window.onload = function(){
//This version was saved local at 10:36 24-02-2021

var p1Tag = document.getElementById('player1Tag');
var p2Tag = document.getElementById('player2Tag');
var p3Tag = document.getElementById('player3Tag');
var p4Tag = document.getElementById('player4Tag');




var dismissBtn = document.getElementById('dismiss');
dismissBtn.onclick = function() {
    var lightBox = document.getElementById('lightBox');
    lightBox.style.display = 'none';
};



//Start by auto-checking Player 1
    var p1check = document.getElementById('p1select');
    p1check.checked = true;

    //declare limb and selecters

    var limb = 'limb';
    var p1selecter = 'p1';
    var p2selecter = 'p2';
    var p3selecter = 'p3';
    var p4selecter = 'p4';



    //Heavy used functions


    //changes player selection at the end of player 1's go
    function player1Reselect(){
        setTimeout(() => {
            var p1check = document.getElementById('p1select');
        p1check.checked = false;
        var p2check = document.getElementById('p2select');
        p2check.checked = true;
        var p3check = document.getElementById('p3select');
        p3check.checked = false;
        var p4check = document.getElementById('p4select');
        p4check.checked = false;}, 1500);
    };

    //changes player selection at the end of player 2's go
    function player2Reselect(){
        setTimeout(() => {
            var p1check = document.getElementById('p1select');
        p1check.checked = false;
        var p2check = document.getElementById('p2select');
        p2check.checked = false;
        var p3check = document.getElementById('p3select');
        if(p3Tag.innerHTML !== ""){
        p3check.checked = true;
        } else {
        p1check.checked = true;
        }
    }, 1500);
    };


    //changes player selection at the end of player 3's go
    function player3Reselect(){
        setTimeout(() => {
            var p1check = document.getElementById('p1select');
        p1check.checked = false;
        var p2check = document.getElementById('p2select');
        p2check.checked = false;
        var p3check = document.getElementById('p3select');
        p3check.checked = false;
        var p4check = document.getElementById('p4select');
        if(p4Tag.innerHTML !== ""){
        p4check.checked = true;
        } else {
        p1check.checked = true;
        }
    }, 1500);
    };
    //changes player selection at the end of player 3's go

    function player4Reselect(){
        setTimeout(() => {
            var p1check = document.getElementById('p1select');
        p1check.checked = false;
        var p2check = document.getElementById('p2select');
        p2check.checked = false;
        var p3check = document.getElementById('p3select');
        p3check.checked = false;
        var p4check = document.getElementById('p4select');
        p4check.checked = false;
        p1check.checked = true;
        
    }, 1500);
    };


    //removes any spin result rotator classes
    function removeRotators(){
        document.getElementById("twisterArrow").classList.remove('rotate1');
        document.getElementById("twisterArrow").classList.remove('rotate2');
        document.getElementById("twisterArrow").classList.remove('rotate3');
        document.getElementById("twisterArrow").classList.remove('rotate4');
        document.getElementById("twisterArrow").classList.remove('rotate5');
        document.getElementById("twisterArrow").classList.remove('rotate6');
        document.getElementById("twisterArrow").classList.remove('rotate7');
        document.getElementById("twisterArrow").classList.remove('rotate8');
        document.getElementById("twisterArrow").classList.remove('rotate9');
        document.getElementById("twisterArrow").classList.remove('rotate10');
        document.getElementById("twisterArrow").classList.remove('rotate11');
        document.getElementById("twisterArrow").classList.remove('rotate12');
        document.getElementById("twisterArrow").classList.remove('rotate13');
        document.getElementById("twisterArrow").classList.remove('rotate14');
        document.getElementById("twisterArrow").classList.remove('rotate15');
        document.getElementById("twisterArrow").classList.remove('rotate16');
    };


    //removes cell animation classes
    function cellSelectionRemoval(){
        document.getElementById("p1RH").classList.remove('cellSelection');
        document.getElementById("p2RH").classList.remove('cellSelection');
        document.getElementById("p3RH").classList.remove('cellSelection');
        document.getElementById("p4RH").classList.remove('cellSelection');

        document.getElementById("p1LH").classList.remove('cellSelection');
        document.getElementById("p2LH").classList.remove('cellSelection');
        document.getElementById("p3LH").classList.remove('cellSelection');
        document.getElementById("p4LH").classList.remove('cellSelection');

        document.getElementById("p1RF").classList.remove('cellSelection');
        document.getElementById("p2RF").classList.remove('cellSelection');
        document.getElementById("p3RF").classList.remove('cellSelection');
        document.getElementById("p4RF").classList.remove('cellSelection');

        document.getElementById("p1LF").classList.remove('cellSelection');
        document.getElementById("p2LF").classList.remove('cellSelection');
        document.getElementById("p3LF").classList.remove('cellSelection');
        document.getElementById("p4LF").classList.remove('cellSelection');
    };

    

    //Player Name Session Storage
var submitter = document.getElementById('submitter');
var p1Tag = document.getElementById('player1Tag');
var p2Tag = document.getElementById('player2Tag');
var p3Tag = document.getElementById('player3Tag');
var p4Tag = document.getElementById('player4Tag');

p1Tag.innerHTML = sessionStorage.getItem('player1Name');
p2Tag.innerHTML = sessionStorage.getItem('player2Name');
p3Tag.innerHTML = sessionStorage.getItem('player3Name');
p4Tag.innerHTML = sessionStorage.getItem('player4Name');

if(p1Tag.innerHTML === ""){
    document.getElementById('p1Row').style.display = "none";
} else {};

if(p2Tag.innerHTML === ""){
    document.getElementById('p2Row').style.display = "none";
} else {};

if(p3Tag.innerHTML === ""){
    document.getElementById('p3Row').style.display = "none";
} else {};

if(p4Tag.innerHTML === ""){
    document.getElementById('p4Row').style.display = "none";
} else {};

if(p1Tag.innerHTML !== ""){
    var lightBox = document.getElementById('lightBox');
    lightBox.style.display = 'none';
    console.log('dismisser firing')
};

if(p2Tag.innerHTML !== ""){
    var lightBox = document.getElementById('lightBox');
    lightBox.style.display = 'none';
    console.log('dismisser firing')
};

if(p3Tag.innerHTML !== ""){
    var lightBox = document.getElementById('lightBox');
    lightBox.style.display = 'none';
    console.log('dismisser firing')
};

if(p4Tag.innerHTML !== ""){
    var lightBox = document.getElementById('lightBox');
    lightBox.style.display = 'none';
    console.log('dismisser firing')
};

//action session restore
    var p1RH = document.getElementById('p1RH');
    p1RH.innerHTML = sessionStorage.getItem('p1rhAction');
    p1RH.style.backgroundColor = sessionStorage.getItem('p1rhAction');
    if(p1RH.innerHTML !== "" && p1RH.innerHTML !== "yellow"){
        document.getElementById('p1RH').style.color = 'white';
    }
    var p1LH = document.getElementById('p1LH');
    p1LH.innerHTML = sessionStorage.getItem('p1lhAction')
    p1LH.style.backgroundColor = sessionStorage.getItem('p1lhAction');
    if(p1LH.innerHTML  !== "" && p1LH.innerHTML  !== "yellow"){
        document.getElementById('p1LH').style.color = 'white';
    }
    var p1RF = document.getElementById('p1RF');
    p1RF.innerHTML = sessionStorage.getItem('p1rfAction');
    p1RF.style.backgroundColor = sessionStorage.getItem('p1rfAction');
    if(p1RF.innerHTML  !== "" && p1RF.innerHTML  !== "yellow"){
        document.getElementById('p1RF').style.color = 'white';
    }
    var p1LF = document.getElementById('p1LF');
    p1LF.innerHTML = sessionStorage.getItem('p1lfAction');
    p1LF.style.backgroundColor = sessionStorage.getItem('p1lfAction');
    if(p1LF.innerHTML  !== "" && p1LF.innerHTML  !== "yellow"){
        document.getElementById('p1LF').style.color = 'white';
    }

    var p2RH = document.getElementById('p2RH');
    p2RH.innerHTML = sessionStorage.getItem('p2rhAction');
    p2RH.style.backgroundColor = sessionStorage.getItem('p2rhAction');
    if(p2RH.innerHTML !== "" && p2RH.innerHTML !== "yellow"){
        document.getElementById('p2RH').style.color = 'white';
    }
    var p2LH = document.getElementById('p2LH');
    p2LH.innerHTML = sessionStorage.getItem('p2lhAction');
    p2LH.style.backgroundColor = sessionStorage.getItem('p2lhAction');
    if(p2LH.innerHTML  !== "" && p2LH.innerHTML  !== "yellow"){
        document.getElementById('p2LH').style.color = 'white';
    }
    var p2RF = document.getElementById('p2RF');
    p2RF.innerHTML = sessionStorage.getItem('p2rfAction');
    p2RF.style.backgroundColor = sessionStorage.getItem('p2rfAction');
    if(p2RF.innerHTML  !== "" && p2RF.innerHTML  !== "yellow"){
        document.getElementById('p2RF').style.color = 'white';
    }
    var p2LF = document.getElementById('p2LF');
    p2LF.innerHTML = sessionStorage.getItem('p2lfAction');
    p2LF.style.backgroundColor = sessionStorage.getItem('p2lfAction');
    if(p2LF.innerHTML  !== "" && p2LF.innerHTML  !== "yellow"){
        document.getElementById('p2LF').style.color = 'white';
    }
    var p3RH = document.getElementById('p3RH');
    p3RH.innerHTML = sessionStorage.getItem('p3rhAction');
    p3RH.style.backgroundColor = sessionStorage.getItem('p3rhAction');
    if(p3RH.innerHTML !== "" && p3RH.innerHTML !== "yellow"){
        document.getElementById('p3RH').style.color = 'white';
    }
    var p3LH = document.getElementById('p3LH');
    p3LH.innerHTML = sessionStorage.getItem('p3lhAction');
    p3LH.style.backgroundColor = sessionStorage.getItem('p3lhAction');
    if(p3LH.innerHTML  !== "" && p3LH.innerHTML  !== "yellow"){
        document.getElementById('p3LH').style.color = 'white';
    }
    var p3RF = document.getElementById('p3RF');
    p3RF.innerHTML = sessionStorage.getItem('p3rfAction');
    p3RF.style.backgroundColor = sessionStorage.getItem('p3rfAction');
    if(p3RF.innerHTML  !== "" && p3RF.innerHTML  !== "yellow"){
        document.getElementById('p3RF').style.color = 'white';
    }
    var p3LF = document.getElementById('p3LF');
    p3LF.innerHTML = sessionStorage.getItem('p3lfAction');
    p3LF.style.backgroundColor = sessionStorage.getItem('p3lfAction');
    if(p3LF.innerHTML  !== "" && p3LF.innerHTML  !== "yellow"){
        document.getElementById('p3LF').style.color = 'white';
    }

    var p4RH = document.getElementById('p4RH');
    p4RH.innerHTML = sessionStorage.getItem('p4rhAction');
    p4RH.style.backgroundColor = sessionStorage.getItem('p4rhAction');
    if(p4RH.innerHTML !== "" && p4RH.innerHTML !== "yellow"){
        document.getElementById('p4RH').style.color = 'white';
    }
    var p4LH = document.getElementById('p4LH');
    p4LH.innerHTML = sessionStorage.getItem('p4lhAction');
    p4LH.style.backgroundColor = sessionStorage.getItem('p4lhAction');
    if(p4LH.innerHTML  !== "" && p4LH.innerHTML  !== "yellow"){
        document.getElementById('p4LH').style.color = 'white';
    }
    var p4RF = document.getElementById('p4RF');
    p4RF.innerHTML = sessionStorage.getItem('p4rfAction');
    p4RF.style.backgroundColor = sessionStorage.getItem('p4rfAction');
    if(p4RF.innerHTML  !== "" && p4RF.innerHTML  !== "yellow"){
        document.getElementById('p4RF').style.color = 'white';
    }
    var p4LF = document.getElementById('p4LF');
    p4LF.innerHTML = sessionStorage.getItem('p4lfAction');
    p4LF.style.backgroundColor = sessionStorage.getItem('p4lfAction');
    if(p4LF.innerHTML  !== "" && p4LF.innerHTML  !== "yellow"){
        document.getElementById('p4LF').style.color = 'white';
    }
    



    

    


//input interface
submitter.onclick = function(){
    if(p1Tag.innerHTML === ""){
    var player1Name = document.getElementById('p1name');
    p1Tag.innerHTML = player1Name.value;
    sessionStorage.setItem('player1Name', `${player1Name.value}`)
    } else if(document.getElementById('p1name').value !== "") { var p1overwrite = confirm("do you want to overwrite Player 1 Name")
    if(p1overwrite === true){
        var player1Name = document.getElementById('p1name');
        p1Tag.innerHTML = player1Name.value;
        sessionStorage.setItem('player1Name', `${player1Name.value}`)
    };
};
if(p2Tag.innerHTML === ""){
    var player2Name = document.getElementById('p2name');
    p2Tag.innerHTML = player2Name.value;
    sessionStorage.setItem('player2Name', `${player2Name.value}`)
    } else if(document.getElementById('p2name').value !== "")  { var p2overwrite = confirm("do you want to overwrite Player 2 Name")
    if(p2overwrite === true){
        var player2Name = document.getElementById('p2name');
        p2Tag.innerHTML = player2Name.value;
        sessionStorage.setItem('player2Name', `${player2Name.value}`)
    };
};
if(p3Tag.innerHTML === ""){
    var player3Name = document.getElementById('p3name');
    p3Tag.innerHTML = player3Name.value;
    sessionStorage.setItem('player3Name', `${player3Name.value}`)
    } else if(document.getElementById('p3name').value !== "")  { var p3overwrite = confirm("do you want to overwrite Player 3 Name")
    if(p3overwrite === true){
        var player3Name = document.getElementById('p3name');
        p3Tag.innerHTML = player3Name.value;
        sessionStorage.setItem('player3Name', `${player3Name.value}`)
    };
};
if(p4Tag.innerHTML === ""){
    var player4Name = document.getElementById('p4name');
    p4Tag.innerHTML = player4Name.value;
    sessionStorage.setItem('player4Name', `${player4Name.value}`)
    } else if(document.getElementById('p4name').value !== "")  { var p4overwrite = confirm("do you want to overwrite Player 4 Name")
    if(p4overwrite === true){
        var player4Name = document.getElementById('p4name');
        p4Tag.innerHTML = player4Name.value;
        sessionStorage.setItem('player4Name', `${player4Name.value}`)
    };
};
location.reload();
};

//degree counter variables

var segmentSpinDeg1 = [752.5, 'right hand', 'yellow'];
var segmentSpinDeg2 = [775, 'right hand', 'blue'];
var segmentSpinDeg3 = [797.5,'right hand', 'green'];
var segmentSpinDeg4 = [820, 'left hand', 'red'];
var segmentSpinDeg5 = [842.5, 'left hand', 'yellow'];
var segmentSpinDeg6 = [865, 'left hand', 'blue'];
var segmentSpinDeg7 = [887.5, 'left hand', 'green'];
var segmentSpinDeg8 = [910, 'right foot', 'red'];
var segmentSpinDeg9 = [932.5, 'right foot', 'yellow'];
var segmentSpinDeg10 = [955, 'right foot', 'blue'];
var segmentSpinDeg11 = [977.5, 'right foot', 'green'];
var segmentSpinDeg12 = [1000, 'left foot', 'red'];
var segmentSpinDeg13 = [1022.5, 'left foot', 'yellow'];
var segmentSpinDeg14 = [1045, 'left foot', 'blue'];
var segmentSpinDeg15 = [1067.5, 'left foot', 'green'];
var segmentSpinDeg16 = [1090, 'right hand', 'red'];

//spin mechanic

var twisterArrow = document.getElementById("twisterArrow");
var twisterDiv = document.getElementById("twisterDiv");
twisterDiv.onclick = function spinIt(){
    removeRotators();
    cellSelectionRemoval();
    var int = Math.floor(Math.random() *16 +1);
    console.log(int);
    
    
    
    // if spinner is 1


if(int === 1) {
    document.getElementById("twisterArrow").classList.add('rotate1');
    var limb = segmentSpinDeg1[1];
    var color = segmentSpinDeg1[2]
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;

    

    if(p1selecter === true){
        if(limb === 'right hand'){
            var p1rhy = document.getElementById('p1rhy');
            p1rhy.play();
    document.getElementById('p1RH').innerHTML = color;
    var p1RH = document.getElementById('p1RH').innerHTML;
    sessionStorage.setItem('p1rhAction', `${p1RH}`);
    if(p1RH !== "" && p1RH !== "yellow"){
       document.getElementById('p1RH').style.backgroundColor = color;
        document.getElementById('p1RH').style.color = 'white';
        document.getElementById('p1RH').classList.add('cellSelection');
    } else if(p1RH !== "" && p1RH === "yellow"){
        document.getElementById('p1RH').style.backgroundColor = color;
        document.getElementById('p1RH').style.color = 'black';
        document.getElementById('p1RH').classList.add('cellSelection');
    };
};

    player1Reselect();

    
} else if (p2selecter === true){
    if(limb === 'right hand'){
            var p2rhy = document.getElementById('p2rhy');
            p2rhy.play();
        document.getElementById('p2RH').innerHTML = color;
        var p2RH = document.getElementById('p2RH').innerHTML;
        sessionStorage.setItem('p2rhAction', `${p2RH}`);
        if(p2RH !== "" && p2RH !== "yellow"){
            document.getElementById('p2RH').style.backgroundColor = color;
            document.getElementById('p2RH').style.color = 'white';
            document.getElementById('p2RH').classList.add('cellSelection');    
        } else if(p2RH !== "" && p2RH === "yellow"){
            document.getElementById('p2RH').style.backgroundColor = color;
            document.getElementById('p2RH').style.color = 'black';
            document.getElementById('p2RH').classList.add('cellSelection');    
        };
        };

        
        player2Reselect();

} else if (p3selecter === true){
    if(limb === 'right hand'){
        var p3rhy = document.getElementById('p3rhy');
            p3rhy.play();
        document.getElementById('p3RH').innerHTML = color;
        var p3RH = document.getElementById('p3RH').innerHTML;
        sessionStorage.setItem('p3rhAction', `${p3RH}`);
        if(p3RH !== "" && p3RH !== "yellow"){
            document.getElementById('p3RH').style.backgroundColor = color;
            document.getElementById('p3RH').style.color = 'white';
            document.getElementById('p3RH').classList.add('cellSelection');    
        } else if(p3RH !== "" && p3RH === "yellow"){
            document.getElementById('p3RH').style.backgroundColor = color;
            document.getElementById('p3RH').style.color = 'black';
            document.getElementById('p3RH').classList.add('cellSelection'); 
        }
        };

        player3Reselect();
        
} else if(p4selecter === true){
    if(limb === 'right hand'){
        var p4rhy = document.getElementById('p4rhy');
            p4rhy.play();
        document.getElementById('p4RH').innerHTML = color;
        var p4RH = document.getElementById('p4RH').innerHTML;
        sessionStorage.setItem('p4rhAction', `${p4RH}`);
        if(p4RH !== "" && p4RH !== "yellow"){
            document.getElementById('p4RH').style.backgroundColor = color;
            document.getElementById('p4RH').style.color = 'white';
            document.getElementById('p4RH').classList.add('cellSelection');    
        } else if(p4RH !== "" && p4RH === "yellow"){
            document.getElementById('p4RH').style.backgroundColor = color;
            document.getElementById('p4RH').style.color = 'black';
            document.getElementById('p4RH').classList.add('cellSelection'); 
        }
    }
    player4Reselect();

    };
    
    

    
// if spiner is 2
} else if(int === 2) {
    document.getElementById("twisterArrow").classList.add('rotate2');
    var limb = segmentSpinDeg2[1];
    var color = segmentSpinDeg2[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'right hand'){
            var p1rhb = document.getElementById('p1rhb');
            p1rhb.play();
    document.getElementById('p1RH').innerHTML = color;
    var p1RH = document.getElementById('p1RH').innerHTML;
    sessionStorage.setItem('p1rhAction', `${p1RH}`);
    if(p1RH !== "" && p1RH !== "yellow"){
       document.getElementById('p1RH').style.backgroundColor = color;
        document.getElementById('p1RH').style.color = 'white';
        document.getElementById('p1RH').classList.add('cellSelection');
    } else if(p1RH !== "" && p1RH === "yellow"){
        document.getElementById('p1RH').style.backgroundColor = color;
        document.getElementById('p1RH').style.color = 'black';
        document.getElementById('p1RH').classList.add('cellSelection');    
    };
};
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'right hand'){
        var p2rhb = document.getElementById('p2rhb');
            p2rhb.play();
        document.getElementById('p2RH').innerHTML = color;
        var p2RH = document.getElementById('p2RH').innerHTML;
        sessionStorage.setItem('p2rhAction', `${p2RH}`);
        if(p2RH !== "" && p2RH !== "yellow"){
            document.getElementById('p2RH').style.backgroundColor = color;
            document.getElementById('p2RH').style.color = 'white';
            document.getElementById('p2RH').classList.add('cellSelection');    
        } else if(p2RH !== "" && p2RH === "yellow"){
            document.getElementById('p2RH').style.backgroundColor = color;
            document.getElementById('p2RH').style.color = 'black';
            document.getElementById('p2RH').classList.add('cellSelection');        
        };
    };
        player2Reselect();

        
} else if (p3selecter === true){
    if(limb === 'right hand'){
        var p3rhb = document.getElementById('p3rhb');
            p3rhb.play();
        document.getElementById('p3RH').innerHTML = color;
        var p3RH = document.getElementById('p3RH').innerHTML;
        sessionStorage.setItem('p3rhAction', `${p3RH}`);
        if(p3RH !== "" && p3RH !== "yellow"){
            document.getElementById('p3RH').style.backgroundColor = color;
            document.getElementById('p3RH').style.color = 'white';
            document.getElementById('p3RH').classList.add('cellSelection');        
        } else if(p3RH !== "" && p3RH === "yellow"){
            document.getElementById('p3RH').style.backgroundColor = color;
            document.getElementById('p3RH').style.color = 'black';
            document.getElementById('p3RH').classList.add('cellSelection');         
        }

        };
        player3Reselect();

} else if(p4selecter === true){
    if(limb === 'right hand'){
        var p4rhb = document.getElementById('p4rhb');
            p4rhb.play();
        document.getElementById('p4RH').innerHTML = color;
        var p4RH = document.getElementById('p4RH').innerHTML;
        sessionStorage.setItem('p4rhAction', `${p4RH}`);
        if(p4RH !== "" && p4RH !== "yellow"){
            document.getElementById('p4RH').style.backgroundColor = color;
            document.getElementById('p4RH').style.color = 'white';
            document.getElementById('p4RH').classList.add('cellSelection');            
        } else if(p4RH !== "" && p4RH === "yellow"){
            document.getElementById('p4RH').style.backgroundColor = color;
            document.getElementById('p4RH').style.color = 'black'; 
            document.getElementById('p4RH').classList.add('cellSelection');            
        }

        } 
        player4Reselect();
    }; 
            //if spin is 3
} else if(int === 3) {
    document.getElementById("twisterArrow").classList.add('rotate3');
    var limb = segmentSpinDeg3[1];
    var color = segmentSpinDeg3[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'right hand'){
            var p1rhg = document.getElementById('p1rhg');
            p1rhg.play();
    document.getElementById('p1RH').innerHTML = color;
    var p1RH = document.getElementById('p1RH').innerHTML;
    sessionStorage.setItem('p1rhAction', `${p1RH}`);
    if(p1RH !== "" && p1RH !== "yellow"){
       document.getElementById('p1RH').style.backgroundColor = color;
        document.getElementById('p1RH').style.color = 'white';
        document.getElementById('p1RH').classList.add('cellSelection');            
    } else if(p1RH !== "" && p1RH === "yellow"){
        document.getElementById('p1RH').style.backgroundColor = color;
        document.getElementById('p1RH').style.color = 'black';    
        document.getElementById('p1RH').classList.add('cellSelection');            
    };
    };
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'right hand'){
        var p2rhg = document.getElementById('p2rhg');
            p2rhg.play();
        document.getElementById('p2RH').innerHTML = color;
        var p2RH = document.getElementById('p2RH').innerHTML;
        sessionStorage.setItem('p2rhAction', `${p2RH}`);
        if(p2RH !== "" && p2RH !== "yellow"){
            document.getElementById('p2RH').style.backgroundColor = color;
            document.getElementById('p2RH').style.color = 'white';
            document.getElementById('p2RH').classList.add('cellSelection');                
        } else if(p2RH !== "" && p2RH === "yellow"){
            document.getElementById('p2RH').style.backgroundColor = color;
            document.getElementById('p2RH').style.color = 'black';
            document.getElementById('p2RH').classList.add('cellSelection');                    
        };

        };
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'right hand'){
        var p3rhb = document.getElementById('p3rhg');
            p3rhb.play();
        document.getElementById('p3RH').innerHTML = color;
        var p3RH = document.getElementById('p3RH').innerHTML;
        sessionStorage.setItem('p3rhAction', `${p3RH}`);
        if(p3RH !== "" && p3RH !== "yellow"){
            document.getElementById('p3RH').style.backgroundColor = color;
            document.getElementById('p3RH').style.color = 'white';    
            document.getElementById('p3RH').classList.add('cellSelection');                
        } else if(p3RH !== "" && p3RH === "yellow"){
            document.getElementById('p3RH').style.backgroundColor = color;
            document.getElementById('p3RH').style.color = 'black'; 
            document.getElementById('p3RH').classList.add('cellSelection');                
        }

        } 
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'right hand'){
        var p4rhg = document.getElementById('p4rhg');
            p4rhg.play();
        document.getElementById('p4RH').innerHTML = color;
        var p4RH = document.getElementById('p4RH').innerHTML;
        sessionStorage.setItem('p4rhAction', `${p4RH}`);
        if(p4RH !== "" && p4RH !== "yellow"){
            document.getElementById('p4RH').style.backgroundColor = color;
            document.getElementById('p4RH').style.color = 'white';    
            document.getElementById('p4RH').classList.add('cellSelection');                
        } else if(p4RH !== "" && p4RH === "yellow"){
            document.getElementById('p4RH').style.backgroundColor = color;
            document.getElementById('p4RH').style.color = 'black'; 
            document.getElementById('p4RH').classList.add('cellSelection');                
        }
        }
        player4Reselect();
    };
            //if spin is 4
} else if(int === 4) {
    document.getElementById("twisterArrow").classList.add('rotate4');
    var limb = segmentSpinDeg4[1];
    var color = segmentSpinDeg4[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'left hand'){
            var p1lhr = document.getElementById('p1lhr');
            p1lhr.play();
    document.getElementById('p1LH').innerHTML = color;
    var p1LH = document.getElementById('p1LH').innerHTML;
    sessionStorage.setItem('p1lhAction', `${p1LH}`);
    if(p1LH !== "" && p1LH !== "yellow"){
        document.getElementById('p1LH').style.backgroundColor = color;
        document.getElementById('p1LH').style.color = 'white';    
        document.getElementById('p1LH').classList.add('cellSelection');                
    } else if(p1LH !== "" && p1LH === "yellow"){
        document.getElementById('p1LH').style.backgroundColor = color;
        document.getElementById('p1LH').style.color = 'black';    
        document.getElementById('p1LH').classList.add('cellSelection');                
    }
    };
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'left hand'){
        var p2lhr = document.getElementById('p2lhr');
            p2lhr.play();
        document.getElementById('p2LH').innerHTML = color;
        var p2LH = document.getElementById('p2LH').innerHTML;
        sessionStorage.setItem('p2lhAction', `${p2LH}`);
        if(p2LH !== "" && p2LH !== "yellow"){
            document.getElementById('p2LH').style.backgroundColor = color;
            document.getElementById('p2LH').style.color = 'white';    
            document.getElementById('p2LH').classList.add('cellSelection');                
        } else if(p2LH !== "" && p2LH === "yellow"){
            document.getElementById('p2LH').style.backgroundColor = color;
            document.getElementById('p2LH').style.color = 'black';    
            document.getElementById('p2LH').classList.add('cellSelection');                
        }
        }
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'left hand'){
        var p3lhr = document.getElementById('p3lhr');
            p3lhr.play();
        document.getElementById('p3LH').innerHTML = color;
        var p3LH = document.getElementById('p3LH').innerHTML;
        sessionStorage.setItem('p3lhAction', `${p3LH}`);
        if(p3LH !== "" && p3LH !== "yellow"){
            document.getElementById('p3LH').style.backgroundColor = color;
            document.getElementById('p3LH').style.color = 'white';    
            document.getElementById('p3LH').classList.add('cellSelection');                
        } else if(p3LH !== "" && p3LH === "yellow"){
            document.getElementById('p3LH').style.backgroundColor = color;
            document.getElementById('p3LH').style.color = 'black';    
            document.getElementById('p3LH').classList.add('cellSelection');                
        }
        } 
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'left hand'){
        var p4lhr = document.getElementById('p4lhr');
            p4lhr.play();
        document.getElementById('p4LH').innerHTML = color;
        var p4LH = document.getElementById('p4LH').innerHTML;
        sessionStorage.setItem('p4lhAction', `${p4LH}`);
        if(p4LH !== "" && p4LH !== "yellow"){
            document.getElementById('p4LH').style.backgroundColor = color;
            document.getElementById('p4LH').style.color = 'white';    
            document.getElementById('p4LH').classList.add('cellSelection');                
        } else if(p4LH !== "" && p4LH === "yellow"){
            document.getElementById('p4LH').style.backgroundColor = color;
            document.getElementById('p4LH').style.color = 'black';    
            document.getElementById('p4LH').classList.add('cellSelection');                
        }
        }
            player4Reselect();     
    };
            //if spin is 5
} else if(int === 5) {
    document.getElementById("twisterArrow").classList.add('rotate5');;
    var limb = segmentSpinDeg5[1];
    var color = segmentSpinDeg5[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'left hand'){
            var p1lhy = document.getElementById('p1lhy');
            p1lhy.play();
    document.getElementById('p1LH').innerHTML = color;
    var p1LH = document.getElementById('p1LH').innerHTML;
    sessionStorage.setItem('p1lhAction', `${p1LH}`);
    if(p1LH !== "" && p1LH !== "yellow"){
        document.getElementById('p1LH').style.backgroundColor = color;
        document.getElementById('p1LH').style.color = 'white'; 
        document.getElementById('p1LH').classList.add('cellSelection');                   
    } else if(p1LH !== "" && p1LH === "yellow"){
        document.getElementById('p1LH').style.backgroundColor = color;
        document.getElementById('p1LH').style.color = 'black';    
        document.getElementById('p1LH').classList.add('cellSelection');                   
    }
    } 
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'left hand'){
        var p2lhy = document.getElementById('p2lhy');
            p2lhy.play();
        document.getElementById('p2LH').innerHTML = color;
        var p2LH = document.getElementById('p2LH').innerHTML;
        sessionStorage.setItem('p2lhAction', `${p2LH}`);
        if(p2LH !== "" && p2LH !== "yellow"){
            document.getElementById('p2LH').style.backgroundColor = color;
            document.getElementById('p2LH').style.color = 'white';
            document.getElementById('p2LH').classList.add('cellSelection');                       
        } else if(p2LH !== "" && p2LH === "yellow"){
            document.getElementById('p2LH').style.backgroundColor = color;
            document.getElementById('p2LH').style.color = 'black';    
            document.getElementById('p2LH').classList.add('cellSelection');                       
        }
        };
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'left hand'){
        var p3lhy = document.getElementById('p3lhy');
            p3lhy.play();
        document.getElementById('p3LH').innerHTML = color;
        var p3LH = document.getElementById('p3LH').innerHTML;
        sessionStorage.setItem('p3lhAction', `${p3LH}`);
        if(p3LH !== "" && p3LH !== "yellow"){
            document.getElementById('p3LH').style.backgroundColor = color;
            document.getElementById('p3LH').style.color = 'white';    
            document.getElementById('p3LH').classList.add('cellSelection');                       
        } else if(p3LH !== "" && p3LH === "yellow"){
            document.getElementById('p3LH').style.backgroundColor = color;
            document.getElementById('p3LH').style.color = 'black';    
            document.getElementById('p3LH').classList.add('cellSelection');                       
        }
        };
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'left hand'){
        var p4lhy = document.getElementById('p4lhy');
            p4lhy.play();
        document.getElementById('p4LH').innerHTML = color;
        var p4LH = document.getElementById('p4LH').innerHTML;
        sessionStorage.setItem('p4lhAction', `${p4LH}`);
        if(p4LH !== "" && p4LH !== "yellow"){
            document.getElementById('p4LH').style.backgroundColor = color;
            document.getElementById('p4LH').style.color = 'white';    
            document.getElementById('p4LH').classList.add('cellSelection');                       
        } else if(p4LH !== "" && p4LH === "yellow"){
            document.getElementById('p4LH').style.backgroundColor = color;
            document.getElementById('p4LH').style.color = 'black';    
            document.getElementById('p4LH').classList.add('cellSelection');                       
        }
        } 
        player4Reselect();
            };
            //if spin is 6
} else if(int === 6) {
    document.getElementById("twisterArrow").classList.add('rotate6');;
    var limb = segmentSpinDeg6[1];
    var color = segmentSpinDeg6[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'left hand'){
            var p1lhb = document.getElementById('p1lhb');
            p1lhb.play();
    document.getElementById('p1LH').innerHTML = color;
    var p1LH = document.getElementById('p1LH').innerHTML;
    sessionStorage.setItem('p1lhAction', `${p1LH}`);
    if(p1LH !== "" && p1LH !== "yellow"){
        document.getElementById('p1LH').style.backgroundColor = color;
        document.getElementById('p1LH').style.color = 'white';    
        document.getElementById('p1LH').classList.add('cellSelection');                       
    } else if(p1LH !== "" && p1LH === "yellow"){
        document.getElementById('p1LH').style.backgroundColor = color;
        document.getElementById('p1LH').style.color = 'black';    
        document.getElementById('p1LH').classList.add('cellSelection');                       
    }
    } 
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'left hand'){
        var p2lhb = document.getElementById('p2lhb');
            p2lhb.play();
        document.getElementById('p2LH').innerHTML = color;
        var p2LH = document.getElementById('p2LH').innerHTML;
        sessionStorage.setItem('p2lhAction', `${p2LH}`);
        if(p2LH !== "" && p2LH !== "yellow"){
            document.getElementById('p2LH').style.backgroundColor = color;
            document.getElementById('p2LH').style.color = 'white';    
            document.getElementById('p2LH').classList.add('cellSelection');                       
        } else if(p2LH !== "" && p2LH === "yellow"){
            document.getElementById('p2LH').style.backgroundColor = color;
            document.getElementById('p2LH').style.color = 'black';    
            document.getElementById('p2LH').classList.add('cellSelection');                       
        }
        };
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'left hand'){
        var p3lhb = document.getElementById('p3lhb');
            p3lhb.play();
        document.getElementById('p3LH').innerHTML = color;
        var p3LH = document.getElementById('p3LH').innerHTML;
        sessionStorage.setItem('p3lhAction', `${p3LH}`);
        if(p3LH !== "" && p3LH !== "yellow"){
            document.getElementById('p3LH').style.backgroundColor = color;
            document.getElementById('p3LH').style.color = 'white';    
            document.getElementById('p3LH').classList.add('cellSelection');                       
        } else if(p3LH !== "" && p3LH === "yellow"){
            document.getElementById('p3LH').style.backgroundColor = color;
            document.getElementById('p3LH').style.color = 'black';    
            document.getElementById('p3LH').classList.add('cellSelection');                       
        }
        }
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'left hand'){
        var p4lhb = document.getElementById('p4lhb');
            p4lhb.play();
        document.getElementById('p4LH').innerHTML = color;
        var p4LH = document.getElementById('p4LH').innerHTML;
        sessionStorage.setItem('p4lhAction', `${p4LH}`);
        if(p4LH !== "" && p4LH !== "yellow"){
            document.getElementById('p4LH').style.backgroundColor = color;
            document.getElementById('p4LH').style.color = 'white';    
            document.getElementById('p4LH').classList.add('cellSelection');                       
        } else if(p4LH !== "" && p4LH === "yellow"){
            document.getElementById('p4LH').style.backgroundColor = color;
            document.getElementById('p4LH').style.color = 'black';    
            document.getElementById('p4LH').classList.add('cellSelection');                       
        }
        };
        player4Reselect();
    };
        
            //if spin is 7
} else if(int === 7) {
    document.getElementById("twisterArrow").classList.add('rotate7');;
    var limb = segmentSpinDeg7[1];
    var color = segmentSpinDeg7[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'left hand'){
            var p1lhg = document.getElementById('p1lhg');
            p1lhg.play();
    document.getElementById('p1LH').innerHTML = color;
    var p1LH = document.getElementById('p1LH').innerHTML;
    sessionStorage.setItem('p1lhAction', `${p1LH}`);
    if(p1LH !== "" && p1LH !== "yellow"){
        document.getElementById('p1LH').style.backgroundColor = color;
        document.getElementById('p1LH').style.color = 'white';
        document.getElementById('p1LH').classList.add('cellSelection');      
    } else if(p1LH !== "" && p1LH === "yellow"){
        document.getElementById('p1LH').style.backgroundColor = color;
        document.getElementById('p1LH').style.color = 'black';
        document.getElementById('p1LH').classList.add('cellSelection');          
    }
    }
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'left hand'){
        var p2lhg = document.getElementById('p2lhg');
            p2lhg.play();
        document.getElementById('p2LH').innerHTML = color;
        var p2LH = document.getElementById('p2LH').innerHTML;
        sessionStorage.setItem('p2lhAction', `${p2LH}`);
        if(p2LH !== "" && p2LH !== "yellow"){
            document.getElementById('p2LH').style.backgroundColor = color;
            document.getElementById('p2LH').style.color = 'white';
            document.getElementById('p2LH').classList.add('cellSelection');          
        } else if(p2LH !== "" && p2LH === "yellow"){
            document.getElementById('p2LH').style.backgroundColor = color;
            document.getElementById('p2LH').style.color = 'black';    
            document.getElementById('p2LH').classList.add('cellSelection');          
        }
        }
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'left hand'){
        var p3lhg = document.getElementById('p3lhg');
            p3lhg.play();
        document.getElementById('p3LH').innerHTML = color;
        var p3LH = document.getElementById('p3LH').innerHTML;
        sessionStorage.setItem('p3lhAction', `${p3LH}`);
        if(p3LH !== "" && p3LH !== "yellow"){
            document.getElementById('p3LH').style.backgroundColor = color;
            document.getElementById('p3LH').style.color = 'white';    
            document.getElementById('p3LH').classList.add('cellSelection');          
        } else if(p3LH !== "" && p3LH === "yellow"){
            document.getElementById('p3LH').style.backgroundColor = color;
            document.getElementById('p3LH').style.color = 'black';    
            document.getElementById('p3LH').classList.add('cellSelection');          
        }
        };
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'left hand'){
        var p4lhg = document.getElementById('p4lhg');
            p4lhg.play();
        document.getElementById('p4LH').innerHTML = color;
        var p4LH = document.getElementById('p4LH').innerHTML;
        sessionStorage.setItem('p4lhAction', `${p4LH}`);
        if(p4LH !== "" && p4LH !== "yellow"){
            document.getElementById('p4LH').style.backgroundColor = color;
            document.getElementById('p4LH').style.color = 'white';  
            document.getElementById('p4LH').classList.add('cellSelection');            
        } else if(p4LH !== "" && p4LH === "yellow"){
            document.getElementById('p4LH').style.backgroundColor = color;
            document.getElementById('p4LH').style.color = 'black';    
            document.getElementById('p4LH').classList.add('cellSelection');            
        }
        }; 
        player4Reselect();
    }; 
            //if spinner is 8
} else if(int === 8) {
    document.getElementById("twisterArrow").classList.add('rotate8');;
    var limb = segmentSpinDeg8[1];
    var color = segmentSpinDeg8[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'right foot'){
            var p1rfr = document.getElementById('p1rfr');
            p1rfr.play();
    document.getElementById('p1RF').innerHTML = color;
    var p1RF = document.getElementById('p1RF').innerHTML;
    sessionStorage.setItem('p1rfAction', `${p1RF}`);
    if(p1RF !== "" && p1RF !== "yellow"){
        document.getElementById('p1RF').style.backgroundColor = color;
        document.getElementById('p1RF').style.color = 'white';  
        document.getElementById('p1RF').classList.add('cellSelection');              
    } else if(p1RF !== "" && p1RF === "yellow"){
        document.getElementById('p1RF').style.backgroundColor = color;
        document.getElementById('p1RF').style.color = 'black';    
        document.getElementById('p1RF').classList.add('cellSelection');              
    }
    };
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'right foot'){
        var p2rfr = document.getElementById('p2rfr');
            p2rfr.play();
        document.getElementById('p2RF').innerHTML = color;
        var p2RF = document.getElementById('p2RF').innerHTML;
        sessionStorage.setItem('p2rfAction', `${p2RF}`);
        if(p2RF !== "" && p2RF !== "yellow"){
            document.getElementById('p2RF').style.backgroundColor = color;
            document.getElementById('p2RF').style.color = 'white';  
            document.getElementById('p2RF').classList.add('cellSelection');                
        } else if(p2RF !== "" && p2RF === "yellow"){
            document.getElementById('p2RF').style.backgroundColor = color;
            document.getElementById('p2RF').style.color = 'black';   
            document.getElementById('p2RF').classList.add('cellSelection');                 
        }
        };
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'right foot'){
        var p3rfr = document.getElementById('p3rfr');
            p3rfr.play();
        document.getElementById('p3RF').innerHTML = color;
        var p3RF = document.getElementById('p3RF').innerHTML;
        sessionStorage.setItem('p3rfAction', `${p3RF}`);
        if(p3RF !== "" && p3RF !== "yellow"){
            document.getElementById('p3RF').style.backgroundColor = color;
            document.getElementById('p3RF').style.color = 'white';  
            document.getElementById('p3RF').classList.add('cellSelection');                  
        } else if(p3RF !== "" && p3RF === "yellow"){
            document.getElementById('p3RF').style.backgroundColor = color;
            document.getElementById('p3RF').style.color = 'black'; 
            document.getElementById('p3RF').classList.add('cellSelection');                  
        }
        };
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'right foot'){
        var p4rfr = document.getElementById('p4rfr');
            p4rfr.play();
        document.getElementById('p4RF').innerHTML = color;
        var p4RF = document.getElementById('p4RF').innerHTML;
        sessionStorage.setItem('p4rfAction', `${p4RF}`);
        if(p4RF !== "" && p4RF !== "yellow"){
            document.getElementById('p4RF').style.backgroundColor = color;
            document.getElementById('p4RF').style.color = 'white'; 
            document.getElementById('p4RF').classList.add('cellSelection');                     
        } else if(p4RF !== "" && p4RF === "yellow"){
            document.getElementById('p4RF').style.backgroundColor = color;
            document.getElementById('p4RF').style.color = 'black'; 
            document.getElementById('p4RF').classList.add('cellSelection');                     
        }
        }
        player4Reselect();
    };
            //if spinner is 9
} else if(int === 9) {
    document.getElementById("twisterArrow").classList.add('rotate9');;
    var limb = segmentSpinDeg9[1];
    var color = segmentSpinDeg9[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'right foot'){
            var p1rfy = document.getElementById('p1rfy');
            p1rfy.play();
    document.getElementById('p1RF').innerHTML = color;
    var p1RF = document.getElementById('p1RF').innerHTML;
    sessionStorage.setItem('p1rfAction', `${p1RF}`);
    if(p1RF !== "" && p1RF !== "yellow"){
        document.getElementById('p1RF').style.backgroundColor = color;
        document.getElementById('p1RF').style.color = 'white';  
        document.getElementById('p1RF').classList.add('cellSelection');
    } else if(p1RF !== "" && p1RF === "yellow"){
        document.getElementById('p1RF').style.backgroundColor = color;
        document.getElementById('p1RF').style.color = 'black';    
        document.getElementById('p1RF').classList.add('cellSelection');
    }
    };
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'right foot'){
        var p2rfy = document.getElementById('p2rfy');
            p2rfy.play();
        document.getElementById('p2RF').innerHTML = color;
        var p2RF = document.getElementById('p2RF').innerHTML;
        sessionStorage.setItem('p2rfAction', `${p2RF}`);
        if(p2RF !== "" && p2RF !== "yellow"){
            document.getElementById('p2RF').style.backgroundColor = color;
            document.getElementById('p2RF').style.color = 'white';   
            document.getElementById('p2RF').classList.add('cellSelection'); 
        } else if(p2RF !== "" && p2RF === "yellow"){
            document.getElementById('p2RF').style.backgroundColor = color;
            document.getElementById('p2RF').style.color = 'black';    
            document.getElementById('p2RF').classList.add('cellSelection'); 
        }
        }
        player2Reselect();
} else if (p3selecter === true){
   if(limb === 'right foot'){
    var p3rfy = document.getElementById('p3rfy');
    p3rfy.play();
        document.getElementById('p3RF').innerHTML = color;
        var p3RF = document.getElementById('p3RF').innerHTML;
        sessionStorage.setItem('p3rfAction', `${p3RF}`);
        if(p3RF !== "" && p3RF !== "yellow"){
            document.getElementById('p3RF').style.backgroundColor = color;
            document.getElementById('p3RF').style.color = 'white'; 
            document.getElementById('p3RF').classList.add('cellSelection');    
        } else if(p3RF !== "" && p3RF === "yellow"){
            document.getElementById('p3RF').style.backgroundColor = color;
            document.getElementById('p3RF').style.color = 'black'; 
            document.getElementById('p3RF').classList.add('cellSelection');    
        }
        }
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'right foot'){
        var p4rfy = document.getElementById('p4rfy');
        p4rfy.play();
        document.getElementById('p4RF').innerHTML = color;
        var p4RF = document.getElementById('p4RF').innerHTML;
        sessionStorage.setItem('p4rfAction', `${p4RF}`);
        if(p4RF !== "" && p4RF !== "yellow"){
            document.getElementById('p4RF').style.backgroundColor = color;
            document.getElementById('p4RF').style.color = 'white'; 
            document.getElementById('p4RF').classList.add('cellSelection');       
        } else if(p4RF !== "" && p4RF === "yellow"){
            document.getElementById('p4RF').style.backgroundColor = color;
            document.getElementById('p4RF').style.color = 'black'; 
            document.getElementById('p4RF').classList.add('cellSelection');       
        }
        }
        player4Reselect();
    };
            //if spinner is 10
} else if(int === 10) {
    document.getElementById("twisterArrow").classList.add('rotate10');;
    var limb = segmentSpinDeg10[1];
    var color = segmentSpinDeg10[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'right foot'){
            var p1rfb = document.getElementById('p1rfb');
            p1rfb.play();
    document.getElementById('p1RF').innerHTML = color;
    var p1RF = document.getElementById('p1RF').innerHTML;
    sessionStorage.setItem('p1rfAction', `${p1RF}`);
    if(p1RF !== "" && p1RF !== "yellow"){
        document.getElementById('p1RF').style.backgroundColor = color;
        document.getElementById('p1RF').style.color = 'white';  
        document.getElementById('p1RF').classList.add('cellSelection');         
    } else if(p1RF !== "" && p1RF === "yellow"){
        document.getElementById('p1RF').style.backgroundColor = color;
        document.getElementById('p1RF').style.color = 'black';    
        document.getElementById('p1RF').classList.add('cellSelection');         
    }
    }
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'right foot'){
        var p2rfb = document.getElementById('p2rfb');
            p2rfb.play();
        document.getElementById('p2RF').innerHTML = color;
        var p2RF = document.getElementById('p2RF').innerHTML;
        sessionStorage.setItem('p2rfAction', `${p2RF}`);
        if(p2RF !== "" && p2RF !== "yellow"){
            document.getElementById('p2RF').style.backgroundColor = color;
            document.getElementById('p2RF').style.color = 'white'; 
            document.getElementById('p2RF').classList.add('cellSelection');            
        } else if(p2RF !== "" && p2RF === "yellow"){
            document.getElementById('p2RF').style.backgroundColor = color;
            document.getElementById('p2RF').style.color = 'black';    
            document.getElementById('p2RF').classList.add('cellSelection');            
        }
        }
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'right foot'){
        var p3rfb = document.getElementById('p3rfb');
            p3rfb.play();
        document.getElementById('p3RF').innerHTML = color;
        var p3RF = document.getElementById('p3RF').innerHTML;
        sessionStorage.setItem('p3rfAction', `${p3RF}`);
        if(p3RF !== "" && p3RF !== "yellow"){
            document.getElementById('p3RF').style.backgroundColor = color;
            document.getElementById('p3RF').style.color = 'white';   
            document.getElementById('p3RF').classList.add('cellSelection');             
        } else if(p3RF !== "" && p3RF === "yellow"){
            document.getElementById('p3RF').style.backgroundColor = color;
            document.getElementById('p3RF').style.color = 'black'; 
            document.getElementById('p3RF').classList.add('cellSelection');             
        }
        }
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'right foot'){
        var p4rfb = document.getElementById('p4rfb');
            p4rfb.play();
        document.getElementById('p4RF').innerHTML = color;
        var p4RF = document.getElementById('p4RF').innerHTML;
        sessionStorage.setItem('p4rfAction', `${p4RF}`);
        if(p4RF !== "" && p4RF !== "yellow"){
            document.getElementById('p4RF').style.backgroundColor = color;
            document.getElementById('p4RF').style.color = 'white';  
            document.getElementById('p4RF').classList.add('cellSelection');               
        } else if(p4RF !== "" && p4RF === "yellow"){
            document.getElementById('p4RF').style.backgroundColor = color;
            document.getElementById('p4RF').style.color = 'black'; 
            document.getElementById('p4RF').classList.add('cellSelection');               
        }
        }
        player4Reselect();
    };
} else if(int === 11) {
    document.getElementById("twisterArrow").classList.add('rotate11');;
    var limb = segmentSpinDeg11[1];
    var color = segmentSpinDeg11[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'right foot'){
            var p1rfg = document.getElementById('p1rfg');
            p1rfg.play();
    document.getElementById('p1RF').innerHTML = color;
    var p1RF = document.getElementById('p1RF').innerHTML;
    sessionStorage.setItem('p1rfAction', `${p1RF}`);
    if(p1RF !== "" && p1RF !== "yellow"){
        document.getElementById('p1RF').style.backgroundColor = color;
        document.getElementById('p1RF').style.color = 'white'; 
        document.getElementById('p1RF').classList.add('cellSelection');                  
    } else if(p1RF !== "" && p1RF === "yellow"){
        document.getElementById('p1RF').style.backgroundColor = color;
        document.getElementById('p1RF').style.color = 'black';    
        document.getElementById('p1RF').classList.add('cellSelection');                  
    }
    };
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'right foot'){
        var p2rfg = document.getElementById('p2rfg');
            p2rfg.play();
        document.getElementById('p2RF').innerHTML = color;
        var p2RF = document.getElementById('p2RF').innerHTML;
        sessionStorage.setItem('p2rfAction', `${p2RF}`);
        if(p2RF !== "" && p2RF !== "yellow"){
            document.getElementById('p2RF').style.backgroundColor = color;
            document.getElementById('p2RF').style.color = 'white'; 
            document.getElementById('p2RF').classList.add('cellSelection');                     
        } else if(p2RF !== "" && p2RF === "yellow"){
            document.getElementById('p2RF').style.backgroundColor = color;
            document.getElementById('p2RF').style.color = 'black';    
            document.getElementById('p2RF').classList.add('cellSelection');                     
        }
        }
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'right foot'){
        var p3rfg = document.getElementById('p3rfg');
        p3rfg.play();
        document.getElementById('p3RF').innerHTML = color;
        var p3RF = document.getElementById('p3RF').innerHTML;
        sessionStorage.setItem('p3rfAction', `${p3RF}`);
        if(p3RF !== "" && p3RF !== "yellow"){
            document.getElementById('p3RF').style.backgroundColor = color;
            document.getElementById('p3RF').style.color = 'white'; 
            document.getElementById('p3RF').classList.add('cellSelection');                        
        } else if(p3RF !== "" && p3RF === "yellow"){
            document.getElementById('p3RF').style.backgroundColor = color;
            document.getElementById('p3RF').style.color = 'black'; 
            document.getElementById('p3RF').classList.add('cellSelection');                        
        }
        }
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'right foot'){
        var p4rfg = document.getElementById('p4rfg');
        p4rfg.play();
        document.getElementById('p4RF').innerHTML = color;
        var p4RF = document.getElementById('p4RF').innerHTML;
        sessionStorage.setItem('p4rfAction', `${p4RF}`);
        if(p4RF !== "" && p4RF !== "yellow"){
            document.getElementById('p4RF').style.backgroundColor = color;
            document.getElementById('p4RF').style.color = 'white'; 
            document.getElementById('p4RF').classList.add('cellSelection');                           
        } else if(p4RF !== "" && p4RF === "yellow"){
            document.getElementById('p4RF').style.backgroundColor = color;
            document.getElementById('p4RF').style.color = 'black'; 
            document.getElementById('p4RF').classList.add('cellSelection');                           
        }
        }
        player4Reselect();
      

    };
} else if(int === 12) {
    document.getElementById("twisterArrow").classList.add('rotate12');
    var limb = segmentSpinDeg12[1];
    var color = segmentSpinDeg12[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        var p1lfr = document.getElementById('p1lfr');
        p1lfr.play();
        if(limb === 'left foot'){
        document.getElementById('p1LF').innerHTML = color;
        var p1LF = document.getElementById('p1LF').innerHTML;
        sessionStorage.setItem('p1lfAction', `${p1LF}`);
        if(p1LF !== "" && p1LF !== "yellow"){
            document.getElementById('p1LF').style.backgroundColor = color;
            document.getElementById('p1LF').style.color = 'white';  
            document.getElementById('p1LF').classList.add('cellSelection');                             
        } else if(p1LF !== "" && p1LF === "yellow"){
            document.getElementById('p1LF').style.backgroundColor = color;
            document.getElementById('p1LF').style.color = 'black'; 
            document.getElementById('p1LF').classList.add('cellSelection');                             
        }
    };
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'left foot'){
        var p2lfr = document.getElementById('p2lfr');
        p2lfr.play();
        document.getElementById('p2LF').innerHTML = color;
        var p2LF = document.getElementById('p2LF').innerHTML;
        sessionStorage.setItem('p2lfAction', `${p2LF}`);
        if(p2LF !== "" && p2LF !== "yellow"){
            document.getElementById('p2LF').style.backgroundColor = color;
            document.getElementById('p2LF').style.color = 'white';  
            document.getElementById('p2LF').classList.add('cellSelection');                               
        } else if(p2LF !== "" && p2LF === "yellow"){
            document.getElementById('p2LF').style.backgroundColor = color;
            document.getElementById('p2LF').style.color = 'black';    
            document.getElementById('p2LF').classList.add('cellSelection');                               
        }
        }
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'left foot'){
        var p3lfr = document.getElementById('p3lfr');
        p3lfr.play();
            document.getElementById('p3LF').innerHTML = color;
            var p3LF = document.getElementById('p3LF').innerHTML;
            sessionStorage.setItem('p3lfAction', `${p3LF}`);
            if(p3LF !== "" && p3LF !== "yellow"){
                document.getElementById('p3LF').style.backgroundColor = color;
                document.getElementById('p3LF').style.color = 'white'; 
                document.getElementById('p3LF').classList.add('cellSelection');                                  
            } else if(p3LF !== "" && p3LF === "yellow"){
                document.getElementById('p3LF').style.backgroundColor = color;
                document.getElementById('p3LF').style.color = 'black'; 
                document.getElementById('p3LF').classList.add('cellSelection');                                  
            }
        };
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'left foot'){
        var p4lfr = document.getElementById('p4lfr');
        p4lfr.play();
            document.getElementById('p4LF').innerHTML = color;
            var p4LF = document.getElementById('p4LF').innerHTML;
            sessionStorage.setItem('p4lfAction', `${p4LF}`);
            if(p4LF !== "" && p4LF !== "yellow"){
                document.getElementById('p4LF').style.backgroundColor = color;
                document.getElementById('p4LF').style.color = 'white'; 
                document.getElementById('p4LF').classList.add('cellSelection');                                     
            } else if(p4LF !== "" && p4LF === "yellow"){
                document.getElementById('p4LF').style.backgroundColor = color;
                document.getElementById('p4LF').style.color = 'black'; 
                document.getElementById('p4LF').classList.add('cellSelection');                                     
            }
        };
        player4Reselect();
    };
} else if(int === 13) {
        document.getElementById("twisterArrow").classList.add('rotate13');;
    var limb = segmentSpinDeg13[1];
    var color = segmentSpinDeg13[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'left foot'){
            var p1lfy = document.getElementById('p1lfy');
            p1lfy.play();
        document.getElementById('p1LF').innerHTML = color;
        var p1LF = document.getElementById('p1LF').innerHTML;
        sessionStorage.setItem('p1lfAction', `${p1LF}`);
        if(p1LF !== "" && p1LF !== "yellow"){
            document.getElementById('p1LF').style.backgroundColor = color;
            document.getElementById('p1LF').style.color = 'white'; 
            document.getElementById('p1LF').classList.add('cellSelection');                                        
        } else if(p1LF !== "" && p1LF === "yellow"){
            document.getElementById('p1LF').style.backgroundColor = color;
            document.getElementById('p1LF').style.color = 'black'; 
            document.getElementById('p1LF').classList.add('cellSelection');                                        
        }
    };
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'left foot'){
        var p2lfy = document.getElementById('p2lfy');
            p2lfy.play();
            document.getElementById('p2LF').innerHTML = color;
            var p2LF = document.getElementById('p2LF').innerHTML;
            sessionStorage.setItem('p2lfAction', `${p2LF}`);
            if(p2LF !== "" && p2LF !== "yellow"){
                document.getElementById('p2LF').style.backgroundColor = color;
                document.getElementById('p2LF').style.color = 'white'; 
                document.getElementById('p2LF').classList.add('cellSelection');                                           
            } else if(p2LF !== "" && p2LF === "yellow"){
                document.getElementById('p2LF').style.backgroundColor = color;
                document.getElementById('p2LF').style.color = 'black'; 
                document.getElementById('p2LF').classList.add('cellSelection');                                           
            }
        };
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'left foot'){
        var p3lfy = document.getElementById('p3lfy');
            p3lfy.play();
            document.getElementById('p3LF').innerHTML = color;
            var p3LF = document.getElementById('p3LF').innerHTML;
            sessionStorage.setItem('p3lfAction', `${p3LF}`);
            if(p3LF !== "" && p3LF !== "yellow"){
                document.getElementById('p3LF').style.backgroundColor = color;
                document.getElementById('p3LF').style.color = 'white';
                document.getElementById('p3LF').classList.add('cellSelection');                                               
            } else if(p3LF !== "" && p3LF === "yellow"){
                document.getElementById('p3LF').style.backgroundColor = color;
                document.getElementById('p3LF').style.color = 'black'; 
                document.getElementById('p3LF').classList.add('cellSelection');                                               
            }
        };
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'left foot'){
        var p4lfy = document.getElementById('p4lfy');
            p4lfy.play();
            document.getElementById('p4LF').innerHTML = color;
            var p4LF = document.getElementById('p4LF').innerHTML;
            sessionStorage.setItem('p4lfAction', `${p4LF}`);
            if(p4LF !== "" && p4LF !== "yellow"){
                document.getElementById('p4LF').style.backgroundColor = color;
                document.getElementById('p4LF').style.color = 'white'; 
                document.getElementById('p4LF').classList.add('cellSelection');                                                  
            } else if(p4LF !== "" && p4LF === "yellow"){
                document.getElementById('p4LF').style.backgroundColor = color;
                document.getElementById('p4LF').style.color = 'black'; 
                document.getElementById('p4LF').classList.add('cellSelection');                                                  
            }
        };
        player4Reselect();
    };
} else if(int === 14) {
    document.getElementById("twisterArrow").classList.add('rotate14');
    var limb = segmentSpinDeg14[1];
    var color = segmentSpinDeg14[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'left foot'){
            var p1lfb = document.getElementById('p1lfb');
            p1lfb.play();
        document.getElementById('p1LF').innerHTML = color;
        var p1LF = document.getElementById('p1LF').innerHTML;
        sessionStorage.setItem('p1lfAction', `${p1LF}`);
        if(p1LF !== "" && p1LF !== "yellow"){
            document.getElementById('p1LF').style.backgroundColor = color;
            document.getElementById('p1LF').style.color = 'white';   
            document.getElementById('p1LF').classList.add('cellSelection');                                                   
        } else if(p1LF !== "" && p1LF === "yellow"){
            document.getElementById('p1LF').style.backgroundColor = color;
            document.getElementById('p1LF').style.color = 'black'; 
            document.getElementById('p1LF').classList.add('cellSelection');                                                   
        }
    };
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'left foot'){
        var p2lfb = document.getElementById('p2lfb');
            p2lfb.play();
            document.getElementById('p2LF').innerHTML = color;
            var p2LF = document.getElementById('p2LF').innerHTML;
            sessionStorage.setItem('p2lfAction', `${p2LF}`);
            if(p2LF !== "" && p2LF !== "yellow"){
                document.getElementById('p2LF').style.backgroundColor = color;
                document.getElementById('p2LF').style.color = 'white';   
                document.getElementById('p2LF').classList.add('cellSelection');                                                    
            } else if(p2LF !== "" && p2LF === "yellow"){
                document.getElementById('p2LF').style.backgroundColor = color;
                document.getElementById('p2LF').style.color = 'black'; 
                document.getElementById('p2LF').classList.add('cellSelection');                                                    
            }
        };
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'left foot'){
        var p3lfb = document.getElementById('p3lfb');
            p3lfb.play();
            document.getElementById('p3LF').innerHTML = color;
            var p3LF = document.getElementById('p3LF').innerHTML;
            sessionStorage.setItem('p3lfAction', `${p3LF}`);
            if(p3LF !== "" && p3LF !== "yellow"){
                document.getElementById('p3LF').style.backgroundColor = color;
                document.getElementById('p3LF').style.color = 'white'; 
                document.getElementById('p3LF').classList.add('cellSelection');                                                       
            } else if(p3LF !== "" && p3LF === "yellow"){
                document.getElementById('p3LF').style.backgroundColor = color;
                document.getElementById('p3LF').style.color = 'black'; 
                document.getElementById('p3LF').classList.add('cellSelection');                                                       
            }
        };
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'left foot'){
        var p4lfb = document.getElementById('p4lfb');
            p4lfb.play();
            document.getElementById('p4LF').innerHTML = color;
            var p4LF = document.getElementById('p4LF').innerHTML;
            sessionStorage.setItem('p4lfAction', `${p4LF}`);
            if(p4LF !== "" && p4LF !== "yellow"){
                document.getElementById('p4LF').style.backgroundColor = color;
                document.getElementById('p4LF').style.color = 'white';    
                document.getElementById('p4LF').classList.add('cellSelection');                                                       
            } else if(p4LF !== "" && p4LF === "yellow"){
                document.getElementById('p4LF').style.backgroundColor = color;
                document.getElementById('p4LF').style.color = 'black'; 
                document.getElementById('p4LF').classList.add('cellSelection');                                                       
            }
        };
        player4Reselect();
            };
} else if(int === 15) {
    document.getElementById("twisterArrow").classList.add('rotate15');
    var limb = segmentSpinDeg15[1];
    var color = segmentSpinDeg15[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'left foot'){
            var p1lfg = document.getElementById('p1lfg');
            p1lfg.play();
        document.getElementById('p1LF').innerHTML = color;
        var p1LF = document.getElementById('p1LF').innerHTML;
        sessionStorage.setItem('p1lfAction', `${p1LF}`);
        if(p1LF !== "" && p1LF !== "yellow"){
            document.getElementById('p1LF').style.backgroundColor = color;
            document.getElementById('p1LF').style.color = 'white'; 
            document.getElementById('p1LF').classList.add('cellSelection');                                                          
        } else if(p1LF !== "" && p1LF === "yellow"){
            document.getElementById('p1LF').style.backgroundColor = color;
            document.getElementById('p1LF').style.color = 'black'; 
            document.getElementById('p1LF').classList.add('cellSelection');                                                          
        }
    };
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'left foot'){
        var p2lfg = document.getElementById('p2lfg');
            p2lfg.play();
            document.getElementById('p2LF').innerHTML = color;
            var p2LF = document.getElementById('p2LF').innerHTML;
            sessionStorage.setItem('p2lfAction', `${p2LF}`);
            if(p2LF !== "" && p2LF !== "yellow"){
                document.getElementById('p2LF').style.backgroundColor = color;
                document.getElementById('p2LF').style.color = 'white';  
                document.getElementById('p2LF').classList.add('cellSelection');                                                            
            } else if(p2LF !== "" && p2LF === "yellow"){
                document.getElementById('p2LF').style.backgroundColor = color;
                document.getElementById('p2LF').style.color = 'black'; 
                document.getElementById('p2LF').classList.add('cellSelection');                                                            
            }
        };
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'left foot'){
        var p3lfg = document.getElementById('p3lfg');
            p3lfg.play();
            document.getElementById('p3LF').innerHTML = color;
            var p3LF = document.getElementById('p3LF').innerHTML;
            sessionStorage.setItem('p3lfAction', `${p3LF}`);
            if(p3LF !== "" && p3LF !== "yellow"){
                document.getElementById('p3LF').style.backgroundColor = color;
                document.getElementById('p3LF').style.color = 'white';    
                document.getElementById('p3LF').classList.add('cellSelection');                                                            
            } else if(p3LF !== "" && p3LF === "yellow"){
                document.getElementById('p3LF').style.backgroundColor = color;
                document.getElementById('p3LF').style.color = 'black'; 
                document.getElementById('p3LF').classList.add('cellSelection');                                                            
            }
        };
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'left foot'){
        var p4lfg = document.getElementById('p4lfg');
            p4lfg.play();
            document.getElementById('p4LF').innerHTML = color;
            var p4LF = document.getElementById('p4LF').innerHTML;
            sessionStorage.setItem('p4lfAction', `${p4LF}`);
            if(p4LF !== "" && p4LF !== "yellow"){
                document.getElementById('p4LF').style.backgroundColor = color;
                document.getElementById('p4LF').style.color = 'white';    
                document.getElementById('p4LF').classList.add('cellSelection');                                                            
            } else if(p4LF !== "" && p4LF === "yellow"){
                document.getElementById('p4LF').style.backgroundColor = color;
                document.getElementById('p4LF').style.color = 'black'; 
                document.getElementById('p4LF').classList.add('cellSelection');                                                            
            }
        };
        player4Reselect();
            };
} else if(int === 16) {
    document.getElementById("twisterArrow").classList.add('rotate16');
    var limb = segmentSpinDeg16[1];
    var color = segmentSpinDeg16[2];
    var p1selecter = document.getElementById('p1select').checked;
    var p2selecter = document.getElementById('p2select').checked;
    var p3selecter = document.getElementById('p3select').checked;
    var p4selecter = document.getElementById('p4select').checked;
    if(p1selecter === true){
        if(limb === 'right hand'){
            var p1rhr = document.getElementById('p1rhr');
            p1rhr.play();
    document.getElementById('p1RH').innerHTML = color;
    var p1RH = document.getElementById('p1RH').innerHTML;
    sessionStorage.setItem('p1rhAction', `${p1RH}`);
    if(p1RH !== "" && p1RH !== "yellow"){
       document.getElementById('p1RH').style.backgroundColor = color;
        document.getElementById('p1RH').style.color = 'white';
        document.getElementById('p1RH').classList.add('cellSelection');                                                            
    } else if(p1RH !== "" && p1RH === "yellow"){
        document.getElementById('p1RH').style.backgroundColor = color;
        document.getElementById('p1RH').style.color = 'black';    
        document.getElementById('p1RH').classList.add('cellSelection');                                                            
    };
    }
    player1Reselect();
} else if (p2selecter === true){
    if(limb === 'right hand'){
        var p2rhr = document.getElementById('p2rhr');
            p2rhr.play();
        document.getElementById('p2RH').innerHTML = color;
        var p2RH = document.getElementById('p2RH').innerHTML;
        sessionStorage.setItem('p2rhAction', `${p2RH}`);
        if(p2RH !== "" && p2RH !== "yellow"){
            document.getElementById('p2RH').style.backgroundColor = color;
            document.getElementById('p2RH').style.color = 'white';    
            document.getElementById('p2RH').classList.add('cellSelection');                                                            
        } else if(p2RH !== "" && p2RH === "yellow"){
            document.getElementById('p2RH').style.backgroundColor = color;
            document.getElementById('p2RH').style.color = 'black';    
            document.getElementById('p2RH').classList.add('cellSelection');                                                            
        };
        }
        player2Reselect();
} else if (p3selecter === true){
    if(limb === 'right hand'){
        var p3rhr = document.getElementById('p3rhr');
            p3rhr.play();
        document.getElementById('p3RH').innerHTML = color;
        var p3RH = document.getElementById('p3RH').innerHTML;
        sessionStorage.setItem('p3rhAction', `${p3RH}`);
        if(p3RH !== "" && p3RH !== "yellow"){
            document.getElementById('p3RH').style.backgroundColor = color;
            document.getElementById('p3RH').style.color = 'white';    
            document.getElementById('p3RH').classList.add('cellSelection');                                                            
        } else if(p3RH !== "" && p3RH === "yellow"){
            document.getElementById('p3RH').style.backgroundColor = color;
            document.getElementById('p3RH').style.color = 'black'; 
            document.getElementById('p3RH').classList.add('cellSelection');                                                            
        }
        }
        player3Reselect();
} else if(p4selecter === true){
    if(limb === 'right hand'){
        var p4rhr = document.getElementById('p4rhr');
            p4rhr.play();
        document.getElementById('p4RH').innerHTML = color;
        var p4RH = document.getElementById('p4RH').innerHTML;
        sessionStorage.setItem('p4rhAction', `${p4RH}`);
        if(p4RH !== "" && p4RH !== "yellow"){
            document.getElementById('p4RH').style.backgroundColor = color;
            document.getElementById('p4RH').style.color = 'white';   
            document.getElementById('p4RH').classList.add('cellSelection');                                                             
        } else if(p4RH !== "" && p4RH === "yellow"){
            document.getElementById('p4RH').style.backgroundColor = color;
            document.getElementById('p4RH').style.color = 'black'; 
            document.getElementById('p4RH').classList.add('cellSelection');                                                            
        }
        }
        player4Reselect();
};
};
setTimeout(() => {
    removeRotators();
    cellSelectionRemoval();
}, 5000)
setTimeout(() => {
    console.log('run2');
    spinIt();
}, 10000)
};



//master reset function
var reset = document.getElementById('reset');
reset.onclick = function masterReset(){
    var resetConfirm = confirm('Are you sure you want to reset all player names and stored instructions?')
    if(resetConfirm === true){
            sessionStorage.clear();
            window.location.reload();
        } else location.reload();
    
    };
};