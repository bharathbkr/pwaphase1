function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  console.log(xhr);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
}
xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  education(data.education);
  skills(data.skills);

})
var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);
  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);
  var h3=document.createElement("h3");
  h3.textContent=p.designation;
  left.append(h3);
  var h4=document.createElement("h4");
  h4.textContent=p.mobile;
  left.append(h4);
  var h5=document.createElement("h5");
  h5.textContent=p.email;
  left.append(h5);
}
var right=document.querySelector(".right");
function career(ca){
  var h1=document.createElement("h1");
  h1.textContent="career objective";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);
  var h2=document.createElement("h2");
  h2.textContent=ca.info;
  right.append(h2);
  }
  // Education Details
  function education(edu){
    var h1=document.createElement("h1");
    h1.textContent="Education Details";
    right.append(h1);

    var hr=document.createElement("hr");
    right.append(hr);

    var table=document.createElement("table");
    //table.border="2";
    right.append(table);
    var tr1="<tr><th>institute</th><th>qualification</th><th>percentage</th><th>yearofpassing</th></tr>";
    var tr2=" ";
    for(i=0;i<edu.length;i++)
    {
      tr2=tr2+"<tr><td>"+edu[i].institute+"</td><td>"+edu[i].qualification+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].yearofpassing+"</td></tr>";
    }
    table.innerHTML=tr1+tr2;
    right.append(table);
}
//skills

function skills(sk){
  var h1=document.createElement("h1");
  h1.textContent="skills";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);
  var ul=document.createElement("ul");
  for(var i in sk){
    var li=document.createElement("li");
    li.innerHTML=sk[i].name+":"+sk[i].info;
    ul.append(li);
  }
  right.append(ul);


}
