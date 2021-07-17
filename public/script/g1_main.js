//let player_id=[0,1,2,3]
//let list = [1,2,3,4]
//let myind=0


function callback(myind,list,cul_arr,score){
    window.alert("Round Start!");
    document.getElementById("for_police").style.display = "none"

//list = list.sort(() => Math.random() - 0.5)
if(list[myind]==1){
    var result="You are King. Got 1000 points!<br>"
    troop=list.indexOf(3);
    result+="Player "+troop+" is troop"
    document.getElementById("role").innerHTML=result;
}
else if(list[myind]==2){
    var result="You are a Minister. Wait till troop take decision!<br>"
    troop=list.indexOf(3);
    result+="Player "+troop+" is troop<br>"
    king=list.indexOf(1);
    result+="Player "+king+" is king"
    document.getElementById("role").innerHTML=result;

}
else if(list[myind]==3){
    document.getElementById("for_police").style.display = "block"
    tem_arr=[list.indexOf(2),list.indexOf(4)];
    tem_arr = tem_arr.sort(() => Math.random() - 0.5);
    cul_arr[0]=tem_arr[0];
    cul_arr[1]=tem_arr[1];
    
    king=list.indexOf(1);
    result="Player "+king+" is king<br>"
    result+="You are troop. Let's find the theif among Player"+cul_arr[0]+' '+'Player '+cul_arr[1]+'<br>';
    document.getElementById("role").innerHTML=result;
    document.getElementById("cul1").innerHTML=cul_arr[0];
    document.getElementById("cul2").innerHTML=cul_arr[1];
}
else if(list[myind]==4){
    var result="You are a theif. keep silent and wait till troop take decision!<br>"
    troop=list.indexOf(3);
    result+="Player "+troop+" is troop<br>"
    king=list.indexOf(1);
    result+="Player "+king+" is king"
    document.getElementById("role").innerHTML=result;
}

  
if(score){
    x=document.getElementById('s0');
    x.innerHTML=Number(x.innerHTML)+Number(score[0]);
    x=document.getElementById('s1');
    x.innerHTML=Number(x.innerHTML)+Number(score[1]);
    x=document.getElementById('s2');
    x.innerHTML=Number(x.innerHTML)+Number(score[2]);
    x=document.getElementById('s3')
    x.innerHTML=Number(x.innerHTML)+Number(score[3]);;}
else {
    document.getElementById('s0').innerHTML=0;
    document.getElementById('s1').innerHTML=0;
    document.getElementById('s2').innerHTML=0;
    document.getElementById('s3').innerHTML=0;}
}

function show_result(xx,list,cul_arr) {
    point=[0,0,0,0]
    for (i=0;i<4;i++){
        if(list[i]==1){
            point[i]=1000;
        }
        else if(list[i]==2){
            point[i]=800;
        }
    }
    if(list[cul_arr[xx]]==4){
        point[cul_arr[xx]]=0;
        point[myind]=500;
        alert("Correct Guess!");
    }
    else {
        point[cul_arr[Math.abs(xx-1)]]=500;
        point[myind]=0;
        alert("Your guess is wrong!")
    }
   socket.emit('next_round',{score:point});

}

function assign(l1,l2){
    for (i=0;i<4;i++){
        l1[i]=l2[i];
    }
}