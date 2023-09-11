let n = 0;

function addRow(){
  let table = document.getElementsByTagName('table')[0];
  let tr = document.createElement('TR');
  let td1 = document.createElement('TD');
  let td2 = document.createElement('TD');
  let td3 = document.createElement('TD');
  let new_name = document.createElement('p');
  let new_email = document.createElement('p');
  new_name.textContent = 'Name ' + n;
  new_email.textContent = 'Email ' + n;

  let img = document.createElement('IMG');
  img.setAttribute('src', 'delete.jpg');
  img.setAttribute('width', '10%');
  img.onclick = function() {
        removeContact(tr);
      }
  table.appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  td1.appendChild(new_name);
  td2.appendChild(new_email);
  td3.appendChild(img);
  n ++;

}

function removeContact(tr) {
  tr.parentNode.removeChild(tr);
}
