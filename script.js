const textareaEl = document.querySelector("textarea"),
  fileNameInputEl = document.querySelector(".file-name input"),
  selectMenu = document.querySelector(".save-as select"),
  saveBtn = document.querySelector(".save-btn");

    selectMenu.addEventListener("change", ()=> {
        let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
        saveBtn.innerText = `Save as ${selectedOption.split(" ")[0]} file`
        
    })

  saveBtn.addEventListener("click", ()=> {
    const blob = new Blob([textareaEl.value], {type: selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    
    link.download = fileNameInputEl.value;
    link.href = fileUrl;
    link.click();
  })
