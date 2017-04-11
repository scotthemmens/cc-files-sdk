$(function(){

  var container     = "",
      api_key       = "cdba0670e9d34f05ac11a87f2a14b691",
      user_token    = "eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJmZyI6IlJLVFhRTE40NzdWVVA1VFRWQVNRTUFONUFBPT09PT09IiwiYyI6IjJ1NUYyV1d1ZlJTdktJbllsVU1PeFE9PSIsIm1vaSI6IjI4OGE1OWEyIiwicnRpZCI6IjE0OTE4OTU0ODE4MTUtYWYwN2IwZjctNjg1OS00NDYwLWI3YWUtMDI2ZWY2ZjIzZjg0IiwiY3JlYXRlZF9hdCI6IjE0OTE4OTU0ODE4MTQiLCJydGVhIjoiMTQ5MzEwNTA4MTgxNSIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJlZWYwZGI0Yjg4NzU0ZWZjODUzMzgwZmNiNjJjMmU1MSIsImFzIjoiaW1zLW5hMSIsIm9jIjoicmVuZ2EqbmExcioxNWI1YmUyY2NmNyoxMVNDODdSV0s1NkI5MjdQUDZRVjFKSlRRRyIsInVzZXJfaWQiOiI1MEE4MEY3MzU4MkIwQzdDMEE0OTVEODFAQWRvYmVJRCIsInNjb3BlIjoiQWRvYmVJRCxvcGVuaWQsY3JlYXRpdmVfc2RrLGFkZHJlc3MsZW1haWwscHJvZmlsZSIsImlkIjoiMTQ5MTg5NTQ4MTgxNC1jZjk0YWUzOC02N2ExLTRlODItYjBhYS1mM2NiZmNkNjY2ZGUiLCJzdGF0ZSI6IiIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCJ9.IVrEi2TrbXx3erZWGFjOVVNrLPlPZhiXf7nT47hbkCFb-1XmDNA3ONqrsf6qbFL22-qd9GbKDUaJBdjiltS4pUmKgcSM8wjutm5zVV4iO_-oweXL7IkLv_CcFlMee7RWGSdX85e9eR57HY1s_caSBE6wcNctmEBbncX21uh_HjefHXFwbSwUkCavCML8Z9jThz5zIb2nBhGlrp8zCmTUNM6lIJu9KCC-nN4Un67xwFX38h6GY71JLk0GXAS86cA5ePzypqfuBUn1HhnlZtXfnLlik-rucVASAPVyZnHgfiztXaf-6B2AbuRkApcE1pjTC-dnLGZLoJR4EdT4J5vm8A",
      refresh_token = "eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJmZyI6IlJLVFhRTE40NzdWVVA1VFRWQVNRTUFONUFBPT09PT09IiwiYXMiOiJpbXMtbmExIiwidXNlcl9pZCI6IjUwQTgwRjczNTgyQjBDN0MwQTQ5NUQ4MUBBZG9iZUlEIiwic2NvcGUiOiJBZG9iZUlELG9wZW5pZCxjcmVhdGl2ZV9zZGssYWRkcmVzcyxlbWFpbCxwcm9maWxlIiwiY3JlYXRlZF9hdCI6IjE0OTE4OTU0ODE4MTUiLCJpZCI6IjE0OTE4OTU0ODE4MTUtYWYwN2IwZjctNjg1OS00NDYwLWI3YWUtMDI2ZWY2ZjIzZjg0Iiwic3RhdGUiOiIiLCJ0eXBlIjoicmVmcmVzaF90b2tlbiIsImV4cGlyZXNfaW4iOiIxMjA5NjAwMDAwIiwiY2xpZW50X2lkIjoiZWVmMGRiNGI4ODc1NGVmYzg1MzM4MGZjYjYyYzJlNTEifQ.ggIwV0X_1a3vie77SuMoorpvHR9xH0JOF80qWmDXPPKikVPMQ3xieL54pnah0J7gJU4x2EwRpvd0RW-LtwlzUmqoh5mvIEVCbnNpzm7GCxASXEOikji_sd-L2gh6u2LekTgJikvVrVoUbs6AIkXHR351dRNS4lxhHkOqkyo33uIa4xMwj9pcYbQmTkVXMLXIJSQ8LhLQmxYnBX7AQ-ADSqT7t8IqHaigOwmA_pKbALVNlrMryxid7TFkyCW5Io6bF8LIM7BGZT1l8REtToq9RoMLCt2bOkBJXrkZqeDN4heDhln5b1QmuVxUnaTTUMDlgymfkLH4xuRiuQhjWCq0qw",
      images_array  = [],
      mode          = "render all",
      query_string  = window.location.search;

  console.log(query_string);
  
  if(query_string === "?random") {
    mode = "random";
  }
  else if(query_string.indexOf('image') > -1) {
    mode = "single image";
  }

  console.log(mode);

  // Get the files list
  $.get("https://cc-api-storage.adobe.io/libraries/47e10d9e-a9e2-4b73-8fc5-2eea8a3f4102", { 'api_key':api_key , "user_token": user_token, "refresh_token": refresh_token, "base":""}, function(data){
    
    console.log(data);
    processData(data);
  
  });

 // Get the images
function processData(data) {

  var type  = '',
      image = '';

  for(var i = 0; i< data.children.length; i++) {
    type  = data.children[i].type;
    image = data.children[i].path;
    //image = data.children[i].path;
    if(type === "image/jpeg" || type ==="image/png") {
      console.log(image);
      images_array.push(image);

    } 
  }
  render();
};


  function render() {

    if (mode === "random") {

      var index = Math.floor((Math.random() * images_array.length)),
          image = images_array[index];
      appendImage(image);

    }

    else if (mode === "single image") {

      console.log('single image if');
      var image = images_array[query_string.split('=')[1]];
      appendImage(image);

    }

    // render everything
    else {

      for(var i = 0; i < images_array.length; i ++) {

          appendImage(images_array[i]);

      }

    }

  }


// Pop images in page
function appendImage(image) {

  var img = $('<img />',
     { 
       src: "https://cc-api-storage.adobe.io/" + image + "?type=image/png&api_key=eef0db4b88754efc853380fcb62c2e51&user_token="+ user_token,
       width:1000
     }).appendTo($('body'));
}

});