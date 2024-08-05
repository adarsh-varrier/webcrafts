function check() {
    let name = document.frm.Sname.value;
    if (name === "") {
      alert("Enter name!");
      return false;
    }
  
    var checkboxes = document.getElementsByName('options');
    var isChecked = false;
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        isChecked = true;
        break;
      }
    }
    if (!isChecked) {
      alert("Select at least one social media for communication!");
      return false;
    }
  
    var radioboxes = document.getElementsByName('gen');
    var isGenderSelected = false;
    for (let i = 0; i < radioboxes.length; i++) {
      if (radioboxes[i].checked) {
        isGenderSelected = true;
        break;
      }
    }
    if (!isGenderSelected) {
      alert("Please select a gender!");
      return false;
    }
  
    return true;
  }
  