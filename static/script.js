async function insertData(){
const timestamp=document.getElementById("timestamp").value;
const value=document.getElementById("value").value;
const r=await fetch("/api/insert",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({timestamp,value})});
const d=await r.json();
const el=document.getElementById("insertResult");
el.textContent=d.error||"Data inserted successfully";
el.className=d.error?"error":"success";
if(!d.error){document.getElementById("timestamp").value="";document.getElementById("value").value="";loadData();}
}
async function analyze(){
const start=document.getElementById("start").value;
const end=document.getElementById("end").value;
const r=await fetch(`/api/stats?start=${start}&end=${end}`);
const d=await r.json();
if(d.error){document.getElementById("stats").innerHTML=`<p class="error">${d.error}</p>`;return}
document.getElementById("stats").innerHTML=`<div class="card"><b>Count</b><br>${d.count}</div><div class="card"><b>Average</b><br>${d.average}</div><div class="card"><b>Minimum</b><br>${d.min??"None"}</div><div class="card"><b>Maximum</b><br>${d.max??"None"}</div>`;
const q=await fetch(`/api/query?start=${start}&end=${end}`);
const values=await q.json();
document.getElementById("queryResult").innerHTML=`<h3>Values</h3><pre>${JSON.stringify(values.values,null,2)}</pre>`;
}
async function loadData(){
const r=await fetch("/api/export");
const d=await r.json();
document.getElementById("data").innerHTML=`<pre>${JSON.stringify(d,null,2)}</pre>`;
}
async function downloadData(){
const r=await fetch("/api/export");
const d=await r.json();
const blob=new Blob([JSON.stringify(d,null,2)],{type:"application/json"});
const a=document.createElement("a");
a.href=URL.createObjectURL(blob);
a.download="time_series_data.json";
a.click();
URL.revokeObjectURL(a.href);
}
async function resetData(){
await fetch("/api/reset",{method:"POST"});
document.getElementById("stats").innerHTML="";
document.getElementById("queryResult").innerHTML="";
loadData();
}
loadData();
