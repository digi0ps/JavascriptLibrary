/* 
 # Attach this .js file to your script src 
 # This js has two functions : Create Table, Post contents from the created table
 # Create function takes input from you and creates Rows and Columns accordingly
 # Post Function collects input from the created table and prints it onscreen
 # No Style has been added except for Padding of one p-class
 
 
 
 
 
 
 */
var rows, cells, total;

document.write("<input type='text' id='rowInp' maxlength='2' size='2' value=" + 5 + " />");
document.write("<input type='text' id='cellInp' maxlength='2' size='2' value=" + 5 + " />");
document.write("<br /> <button onClick='create();'> Create Table </button>");

function create(){
rows = document.getElementById("rowInp").value;
cells = document.getElementById("cellInp").value;
var totalcell = 1;
document.write("<table border='3' '>");
for(a=1;a<=rows;a++){
document.write("<tr>");
for(b=1;b<=cells;b++){
document.write("<td id='tabledata'><p class='paratext' id=para" + totalcell + " class='textPara' ><input type='text' class='dataInput' id=input" + totalcell + " value=val" + totalcell + "></p> </td>");
totalcell++
}
document.write("</tr>");
}
document.write("</table>");
document.write("<button onClick='post();' value='Post the Content' > Post The Content </button>");
}

function post(){
total = rows*cells;
for(z=1;z<=total;z++){
document.getElementById("para" + z).innerHTML=document.getElementById("input" + z).value;
document.getElementById("para" + z).style.padding="10px";
}
}


