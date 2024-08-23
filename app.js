function app() {
  //Get DOM variables and listener
  const cardRequest = document.getElementById("cardRequest");
  const formNode = document.getElementById("myForm");
  const labelCollection = document.getElementsByClassName("labelRadio");
  const inputCollection = document.getElementsByClassName("inputRadio");
  const submitButton = document.getElementById("submitForm");
  const cardResponse = document.getElementById("cardResponse");
  const insertValue = document.getElementById("insertValue");
  let valueSaved = '';
  // Load functions sequence
  Init();
  // Functions
  function Init() {
    console.log("App on");
    preventForm();
    labelListener();
    buttonListener();
  }
  function preventForm() {
    formNode.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
  function clearLabelChecked() {
    for (const [key, value] of Object.entries(labelCollection)) {
      let temporaryLabelTargeted = document.getElementById(value.id);
      temporaryLabelTargeted.classList.remove("labelChecked");
    }
  }
  function checkLabel(id) {
    let radioTargeted = document.getElementById(`${id}Label`);
    radioTargeted.classList.add("labelChecked");
  }
  function affectValue(value){
    insertValue.textContent = value;
    cardRequest.classList.add('hidden');
    cardResponse.classList.remove('hidden');
  }
  function labelListener() {
    formNode.addEventListener("change", (e) => {
      if (
        e.target.id == "rating_1" ||
        e.target.id == "rating_2" ||
        e.target.id == "rating_3" ||
        e.target.id == "rating_4" ||
        e.target.id == "rating_5"
      ) {
        e.preventDefault();
        //Init the valueSaved
        valueSaved = '';
        // Clear all label
        clearLabelChecked();
        // Color the label where input is checked
        checkLabel(e.target.id);
      }
    });
  }
  function buttonListener() {
    submitButton.addEventListener("click", (e) => {
      submitForm(e);
    });
  }
  function submitForm(e) {
    e.preventDefault();
    console.log('Submit!!!');
    for (const [key, value] of Object.entries(inputCollection)) {
      if (value.checked) {
        valueSaved = value.value;
      }
    }
    if (!valueSaved == '') {
      console.log(`Value saved : ${valueSaved}.`);
      affectValue(valueSaved);
    }
  }
}
window.addEventListener("load", app);
