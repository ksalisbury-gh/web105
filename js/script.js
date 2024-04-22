function myFunction() {
    var x = document.getElementById("myDIV");
    var y = document.getElementsByName("employment");

    switch(y.id) {
        case "employed_pt":
            x.innerHTML = '<label for="jobtitle">Job Title:</label><br><input type="text" id="jobtitle" name="jobtitle"><br><label for="employer">Employer:</label><br><input type="text" id="employer" name="employer"><br>';
            break;
        case "employed_ft":
            x.innerHTML = '<label for="jobtitle">Job Title:</label><br><input type="text" id="jobtitle" name="jobtitle"><br><label for="employer">Employer:</label><br><input type="text" id="employer" name="employer"><br>';
            break;
        case "internship":
            x.innerHTML = '<label for="jobtitle">Job Title:</label><br><input type="text" id="jobtitle" name="jobtitle"><br><label for="employer">Employer:</label><br><input type="text" id="employer" name="employer"><br>';
            break;
        default:
            x.innerHTML = "";
    }
}