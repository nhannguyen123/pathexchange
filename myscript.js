function testResults (form) {
    var TestVar = form.inputbox.value;
    alert ("You typed: " + TestVar);
}
function convert_path_Win2Linux(form){
	var OldPath = form.inputbox.value;
	var NewPath = OldPath.replace(/\\/g, "/");
	var returnedObject = {};
	returnedObject["OldPath"] = OldPath;
	returnedObject["NewPath"] = NewPath;
	form.inputbox.value = NewPath;
	return returnedObject;
}
function convert_path_Linux2Win(form){
	var OldPath = form.inputbox.value;
	var NewPath = OldPath.replace(/\//g, "\\");
	var returnedObject = {};
	returnedObject["OldPath"] = OldPath;
	returnedObject["NewPath"] = NewPath;
	form.inputbox.value = NewPath;
	return returnedObject;
}
