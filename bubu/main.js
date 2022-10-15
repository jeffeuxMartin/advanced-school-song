const translate = require('@iamtraction/google-translate');

translate("Ich bin Student", { to: "en" })
.then(res => {
  console.log(res.text);
})
.catch(err => {
  console.error(err);
});
console.log('shit')