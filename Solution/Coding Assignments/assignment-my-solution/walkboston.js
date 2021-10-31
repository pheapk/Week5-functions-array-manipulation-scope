function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  //container.innerHTML = '<ul id="data">' + html + '</ul>';  
  let topSalaries = boston.sort(function (a, b){ return b -a;});

  for (let j =0 ; j < 5; j++){
    let people = topSalaries;    
    html = html +  
      '<li class="post">' + '<h2>' + people[j][8] + '</h2>' + '<h3>' + people[j][11] + '</h3>';
  }

  container.innerHTML = '<h1>Top 5</h1><ul id="topSalaries">' + html + '</ul>';  

}
renderPosts(boston, document.getElementById('container'));
