ng.ckeditor
===========

The best web text editor for everyone [Angular JS]

<h3>Dependencies</h3>
Download make the dependencies of CKEditor + ng-CKEditor and include in your project
* http://ckeditor.com/
* ng-ckeditor.min.js

<h3>Implementation</h3>
```
<ng-ckeditor bind="htmlEditor" skin="bootstrapck" remove-buttons="Image" remove-plugins="iframe,flash,smiley" msn-count="
Number of typed characters:"></ng-ckeditor>
```
The parameter bind = "HtmlEditor" you are referring to variable $scope.htmlEditor
