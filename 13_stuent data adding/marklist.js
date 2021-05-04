var students;

$( document ).ready(function() {
    if(localStorage.getItem('students')==null || localStorage.getItem('students')==undefined){
        students = [];
    } else {
       students = JSON.parse(localStorage.getItem('students'))
    }
    
    
    var url_string = window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("edit");
    console.log(c);
    if(c) {
        const editElement = students.find(e => e.reg == c );  
        console.log("edit element is : ", editElement);
        prefillStudentDetails(editElement)
        editTable(editElement, editElement.subjects);
    }


    $(document).on('input','.editMark' , function() {
       var changedVal = $(this).val();
       var editElement  = $(this).data("element");
       var changedIndex = $(this).data("index")


       editElement.subjects[changedIndex].markScored=changedVal;
      console.log('edit element is : ' , editElement)
       let temp = students.filter(function (e) {
        return e.reg != editElement.reg;
    });
    temp.push(editElement)
       students = temp;
       localStorage.setItem('students', JSON.stringify(students));
      });

      
});

    function addInfo() {
        var regKey =  $("#reg").val();
        var sub = {
            subject : $("#subject").val(),
            maxMark : $("#maxMark").val(),
            markScored :$("#markScored").val()
        }
        if(students == null ){
            students = []
        }
        const element = students!=null && students.find(e => e.reg == regKey );  
        if(element){
            element.subjects.push(sub);
            populateTable(element.subjects)
         } else {
            var subjects = [];
            subjects.push(sub);
            var myObj = {
                reg : regKey,
                name : $("#name").val(),
                class: $("#stuClass").val(),
                email: $("#email").val(),
                schoolname :$("#schoolname").val(),
                city: $("#city").val(),
                subjects: subjects
            }
            students.push(myObj);
            populateTable(subjects);
         }
         console.log(students)
         localStorage.setItem('students', JSON.stringify(students));
        }

        function populateTable(subjects) {
            var openTr = '';
            $("#myMarks tr").detach();
            for(k=0;k<subjects.length;k++){
                openTr += '<tr>'
                openTr += '<td>' + (k+1) + '</td>';
                openTr += '<td>' + subjects[k].subject + '</td>';
                openTr += '<td>' + subjects[k].maxMark+ '</td>';
                openTr += '<td>' + subjects[k].markScored + '</td>';
                openTr += '<td>' + (subjects[k].markScored /subjects[k].maxMark) * 100 + '</td>';
                openTr += '</tr>'
            }
           
        
        
            $('#myMarks').append(openTr);        
            $("#subject").val(null);
            $("#maxMark").val(null);
            $("#markScored").val(null);
        }
   

function editTable(editElement, subjects) {
    var openTr = '';
    $("#myMarks tr").detach();
    for( k=0;k<subjects.length;k++){
        openTr += '<tr>'
        openTr += '<td>' + (k+1) + '</td>';
        openTr += '<td>' + subjects[k].subject + '</td>';
        openTr += '<td>' + subjects[k].maxMark+ '</td>';
        openTr += '<td><input data-element=' + JSON.stringify(editElement) + ' data-index=' + k + ' class="editMark" type="number" value=' + subjects[k].markScored + ' /></td>';
        openTr += '<td>' + (subjects[k].markScored /subjects[k].maxMark) * 100 + '</td>';
        openTr += '</tr>'    
    }
    $('#myMarks').append(openTr);        
    $("#subject").val(null);
    $("#maxMark").val(null);
    $("#markScored").val(null);
}
function submitMarks() {
    window.location = "./submitform.html";
}

function prefillStudentDetails ( editElement ){
    $("#reg").val(editElement.reg);
    $("#name").val(editElement.name)
    $("#stuClass").val(editElement.class)
    $("#email").val(editElement.email)
    $("#schoolname").val(editElement.schoolname)
    $("#city").val(editElement.city)
}