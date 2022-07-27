const pElement = document.getElementById('quote');
const submitElement = document.getElementById('submitButton');
const amountElement = document.getElementById('amount');

submitElement.addEventListener('click', function () {
  const amount = amountElement.value;

  axios.get(`https://the-dune-api.herokuapp.com/quotes/${amount}`).then((response) => {
    const { data } = response;
    data.forEach((element) => {
      pElement.innerHTML += '<br><br>' + element.quote;
    });
  });
});
