ng.ckeditor
===========
CKEditor is a ready-for-use HTML text editor designed to simplify web content creation. It's a WYSIWYG editor that brings common word processor features directly to your web pages. Enhance your website experience with our community maintained editor.

<h3>CKEditor values</h3>
CKEditor is an Open source application, which means it can be modified any way you want. It benefits from an active community that is constantly evolving the application with free add-ons and a transparent development process.

<h3>Dependencies</h3>
Download make the dependencies of CKEditor + ng-CKEditor and include in your project
* http://ckeditor.com/download
* ng-ckeditor.min.js

<h3>Implementation</h3>
```
<ng-ckeditor bind="htmlEditor" skin="bootstrapck" remove-buttons="Image" remove-plugins="iframe,flash,smiley" msn-count="
Number of typed characters:"></ng-ckeditor>
```
The parameter bind = "HtmlEditor" you are referring to variable $scope.htmlEditor

## Bower install de dependency
```
$ bower install ng.ckeditor --save
```

## Module AngularJS include
```
angular.module('example', ["ng.ckeditor"]);
```
