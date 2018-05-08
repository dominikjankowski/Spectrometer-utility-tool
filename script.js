var input = document.querySelector('input');
var preview = document.querySelector('.preview');

input.addEventListener('change', updateFunctionDisplay);
 
function updateFunctionDisplay() {
    
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  var curFiles = input.files;
  if(curFiles.length === 0) {
    var para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    preview.appendChild(para);
  } else {
    var list = document.createElement('p');
    for(var i = 0; i < curFiles.length; i++) {
     
      if(validFileType(curFiles[i])) {
        list.textContent = 'File name ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.';
      } else {
        list.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
      }
       preview.appendChild(list);

    }
  }
}



function validFileType(file){
    if(file.name.indexOf(".csv") > (file.name.length-5)){
        return true;
    }else{
        return false;
    }
};


function returnFileSize(number) {
  if(number < 1024) {
    return number + 'bytes';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + 'KB';
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + 'MB';
  }
}

