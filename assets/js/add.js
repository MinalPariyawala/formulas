function setIndex() {
    $("td.index").each(function (index) {
        $(this).text(++index);
    });
}

function addRows() {
    var table = document.getElementById('emptbl');
    var rowCount = table.rows.length;
    var cellCount = table.rows[0].cells.length;
    var row = table.insertRow(rowCount);
    console.log('row :>> ', row);
    console.log('row :>> ', cellCount);
    for (var i = 0; i < cellCount; i++) {
        var cell = 'cell' + i;
        cell = row.insertCell(i);

        // var cell2 = row.insertCell(0);
        // cell2.innerHTML = rowCount + 1;

        var copycel = document.getElementById('col' + i).innerHTML;
        console.log('copycel :>> ', copycel);
        cell.innerHTML = copycel;
    }
}


function deleteRows() {
    var table = document.getElementById('emptbl');
    var rowCount = table.rows.length;
    if (rowCount > '2') {
        var row = table.deleteRow(rowCount - 1);
        rowCount--;
    }
    else {
        alert('There should be atleast one row');
    }
}

function getData(form) {
    var formData = new FormData(form);
    let formulas = [];

    formData.forEach((value) => {
        console.log(value);
        if (value !== "") {
            formulas.push({ value });
        }
    });
    console.log('formulas :>> ', formulas);

    // for (var pair of formData.entries()) {
    //     console.log(pair[0] + ": " + pair[1]);
    // }

    // console.log(Object.fromEntries(formData));
}

document.getElementById("equForm").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
});
