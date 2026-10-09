const TOTAL=20, RATES={Carro:3000,Motocicleta:1500}, KEY='parkcontrol';
let vehicles=JSON.parse(localStorage.getItem(KEY)||'[]');
const $=id=>document.getElementById(id);
$('today').textContent=new Intl.DateTimeFormat('es-CO',{day:'2-digit',month:'short',year:'numeric'}).format(new Date());
const money=n=>new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);
const time=s=>new Intl.DateTimeFormat('es-CO',{hour:'2-digit',minute:'2-digit',day:'2-digit',month:'short'}).format(new Date(s));
function save(){localStorage.setItem(KEY,JSON.stringify(vehicles))}
function render(){
 $('total').textContent=TOTAL;$('occupied').textContent=vehicles.length;$('available').textContent=TOTAL-vehicles.length;
 const query=$('search').value.trim().toUpperCase(), found=vehicles.filter(v=>v.plate.includes(query));$('list').replaceChildren();$('empty').style.display=found.length?'none':'block';
 found.forEach(v=>{const tr=document.createElement('tr');[v.plate,v.type,time(v.entry)].forEach((value,i)=>{const td=document.createElement('td');td.textContent=value;if(i===0)td.className='plate';tr.appendChild(td)});
 const td=document.createElement('td'),b=document.createElement('button');b.className='exit';b.textContent='Registrar salida';b.onclick=()=>exitVehicle(v.id);td.appendChild(b);tr.appendChild(td);$('list').appendChild(tr)});
}
$('form').addEventListener('submit',e=>{e.preventDefault();const plate=$('plate').value.trim().toUpperCase().replace(/\s+/g,''),type=$('type').value;
 if(!/^[A-Z0-9-]{4,10}$/.test(plate))return $('message').textContent='Ingresa una placa válida de 4 a 10 caracteres.';
 if(vehicles.some(v=>v.plate===plate))return $('message').textContent='Esta placa ya está registrada.';
 if(vehicles.length>=TOTAL)return $('message').textContent='El parqueadero está lleno.';
 vehicles.push({id:Date.now().toString()+Math.random(),plate,type,entry:new Date().toISOString()});save();render();e.target.reset();$('message').textContent='Ingreso registrado correctamente.';});
function exitVehicle(id){const v=vehicles.find(x=>x.id===id);if(!v)return;const hours=Math.max(1,Math.ceil((Date.now()-new Date(v.entry).getTime())/3600000)),total=hours*RATES[v.type];
 vehicles=vehicles.filter(x=>x.id!==id);save();render();$('details').innerHTML=`Placa <strong>${v.plate}</strong><br>Tipo <strong>${v.type}</strong><br>Ingreso <strong>${time(v.entry)}</strong><br>Horas cobradas <strong>${hours}</strong><br>Total a pagar <strong>${money(total)}</strong>`;$('receipt').showModal();}
$('search').addEventListener('input',render);$('close').onclick=()=>$('receipt').close();render();