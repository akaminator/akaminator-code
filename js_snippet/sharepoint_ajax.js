let webUrl = 'WEB_URL'; // ★
let listTitle = 'LIST_TITLE'; // ★

fetch(
  webUrl +  "/_api/web/lists/GetByTitle('" + listTitle + "')/Fields",
  {
    method: "GET",
    cache: "no-cache",
    headers: {
      Accept: "application/json;odata=verbose"
    }
  }
)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.text();
})
.then(text => {
  console.log(JSON.parse(text));
});

