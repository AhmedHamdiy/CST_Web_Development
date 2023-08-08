
function ToHTML(array) {
    
    //the string we will return
  let html = '<div class="grid-container">\n';
  
    //for loop on the array to add every object to our string
  for (let i = 0; i < array.length; i++) {
    html += '<div class="grid-item">\n';
    
    //add the image
    html += '<img src="' + array[i].image + '" ';
    
      //add the width
    {
      html += 'width= "100%" ';
    }
    
      //add the height 
    {
      html += 'height="200"';
    }
    html += '>\n';
    
      //add the header:
    html += '<h3>' + array[i].header + '</h3>\n';
    
      //finally add the paragraph
    html += '<p>' + array[i].paragraph + '</p>\n';
    html += '</div>\n';
  }
  html += '</div>';
  return html;
}


  //Test the function:
  const arr = [
    //first object
    {
      image: "google.com",
      header: "some nice header",
      paragraph: "some content bla bla bla"
    },
    //second object
    {
      image: "fb.com",
      header: "some nice header",
      paragraph: "some content bla bla bla"
    },
    //third object
    {
      image: "twitter.com",
      header: "some nice header",
      paragraph: "some content bla bla bla"
    }
  ];
  
  const html = toHTML(arr);
  console.log(html);
