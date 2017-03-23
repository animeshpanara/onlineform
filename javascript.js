
function populateTable(table, rows, cells, content) 
{
    if (!table) table = document.createElement('table');

    for (var i = 0; i < rows; ++i) {
        var row = document.createElement('tr');
        for (var j = 0; j < cells; ++j) {
            row.appendChild(document.createElement('td'));
            var x=document.createElement('input');
            x.name =i+','+j;
            x.id=i+','+j;
            x.type="text";
            row.cells[j].border="0";
            row.cells[j].appendChild(x);
        }
        table.appendChild(row);
    }
   table.border=1;
    return table;
}
function create_element(i,j)
{
    switch(j)
    {
        case 0:
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.type="text";
            break;
        case 1:
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.type="text";
            break;
        case 2:
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.type="number";
            break;
        case 3:
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.type='radio'
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.type="text";
            break;
        case 7:
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.type="text";
            break;
        case 8:
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.type="text";
            break;    
    }
}
function create_table()
{
 
    var num_rows = document.getElementById('rows').value;
    var num_cols = document.getElementById('cols').value;
    var x = document.getElementById('wrapper');
    x.appendChild(populateTable(null, num_rows, num_cols, "text"));

}
function getvalues()
{
    var num_rows = document.getElementById('rows').value;
    var num_cols = document.getElementById('cols').value;
    //alert(num_cols);
    //alert(num_rows);
    var y='';
    var z='';
    for (var i = num_rows - 1; i >= 0; i--) {
        for (var j = num_cols - 1; j >= 0; j--) 
        { 
            y += document.getElementById(i+','+j).value+';';      
        }
    }
    y=y.split(';');
    document.getElementById('wrapper2').innerHTML=y; 
}
    
function createTable()
{
    var num_rows = document.getElementById('rows').value;
    var num_cols = document.getElementById('cols').value;
    var theader = '<table border="4">\n';
    var tbody = '';

    for( var i=0; i<num_rows;i++)
    {
        tbody += '<tr>';
        for( var j=0; j<num_cols;j++)
        {
            tbody += '<td>';
            tbody += '<input type="text" name="table" id='+i+','+j+'></input>';
            tbody += '</td>'
        }
        tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
}