$(function() {
  // target areas in index.html using jQuery selectors, start all variable names with $ to know it is a jQuery selector variable
  const $jitterItBtn = $("#jitter-It-Btn");
  const $postList = $(".post-list");

  //    edit button toggle data-what attribute.

  //-------------------------GET AND RENDER ALL POSTS--------------------//

  //function that will be called after AJAX call retrieves JSON data
  //funciton will take JSON data and convert into html code to be rendered on page
  const displayPosts = function(posts) {
    $postList.empty();

    let postListItems = [];
    // display only limited number of posts run loop for 10 post
    for (let i = 0; i < 10; i++) {
      let post = posts[i];
      $postList.prepend(`
    <li class="post-item">
        <h5 class="post-content">${post.body}</h5>
        <div class="info">
          <span class="date">${new Date(
            post.created_at
          ).toLocaleString()}</span>
          <span class="spacer"> | </span>
          <span class="edit"><a href="#" data-id="${post.id}" id="editBtn">(edit)</a></span>
        </div>
    </li>
    <hr/>`);
    }
  };

  //get JSON object of posts from jitter_db
  const getJSONposts = function() {
    $.ajax({
      url: "/api/posts",
      method: "GET"
    }).then(function(data) {
      displayPosts(data);
    });
  };
  //call function to get and display posts
  getJSONposts();

  //---------------------EDIT BUTTON------------------------//
  
//   const displayOnePost = function(post){
   
//   }

  let handlePostEditBtn = function() {

    // Prevent the click listener for the list from being called when the button inside of it is clicked
    
console.log("condition hit")
    let postID = $(this).data("id");
    console.log(postID);

    $.ajax({
      url: `/api/posts/${postID}`,
      method: "GET"
    }).then(function(data) {
        console.log(data)
        let dataBody = '<p>' + data[0].body + '</p>'
        // $(".cke_editable").append(dataBody)
        CKEDITOR.instances.jitterEditor.setData( dataBody, {
            callback: function() {
                this.checkDirty(); // true
            }
        } );
        $jitterItBtn.attr('data-functionality', 'edit-it');
        $jitterItBtn.attr('data-id', data[0].id);
    });
    
  };

  $(document).on("click", "#editBtn", handlePostEditBtn);

  //---------------------------SAVE A POST AND POST TO PAGE----------------------//

  // Get the post data from the editor, save it to the database and update the view
  let handlePostSave = function() {
    let jitterBtnAttr = $(this).data("functionality");
    if (jitterBtnAttr === "jitter-it") {
      let ckData = CKEDITOR.instances.jitterEditor.getData();
      console.log("condition hit handle post save");
      console.log(ckData + " this is ckdata");
      let newPost = {
        body: ckData
      };
      console.log(newPost);
      $.ajax({
        url: "/api/posts",
        data: newPost,
        method: "POST"
      }).then(function(data) {
        location.reload();
      });
    } else {
        let ckData = CKEDITOR.instances.jitterEditor.getData();
      console.log("condition hit handle post save");
      console.log(ckData + " this is ckdata");
      let postID = $(this).data("id");
      let newPost = {
        body: ckData
      };
      console.log(newPost);
      $.ajax({
        url: "/api/posts/" + postID,
        data: newPost,
        method: "PUT"
      }).then(function(data) {
        location.reload();
        $jitterItBtn.attr('data-functionality', 'jitter-it');
      });

        
    }
  };

  $jitterItBtn.on("click", handlePostSave);

  //------------------------------EDIT BUTTON RENDERS NOTE DATA INTO TEXT EDITOR AND REPLACES OLD POST------------------//

  // let handleEditPost = function (event) {
  //   event.preventDefault()

  //   let searchForWords = $("#searchInput").val().trim().split(" ").toString();

  //   console.log(searchForWords)

  //     $.ajax({
  //       url: `/api/notes/${searchForWords}`,
  //       method: "GET"

  //     }).then(function (data) {
  //       if (data) {
  //         displayNotes(data)
  //       }

  //     });

  //   };

  // searchNoteBtn.on("click", handleSearchNote);
});








// let ckData = CKEDITOR.instances.editor1.getData();
// console.log("condition hit handle post save");
// console.log(ckData + " this is ckdata");
// let newPost = {
//   body: ckData
// };