const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  //* check if the had the shift key down
  //* and check that they are checking
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //* go ahead and do what we please
    //* loop over every single checkbox
    checkboxes.forEach((checkbox) => {
        console.log(checkbox)
        if(checkbox ===  this || checkbox === lastChecked){
            inBetween = !inBetween;
            // console.log("starting to check them");
        }
        if(inBetween){
            checkbox.checked = true;
        }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
