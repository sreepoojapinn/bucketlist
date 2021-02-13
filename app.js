var bucketlist=[];

var listItem=document.getElementById("list-container")

function addValues(){
    let value=document.getElementById("input-field").value
    bucketlist.push(value)
    showList();

}

function reset(){
    bucketlist=[];
    showList();

}

function showList(){
    listItem.innerHTML=""
    for(let i=0;i<bucketlist.length;i++){
        let li= document.createElement("li")
    li.innerHTML= bucketlist[i] +  
    `
    <span>
    <img src="https://i1.faceprep.in/tick-mark.png" class="checked" onclick="remove(`+i+`)">
    
    
    </span>
    `
    li.className= "list"
    listItem.appendChild(li)

    }
   
}
function remove(i){
    bucketlist.splice(i,1)
    showList();
}