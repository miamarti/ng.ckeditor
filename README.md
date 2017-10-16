ng.ckeditor
===========
CKEditor is a ready-for-use HTML text editor designed to simplify web content creation. It's a WYSIWYG editor that brings common word processor features directly to your web pages. Enhance your website experience with our community maintained editor.

<p>
  <a href="https://gitter.im/miamarti/ng.ckeditor?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge" target="_blank"><img src="https://badges.gitter.im/Join%20Chat.svg"></a>
  <a href="https://gitlab.com/miamarti/ng.ckeditor" target="_blank"><img src="https://img.shields.io/badge/gitlab-ng.ckeditor-yellow.svg"></a>
  <img src="https://img.shields.io/badge/ng.ckeditor-release-green.svg">
  <img src="https://img.shields.io/badge/version-2.0.5-blue.svg">
  <img src="https://img.shields.io/bower/v/bootstrap.svg"> 
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
  <a href="https://github.com/miamarti/ng.ckeditor/tarball/master"><img src="https://img.shields.io/github/downloads/atom/atom/latest/total.svg"></a>
  <a href="http://waffle.io/miamarti/ng.ckeditor"><img alt='Stories in Ready' src='https://badge.waffle.io/miamarti/ng.ckeditor.svg?label=ready&title=Ready' height="21" /></a>
</p>

<h3>CKEditor values</h3>
CKEditor is an Open source application, which means it can be modified any way you want. It benefits from an active community that is constantly evolving the application with free add-ons and a transparent development process.

<h3>Dependencies</h3>
Download make the dependencies of CKEditor + ng-CKEditor and include in your project
* http://ckeditor.com/download
* ng-ckeditor.min.js
 
<h3>cdn</h3>
https://cdnjs.cloudflare.com/ajax/libs/ng.ckeditor/2.0.4/ng-ckeditor.min.js

OR

https://cdnjs.cloudflare.com/ajax/libs/ng.ckeditor/2.0.4/ng-ckeditor.js

## Implementation
```
<ng-ckeditor ng-model="htmlEditor" skin="moono" remove-buttons="Image" remove-plugins="iframe,flash,smiley" msn-count="
Number of typed characters:"></ng-ckeditor>
```

## Parameters

| Name         | Type    | Dinamic | Mandatory | Description                                                  |
| ------------ | ------- | ------- | --------- | ------------------------------------------------------------ |
| ng-model     | String  | true    | true      | Scope of the attribute that will be the model                |
| ng-change    | Function | false  | false     | Callback function                                            |
| ng-disabled  | Boolean | true    | false     | Set ckeditor to readOnly                                     |
| ng-config    | Object  | false   | false     | Receives a json object that is set to configuration object editor. This object must be created in AngularJS the controller and reported to the component. |

## Bower install de dependency
```
$ bower install ng.ckeditor --save
```

## Module AngularJS include
```
angular.module('example', ["ng.ckeditor"]);
```

## Metrics

[![Throughput Graph](https://graphs.waffle.io/miamarti/ng.ckeditor/throughput.svg)](https://waffle.io/miamarti/ng.ckeditor/metrics/throughput)
