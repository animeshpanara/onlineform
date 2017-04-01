
function create_table()
{
    document.getElementById('ctbutton').disabled=true;
    var num_rows = document.getElementById('rows').value;
    num_cols=13;
    var table=document.getElementById('table');
    var x = document.getElementById('wrapper');
    x.appendChild(populateTable(table, num_rows, num_cols, "text"));
}

function populateTable(table, rows, cells, content) 
{
    if (!table) table = document.createElement('table');
    tableHeaders(table,rows,cells,content);
    for (var i = 0; i < rows; ++i) {
        var row = document.createElement('tr');
        for (var j = 0; j < cells; ++j) {
            cell=document.createElement('td');
            element=create_element(i,j);
            cell.appendChild(element);
            row.appendChild(cell);
            //rows.cells[j].stle.columnwidth=cellwidths[j];
            //row.cells[j].appendChild(x);            
        }
        table.appendChild(row);
    }
    table.border=1;
return table;
}
function tableHeaders(table, rows, cells, content)
{   
    //cellwidths=["20px","150px","30px","60px","100px","20px","150px","150px","150px"];
    cellwidths=["auto","auto","auto","auto","auto","200px","auto","auto","auto","auto","auto","auto","auto"];
    tableheads=["SrNo","Name","DOB","Relation with head of family","Bg","Gender","Married","Education","Occupation","Occupational Address","MaternalSurname & village","PhoneNumber","Res.Address"];
    var row = document.createElement('tr');
        for (var j = 0; j < cells; ++j) {
            cell=document.createElement('th');
            x=document.createTextNode(tableheads[j]);
            cell.appendChild(x);
             cell.style.width=cellwidths[j];
            row.appendChild(cell);
        }
        table.appendChild(row);
}
function create_element(i,j)
{   
    //cellwidths=["auto","auto","40px","auto","auto","auto","auto","auto","auto",];
    switch(j)
    {
        case 0:
            y=document.createTextNode(i+1);
            y.name=i+','+j;
            y.id=i+','+j;
            y.className='Srno';
            //y.type="text";

            break;
        case 1:
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.type="text";
            y.className='Name';
            y.required=true;
            //y.style.width=cellwidths[j];
            break;
        case 2:
            
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.type="date";
            y.className='datepicker';
            //y.style.width=cellwidths[j];
            break;
        case 3:
    		y=document.createElement('select');
            y.name=i+','+j;
            y.id=i+','+j;
            y.className='relation';
            options=["wife","husband","Self","Daughter","Son","Father","Mother","Brother","Sister"];
            for (var i =0; i< options.length; i++) {
                y.appendChild(new Option(options[i],options[i]));
            }
    		break;
        case 4:
            y=document.createElement('select');
            y.name=i+','+j;
            y.id=i+','+j;
            y.className='BG';
            options=["A+ve","AB+ve","B+ve","O+ve","A-ve","AB-ve","B-ve","O-ve"];
            for (var i =0; i< options.length; i++) {
                y.appendChild(new Option(options[i],options[i]));
            }
			//y.style.width=cellwidths[j];
            break;
        case 5:
            y=document.createElement('span');
            y.className="span";
            br=document.createElement('br');
            txt1=document.createTextNode('M');
            x=document.createElement('input');
            x.name=i+','+j;
            x.type='radio';
            x.checked=true;
            x.value='M';
            x.id=i+','+j+','+0;
            x.className='rad';
            y.appendChild(x);
            y.appendChild(txt1);
            y.appendChild(br);
            txt2=document.createTextNode('F');
            x=document.createElement('input');
            x.name=i+','+j;
            x.type='radio';
            x.id=i+','+j+','+1;
            x.value='F';
            x.className='rad';
            y.appendChild(x);
            y.appendChild(txt2);
           // y.appendChild(br);
            y.className='Gender'       
            //y.style.width=cellwidths[j];
            break;
        case 6:
            y=document.createElement('input');
            y.type='checkbox';
            y.name=i+','+j;
            y.id=i+','+j;
            y.className='Checkboxes';
            y.value=1;
            //y.style.width=cellwidths[j];
            break;
        case 7:
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.type="text";
            y.className='Education';
            y.required=true;
            //y.style.width=cellwidths[j];
            break;
        case 8:
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.type="text";
            y.className='Occupation';
            y.required=true;
            //y.style.width=cellwidths[j];
            break;
        case 9:
    		y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.className="OccupationalAddress";
            y.type="text";
            y.required=true;
    		break;  
    	case 10:
    		y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.className="MaternalSurname";
            y.type="text";
            y.required=true;
    		break;
    	 case 11:
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.className="phonenumber";
            y.type="number";
            y.length=10;
            y.min=1000000000;
            y.max=9999999999;
            y.required=true;
            //y.style.width=cellwidths[j];
            break;
        case 12:
            y=document.createElement('input');
            y.name=i+','+j;
            y.id=i+','+j;
            y.className="Address";
            y.type="text";
            y.required=true;
            //y.style.width=cellwidths[j];
            break;    
    	
    			
    }
    return y;
}
function getvalues()
{
    var num_rows = document.getElementById('rows').value;
    var num_cols = document.getElementById('cols').value;
    var y='';
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