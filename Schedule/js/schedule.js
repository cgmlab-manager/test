var parameter = new URLQueryParameter();
var year = Number(parameter.get("year"));
var number = startNumber;
var leap = false;
var monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    leap = true;
}
var meetDateArray = [];
var evenDate = [];
var oddDate = [];
var firstWeek = true;
var preMonth = 1;
for (var month = 0; month < 12; month++) {
    var day = monthDay[month];
    firstWeek = true;
    if (month == 1 && leap) {
        day = 29;
    }
    for (var i = 0; i < day; i++) {
        var date = new Date(year, month, i + 1)
        var week = date.getDay();
        if (week == 4) {
            var index = date.toLocaleDateString("en-US").lastIndexOf("/");
            var meetDate = date.toLocaleDateString("en-US").substring(0, index);
            meetDateArray.push(meetDate);
            if(firstWeek){
               if((month+1)%2 ==0){
                evenDate.push(meetDate);
               }else{
                oddDate.push(meetDate);
               }
               firstWeek = false;
            }
        }
    }

}



var titleRow = `<tr>
<td width="40" bgcolor="#666666">
    <div align="center">
        <span class="Paper_Table_RightTitle">Date</span>
    </div>
</td>
<td width="50" bgcolor="#666666">
    <div align="center">
        <span class="Paper_Table_RightTitle">Topic</span>
    </div>
</td>
<td width="40" bgcolor="#666666">
    <div align="center"><span class="Paper_Table_RightTitle">Speaker</span></div>
</td>
<td width="680" bgcolor="#666666">
    <div align="left" class="Paper_Table_LeftTitle">Title</div>
</td>
</tr>`
var report = "";




var LinLab = true;
var YangLab = true;
var netNumber = 0;
var teacher = false;
var isNewStudentInsertEarly = false;
var multiStudent = false;
var numberOfMultiStudent = 0;
var multiStudentCount = 0;
var isSpecialTeacherTime = false;
var teacherTurn = false;
function getAbstractIndex(abstract){
    var bulletArray = ['5.','5-','05.','05-','05:'];
    var index = -1;
    for(var i = 0;i < bulletArray.length;i++){
        var bullet = bulletArray[i];
        if(abstract.lastIndexOf(bullet)!==-1){
            index = abstract.lastIndexOf(bullet);
            break;
        }
    }
    return index;
}
for(var i = 0; i < meetDateArray.length;i++){
    title = reportTitle[i];
    if(title != undefined){
        paper = title.paper;
        if(paper === "" && i!=0 ){
            index = getAbstractIndex(abstract);
            paper = abstract.substring(index+2);
        }
        abstract = title.abstract;
        if(abstract!=""){
            var abstractArray = abstract.split("\n");
            var abstractPlusbr = "";
            for(var j = 0; j < abstractArray.length; j++){
                var singleAbstract = abstractArray[j];
                abstractPlusbr += singleAbstract+"<br>";
            }
            abstract = abstractPlusbr;
        }
    }else{
        paper = "";
        abstract = "";
    }
  
    var meetDate = meetDateArray[i]
    var month = Number(meetDate.split("/")[0]);
    var day = Number(meetDate.split("/")[1]);
    var numberOfStudent = student.length;
    number = number%numberOfStudent;
  
    if(number == 0){
        isSpecialTeacherTime = false;
    }

    var abstractStudent = student[(number+1)%numberOfStudent]   
    var paperStudent = student[number];

    if(teacherDelayTime.get(meetDateArray[i+1])!=undefined){
        specialTeacherTime.set(meetDateArray[i+(teacherDelayTime.get(meetDateArray[i+1])+1)],"老師上課");
        student.splice(number+1,1);
        abstractStudent = student[(number+1)%numberOfStudent]
        paperStudent = student[number];
    }else if(teacherDelayTime.get(meetDateArray[i])!=undefined){
        student.splice(number,0,"老師上課");
        number++;
    }
 
    var nowDate = new Date(year,month,day);
    var graduateDateStr = graduate.get(abstractStudent);
   
    [abstractStudent,number,numberOfStudent] = checkStudentGraduate(graduateDateStr,nowDate,number,numberOfStudent,abstractStudent,student,0)
    
    if(isNewStudentInsertEarly){
        isNewStudentInsertEarly = false;
        student.splice(number,1);
        number = (number-1)%numberOfStudent;
        console.log("meetDate:"+meetDate);
        console.log(student);
    }else if(multiStudent){
        multiStudentCount++;
        if(numberOfMultiStudent==multiStudentCount){
            multiStudent=false;
            student.splice(number-numberOfMultiStudent,numberOfMultiStudent);
            number = (number-numberOfMultiStudent)%numberOfStudent;
        }

    }
    if(newStudentInsertEarly.get(meetDate)!=undefined){
        isNewStudentInsertEarly = true;
        var position = (number+1);
        var newStudentInsertEarlyArray = newStudentInsertEarly.get(meetDate).split(',');
       
        console.log(newStudentInsertEarlyArray)
        multiStudent = (newStudentInsertEarlyArray.length > 1) ? true:false;
        if(multiStudent) {
            numberOfMultiStudent = newStudentInsertEarlyArray.length;
             for(var j = 0;j<numberOfMultiStudent;j++){
                student.splice(number+(1+j),0,newStudentInsertEarlyArray[j]);
            }
        }else{
            student.splice(number+1,0,newStudentInsertEarly.get(meetDate));
        }
        abstractStudent = student[(number+1)%numberOfStudent]
        paperStudent = student[number%numberOfStudent];
       
       
    }
    
    
    var isSpecialHoliday = false;
  
   
    if(specialHoliday.get(meetDate)!=undefined){
        isSpecialHoliday = true;
    }
   
    if(specialTeacherTime.get(meetDate)!=undefined){
        isSpecialTeacherTime = true;
        teacher = true;
    }
   
    if(isSpecialHoliday){
        paperStudent = "X";
        abstractStudent = "X"
        paper = specialHoliday.get(meetDate)
        abstract =  specialHoliday.get(meetDate)
        var preDateMonth = 0;
        if(i!=0)
            preDateMonth = Number(meetDateArray[i-1].split("/")[0]);
        if(preDateMonth != month){
            if(month%2 == 0){
                LinLab = true

                // if (year === 2023 && month >= 9) {
                //     YangLab = true
                //     LinLab = false
                // }
            }else{                
                YangLab = true

                // if (year === 2023 && month >= 9) {
                //     YangLab = false
                //     LinLab = true
                // }
            }
        }
       
    }
    // else if((month%2 == 1 && meetDate == oddDate[parseInt(month/2)])||!LinLab){    
    else if((month%2 == 1 && meetDate == oddDate[parseInt(month/2)])){    
        if (year <= 2023 && month < 8) {
            paperStudent = "X";
            abstractStudent = "X"
            paper = "與林伯慎老師實驗室Meeting"
            abstract =  "與林伯慎老師實驗室Meeting"
            LinLab = true
        }
       
        if (year >= 2023 && month > 8) {
            paper = "與林伯慎老師實驗室Meeting(our turn)<br>" + paper;
            abstract =  "與林伯慎老師實驗室Meeting(our turn)<br>" +abstract;
            YangLab = true
        }
    }    
    else {
        // if(month%2 == 0 && meetDate == evenDate[month/2-1] || !YangLab){
        if(month%2 == 0 && meetDate == evenDate[month/2-1]){
            if (year <= 2023 && month < 8) {
                paper = "與林伯慎老師實驗室Meeting(our turn)<br>" + paper;
                abstract =  "與林伯慎老師實驗室Meeting(our turn)<br>" +abstract;
                YangLab = true
            }

            if (year >= 2023 && month > 8) {
                paperStudent = "X";
                abstractStudent = "X"
                paper = "與林伯慎老師實驗室Meeting"
                abstract =  "與林伯慎老師實驗室Meeting"
                LinLab = true
            }
        }
       
        if(teacher){
            
            paperStudent = "老師上課";
            abstractStudent = "老師上課"
            paper = "X";
            abstract =  "X";
            teacher = false;
            
        }else {
            
            number++;

                if(abstractStudent == "老師上課"){
                                 
                    abstractStudent = student[(number+1)%numberOfStudent]                
                    var graduateDateStr = graduate.get(abstractStudent);
                    [abstractStudent,number,numberOfStudent] = checkStudentGraduate(graduateDateStr,nowDate,number,numberOfStudent,abstractStudent,student,0)
                 
                    if(!isSpecialTeacherTime) teacher=true;
                    
                }else if(paperStudent == "老師上課"){

                    paperStudent = student[number%numberOfStudent];
                    
                    abstractStudent = student[(number+1)%numberOfStudent]
                    var graduateDateStr = graduate.get(abstractStudent);
                    [abstractStudent,number,numberOfStudent] = checkStudentGraduate(graduateDateStr,nowDate,number,numberOfStudent,abstractStudent,student,0)
                 
                    number++
                }
            
        }                
    }
        report = `<tr>
        <td rowspan="2" bgcolor="#FAF4EB">
            <div align="center">${meetDate}</div>
        </td>
        <td bgcolor="#FAF4EB">
            <div class="styleTopic" align="center">Paper</div>
        </td>
        <td bgcolor="#FAF4EB">
            <div class="styleSpeaker" align="center">
                <div align="center">${paperStudent}</div>
        </td>
        
        <td bgcolor="#FAF4EB">
            <div class="styleTitle" align="left">
                ${paper}
            </div>
        </td>
        </tr>
        <tr>
        <td bgcolor="#FAF4EB">
            <div class="styleTopic" align="center">Abstract</div>
        </td>
        <td bgcolor="#FAF4EB">
            <div class="styleSpeaker" align="center">
                <div align="center">${abstractStudent}</div>
        </td>
        <td bgcolor="#FAF4EB">
            <div class="styleTitle" align="left">
                ${abstract}
            </div>
        </td>
        </tr>`+report;
     
        for(var j = 0 ; j < newStudentArray.length;j++){
            var newStudent = newStudentArray[j]
            var newStudentDateArray = newStudent.date.split("/"); 
           
            var newStudentDate = new Date(year,newStudentDateArray[0],newStudentDateArray[1]);
            if(nowDate >= newStudentDate && !newStudent.addStatus && (number+1)%numberOfStudent !=0){
                student.push(newStudent.name);
                 newStudent.addStatus = true;
                number = number%numberOfStudent;
            }
        }
        nextNumber = number%numberOfStudent;
   
}

var tableButtom =`<tr>
<td height="6" colspan="4" bgcolor="#666666"></td>
</tr>
<tr>
<td colspan="4" bgcolor="#FFFFFF">
    <div align="right">NTUST Computer Graphics Multimedia Lab </div>
</td>
</tr>`
document.write(titleRow + report + tableButtom);

var pageButton="";
var nowYear = new Date().getFullYear();
console.log(year, nowYear);


// The Next 下一年
if(year !== nowYear){
    // pageButton = `	<area shape="rect" coords="673,130,744,147" href="Schedule.htm?year=${year+1}" target="_self" />`
    pageButton = `	<area shape="rect" coords="673,130,744,147" href="Schedule2023.htm" target="_self" />`
}else if(year === nowYear){
    pageButton = `	<area shape="rect" coords="673,130,744,147"  target="_self" />`
}
// The Past 上一年
if(year != 2023){
    pageButton+=`<area shape="rect" coords="753,130,823,147" href="Schedule2021.htm" target="_self" />`
} else if(year == 2023){
    pageButton+=`<area shape="rect" coords="753,130,823,147" href="Schedule.htm?year=${year-1}" target="_self" />`   
}

document.getElementById("Map").innerHTML = pageButton;

var titleImage = `Title${year}.png`
var ImgObj=new Image();
ImgObj.src= titleImage;
ImgObj.onload=function(){
    document.getElementById("titleImage").setAttribute("src",titleImage);
}
ImgObj.onerror=function(){
    document.getElementById("SeminarText").innerHTML =year+" Seminar Schedule";
}
// if(ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0))
// {
//     document.getElementById("titleImage").setAttribute("src",titleImage);
// }else{
//     document.getElementById("SeminarText").innerHTML =year+" Seminar Schedule";
// }



//畢業生處理(更新陣列)
function checkStudentGraduate(graduateDateStr,nowDate,number,numberOfStudent,abstractStudent,student,i){
    
    if(graduateDateStr !=undefined){
        var graduateDate = new Date(year,graduateDateStr.split("/")[0],graduateDateStr.split("/")[1]);     
        if(graduateDate.getTime() <= nowDate.getTime()){
            i=i+1;   
            console.log((number+1)%numberOfStudent)
            console.log("==============")
            console.log((number+1)%numberOfStudent)
            student.splice((number+1)%numberOfStudent,1);   
            if(numberOfStudent <= (number+1))
                number--;  
              
            numberOfStudent = student.length;  
                    
            abstractStudent = student[(number+1)%numberOfStudent]
         
            graduateDateStr = graduate.get(abstractStudent);
            [abstractStudent,number,numberOfStudent] =checkStudentGraduate(graduateDateStr,nowDate,number,numberOfStudent,abstractStudent,student,i)
            
        } 
    }
  
    return [abstractStudent,number,numberOfStudent];
}