
    $( document ).ready(function() {
       
    var students = JSON.parse(localStorage.getItem("students"));
    var openTr='';
    console.log(students)

    
    for(k=0;k<students.length;k++){
        openTr += '<tr>';
        openTr +='<td>' + (k+1) + '</td>';
        openTr +='<td>' + students[k].name + '</td>';
        openTr +='<td>' + students[k].reg + '</td>';
        
        var subs = students[k].subjects;
        var sum=parseInt(0);
        for( i=0; i<subs.length; i++) {
          sum += parseInt(subs[i].markScored);
        }
        var percent = sum / subs.length;
        openTr +='<td>' + percent + '</td>';
        openTr += '<td><button data-id=' + students[k].reg+ ' class="edit" >Edit</button></td>';
        openTr += '</tr>'

        // $('button.edit').click(function() {
        //   //  populateTable(students[k].subjects)
        //   //  window.location = "./index.html";
        // //   console.log('hi')
        // alert("pop");

        // });
        
        }
        $('#netMarks').append(openTr);

        
    $(document).on('click','.edit' , function() {
      //  populateTable(students[k].subjects)
       window.location = "./index.html?edit=" + $(this).data("id");
    });

    });



