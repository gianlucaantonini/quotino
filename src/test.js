fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    // get random index value
    const randomIndex = Math.floor(Math.random() * data.length);

    // get random quote + author
    const quote = data[randomIndex]['text'];
    const author = data[randomIndex]['author'];

    
    document.getElementById("messaggi").innerHTML += '<h1>' + data[randomIndex]['text'] + '</h1>';
    
  });

  document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        // get random index value
        const randomIndex = Math.floor(Math.random() * data.length);
    
        // get random quote + author
        const quote = data[randomIndex]['text'];
        const author = data[randomIndex]['author'];
    
        
        document.getElementById("messaggi").innerHTML = '<h1>' + data[randomIndex]['text'] + '</h1>';
        
      });
    }
}