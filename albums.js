var albums = JSON.parse(newAlbumsAsJSON);

function displayAll() {
  var table = document.getElementById("hitsTable");
  for (var i = 0; i < albums.length; i++) {
    var albumNew = albums[i];
    var tr = document.createElement("tr");
    var addCell = function(text) {
      var td = document.createElement("td");
      var txt = document.createTextNode(text);
      td.appendChild(txt);
      tr.appendChild(td);
    }
    addCell(albumNew.year);
    addCell(albumNew.artist);
    addCell(albumNew.nationality);
    addCell(albumNew.album);
    table.appendChild(tr);
  }
}

function displayBySelection() {
  var table = document.getElementById("hitsTable");
  for (var i = 0; i < albums.length; i++) {
    if (parseInt(document.getElementById("selectYear").value) == albums[i].year && document.getElementById("selectCountry").value == albums[i].nationality) {
      var albumNew = albums[i];
      var tr = document.createElement("tr");
      var addCell = function(text) {
        var td = document.createElement("td");
        var txt = document.createTextNode(text);
        td.appendChild(txt);
        tr.appendChild(td);
      }
      addCell(albumNew.year);
      addCell(albumNew.artist);
      addCell(albumNew.nationality);
      addCell(albumNew.album);
      table.appendChild(tr);
    } else if (document.getElementById("selectYear").value == "All" && document.getElementById("selectCountry").value == albums[i].nationality) {
      var albumNew = albums[i];
      var tr = document.createElement("tr");
      var addCell = function(text) {
        var td = document.createElement("td");
        var txt = document.createTextNode(text);
        td.appendChild(txt);
        tr.appendChild(td);
      }
      addCell(albumNew.year);
      addCell(albumNew.artist);
      addCell(albumNew.nationality);
      addCell(albumNew.album);
      table.appendChild(tr);
    } else if (parseInt(document.getElementById("selectYear").value) == albums[i].year && document.getElementById("selectCountry").value == "All") {
      var albumNew = albums[i];
      var tr = document.createElement("tr");
      var addCell = function(text) {
        var td = document.createElement("td");
        var txt = document.createTextNode(text);
        td.appendChild(txt);
        tr.appendChild(td);
      }
      addCell(albumNew.year);
      addCell(albumNew.artist);
      addCell(albumNew.nationality);
      addCell(albumNew.album);
      table.appendChild(tr);
    } 
  }
};

function surprise() {
  var surprise = document.getElementById("surprise");
  var noSurprise = document.getElementById("noSurprise");
  if (surprise.value == "Y") {
    noSurprise.style.display = "block";
  } else {
    noSurprise.style.display = "none";
  }
}

function userSelection() {
  deleteAll();
  var table = document.getElementById("selectYear");
  var table2 = document.getElementById("selectCountry");
  if (table.options[table.selectedIndex].value == "All" && table2.options[table2.selectedIndex].value == "All") {
    surprise();
    displayAll();
  } else {
    surprise();
    displayBySelection();
  }
}


function initialize() {
  document.getElementById("click").onclick = userSelection;
}


function deleteAll() {
  var tableRef = document.getElementById('hitsTable');
  var rowCount = tableRef.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
    tableRef.deleteRow(i);
  }
}

window.onload = initialize;
