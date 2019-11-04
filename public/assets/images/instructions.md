# Lform Developer Test

You will be creating a small webapp call Jitter, this test will gauge your knowledge of basic HTML, CSS, MySQL, and PHP. Jitter is essentially Twitter, a micro-blogging mechanism, except Jitter will allow the user to edit their posts. It should take approximately 1 — 2 hours to complete, however you should focus on organization, clean code and best practices rather than quickness of development.

## Specifications

1. The resulting HTML/CSS version of the design must resemble the design reference as close as possible and work on all major browsers (Safari, Chrome, Firefox, IE 11, Edge).
1. PHP should be object oriented.
1. Do not use any frameworks.
1. Create a simple MySQL database to store the posts.
1. Posts will be added/updated by clicking the 'Jitter It' button.
1. If the 'edit' link is clicked, the contents of that post should appear in the Jitter text box and when submitted, update that post.
1. The 'Total Posts' line should reflect the total number of posts in the posts table.
1. Integrate a rich text editor (such as TinyMCE or CKEditor) for the Jitter textarea, it should contain the following buttons: bold, italic, underline, font size, font color, link, unlink, insert image, remove style formatting, clean up code, HTML view, full screen. Configure it as it appears in the design example.
1. Once you have completed the test, create a dump of the MySQL database and include it in a zipfile containing all the Jitter site files required to run the site and mail it to [updates@lform.com](mailto:updates@lform.com).

git remote rm heroku
heroku git:remote -a newname