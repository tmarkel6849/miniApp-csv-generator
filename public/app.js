document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  let formValue = form.children[1].value
  console.log(JSON.stringify(formValue));
  form.children[1].value = "";
});