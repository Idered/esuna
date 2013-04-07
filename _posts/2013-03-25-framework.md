---
date: 2013-03-25 16:56:14
layout: section
slug: framework
title: Framework
sections: [
	{
		id: 'structure',
		title: 'Structure'
	}, {
		id: 'development-tools',
		title: 'Development Tools'
	}, {
		id: 'base',
		title: 'Base'
	}, {
		id: 'objects',
		title: 'Objects',
		sub: [
			{
				id: 'object-row',
				title: 'Row'
			}, {
				id: 'object-sprites',
				title: 'Sprites'
			}, {
				id: 'object-navigations',
				title: 'Navigations'
			}, {
				id: 'object-buttons',
				title: 'Buttons'
			}, {
				id: 'object-groups',
				title: 'Groups'
			}, {
				id: 'object-media-object',
				title: 'Media object'
			}, {
				id: 'object-notifications',
				title: 'Notifications'
			}, {
				id: 'object-bar',
				title: 'Bar'
			}, {
				id: 'object-navicon',
				title: 'Navicon'
			}, {
				id: 'object-pagination',
				title: 'Pagination'
			}, {
				id: 'object-dropdown',
				title: 'Dropdown'
			}, {
				id: 'object-tags',
				title: 'Usage'
			}, {
				id: 'object-comments-area',
				title: 'Comments area'
			}
		]
	}, {
		id: 'helpers',
		title: 'Helpers',
		sub: [
			{
				id: 'helper-display',
				title: 'Display'
			}, {
				id: 'helper-clearfix',
				title: 'Clearfix'
			}, {
				id: 'helper-text',
				title: 'Text'
			}, {
				id: 'helper-colors',
				title: 'Colors'
			}
		]
	}
]
---

## Structure {#structure}

~~~
.
├── index.html
├── Gruntfile.js
├── package.json
├── _ui
│   ├── style.css
│   ├── fonts
│   ├── img
│   └── js
│      ├── jquery.js
│      ├── modernizr.js
│      ├── plugins.js
│      └── main.js
├── _assets
└── _media
~~~

`index.html`
: Contains basic structure.

`Gruntfile.js`
: <a href="http://gruntjs.com">Grunt</a> configuration file.

`package.json`
: File used by Grunt. Contains basic info about project and dependencies.

`_ui`
: This folder contains all UI related files.

`style.css`
: This is where we write all those cool css stuff. It also contains normalize.css, some helpers, objects and media queries.
Please see [my snippets repo](http://github.com/Idered/snippets) for basic structure of elements included in `style.css`, I've put there structure of comments, post, blockquotes, tags and many more elements.

`plugins.js`
: This file contains Respond.js polyfill to add min/max-width and media query support. It also contains [DevTools](#development-tools).

`script.js`
: This file is where you work on JS stuff. There's already a basic structure with plaeholder polyfill and some other useful scripts.

`__assets`
: In this folder you can put not converted fonts, PSD's including sprite.psd, documentations from client, etc.

`__media`
: This is where you hold videos, placeholder images for articles, user avatars and other elements not directly connected  with UI.

## Development Tools {#development-tools}

DevTools is a custom set of tools that can help you during development. Currently this set is rather small but it will be expanded in future.

### Tools


`cssRefresher`
: Simple css refresh script with no UI. Options:
	<ul>
		<li>`interval` - Time between checking if file was modified.</li>
		<li>`idle` - Number of checks after which file is beign checked less frequently. Counter is reseted when file was modified.</li>
	</ul>

`windowSize`
: This tool displays window size on bottom right side of screen. It's useful during creating responsive websites.

### Loading tools

DevTools should be loaded only in development stage, that's why there's a special area in `script.js` at the beginning of file which helps you to do that.

To load DevTool, use this command:

	DevTools.loadModule('toolName', options);

### Grunt

Grunt is JavaScript task runner. Esuna uses it to compress and concat css, js files.

Please follow [Grunt documentation](http://gruntjs.com/getting-started) for more info.

## Base {#base}

### Forms

#### Vertical mode

<div class="example">
	<div class="example__content">
		<form action="" class="form--aligned">
			<div class="input-wrap">
				<label for="username">Username: </label>
				<input type="text" id="username" name="username">
			</div>
			<div class="input-wrap">
				<label for="password">Password: </label>
				<input type="password" id="password" name="password">
			</div>
			<div class="form-actions text--left">
				<input type="submit" name="submit" value="Send" class="btn btn--primary">
			</div>
		</form>
	</div>
	<div class="example__code" markdown="1">
	<form action="" class="form--aligned">
		<div class="input-wrap">
			<label for="username">Username: </label>
			<input type="text" id="username" name="username">
		</div>
		<div class="input-wrap">
			<label for="password">Password: </label>
			<input type="password" id="password" name="password">
		</div>
		<div class="form-actions text--left">
			<input type="submit" name="submit" value="Send" class="btn btn--primary">
		</div>
	</form>
</div>
</div>

#### Horizontal mode

<div class="example">
	<div class="example__content">
		<form action="">
			<div class="input-row">
				<div class="input-wrap">
					<label for="name">Name: </label>
					<input type="text" id="name" name="name">
				</div>
				<div class="input-wrap">
					<label for="email">Email: </label>
					<input type="email" id="email" name="email">
				</div>
				<div class="input-wrap">
					<label for="url">URL: </label>
					<input type="url" id="url" name="url">
				</div>
			</div>
			<div class="input-wrap">
				<label for="message">Message</label>
				<textarea name="message" class="input--full" id="message" rows="5"></textarea>
			</div>
			<div class="form-actions">
				<input type="submit" name="submit" value="Send" class="btn btn--primary">
			</div>
		</form>
	</div>
	<div class="example__code" markdown="1">
	<form action="">
		<div class="input-row">
			<div class="input-wrap">
				<label for="name">Name: </label>
				<input type="text" id="name" name="name">
			</div>
			<div class="input-wrap">
				<label for="email">Email: </label>
				<input type="email" id="email" name="email">
			</div>
			<div class="input-wrap">
				<label for="url">URL: </label>
				<input type="url" id="url" name="url">
			</div>
		</div>
		<div class="input-wrap">
			<label for="message">Message</label>
			<textarea name="message" class="input--full" id="message" rows="5"></textarea>
		</div>
		<div class="form-actions">
			<input type="submit" name="submit" value="Send" class="btn btn--primary">
		</div>
	</form>
</div>
</div>

#### Classes

`.input-row`
: Force 100% width of parent and display inner inputs inline.

`.input-wrap`
: Basic input wrapper, used to add margins and manipulate flow of elements.

`.form-actions`
: Contains form submission buttons, cancel, submit, etc.

<h5>Modifiers</h5>

`.form--aligned`
: Align labels to left and make them equal width.

`.input--half`
: Fill 50% of parent width.

`.input--full`
: Fill 100% of parent width.


## Objects {#objects}

### Rows {#object-rows}

<div class="example">
	<div class="example__content">
		<div class="row">
			<div class="cell cell-4of12">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis asperiores porro dolor quos eos animi non rem laborum magni natus alias temporibus quas explicabo fuga ipsam beatae qui. Quam rem.
			</div>
			<div class="cell cell-8of12">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt pariatur harum dicta aperiam delectus modi qui vitae sit eos saepe ratione eaque sint error sapiente omnis quis aspernatur voluptas architecto!
			</div>
		</div>

		<div class="row">
			<div class="cell cell-8of12">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis asperiores porro dolor quos eos animi non rem laborum magni natus alias temporibus quas explicabo fuga ipsam beatae qui. Quam rem.
			</div>
			<div class="cell cell-4of12">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt pariatur harum dicta aperiam delectus modi qui vitae sit eos saepe ratione eaque sint error sapiente omnis quis aspernatur voluptas architecto!
			</div>
		</div>
	</div>
	<div class="example__code" markdown="1">
	<div class="row">
		<div class="cell cell-4of12">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis asperiores porro dolor quos eos animi non rem laborum magni natus alias temporibus quas explicabo fuga ipsam beatae qui. Quam rem.
		</div>
		<div class="cell cell-8of12">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt pariatur harum dicta aperiam delectus modi qui vitae sit eos saepe ratione eaque sint error sapiente omnis quis aspernatur voluptas architecto!
		</div>
	</div>

	<div class="row">
		<div class="cell cell-8of12">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis asperiores porro dolor quos eos animi non rem laborum magni natus alias temporibus quas explicabo fuga ipsam beatae qui. Quam rem.
		</div>
		<div class="cell cell-4of12">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt pariatur harum dicta aperiam delectus modi qui vitae sit eos saepe ratione eaque sint error sapiente omnis quis aspernatur voluptas architecto!
		</div>
	</div>

</div>
</div>

`.row`
: Main wrapper of columns.

`.cell`
: Single column.

`.cell-XofY`
: Size of column. **X is number between 1 and 11**{:id: .text--lighter} and **Y is number between 1 and 12 except 7 and 11**{:id: .text--lighter}. Example: `.cell-5of12`, `.cell-4of6`.

### Sprites {#object-sprites}

Sprites default file is `_ui/img/sprite.png`. Default single sprite size is 16x16px.

#### Usage

	<i class="s s--email"></i>

### Navigations {#object-navigations}

#### Usage

<div class="example">
	<div class="example__content">
		<ul class="nav nav--fluid" data-base="nav" data-modifiers='["fluid", "stacked", ""]'>
			<li><a href="#" class="active">Home</a></li>
			<li><a href="#">Gallery</a></li>
			<li><a href="#">About us</a></li>
			<li><a href="#">Our clients</a></li>
			<li><a href="#">Contact us</a></li>
		</ul>
	</div>
	<div class="example__code" markdown="1">
	<ul class="nav">
		<li><a href="" class="active"></a></li>
		<li><a href=""></a></li>
	</ul>
</div>
</div>

#### Modifiers

`.nav--stacked`
: Throw list into vertical mode.

`.nav--fluid`
: Force navigation to fill 100% of its parent width.

### Buttons {#object-buttons}

#### Usage

<div class="example">
	<div class="example__content">
	<p>
		<a href="#" class="btn btn--primary">Primary button</a>
		<a href="#" class="btn btn--secondary">Secondary button</a>
		<a href="#" class="btn btn--tertiary">Tertiary button</a>
	</p>
	<p>
		<a href="#" class="btn btn--positive">Positive button</a>
		<a href="#" class="btn btn--negative">Negative button</a>
		<a href="#" class="btn btn--inactive">Inactive button</a>
	</p>
	</div>
	<div class="example__code" markdown="1">
	<p>
		<a href="#" class="btn btn--primary">Primary button</a>
		<a href="#" class="btn btn--secondary">Secondary button</a>
		<a href="#" class="btn btn--tertiary">Tertiary button</a>
	</p>
	<p>
		<a href="#" class="btn btn--positive">Positive button</a>
		<a href="#" class="btn btn--negative">Negative button</a>
		<a href="#" class="btn btn--inactive">Inactive button</a>
	</p>
</div>
</div>

#### Button size

Use left and right paddings to manipulate button size.

{:id .list--clear}
* `.btn--small`
* `.btn--large`
* `.btn--huge`
* `.btn--wide`
* `.btn--full`


#### Button font size

Use font size to manipulate button size.

{:id .list--clear}
* `.btn--alpha`
* `.btn--beta`
* `.btn--gamma`
* `.btn--delta`
* `.btn--epsilon`
* `.btn--zeta`

#### Natural button

`.btn--natural`
: It inherits parent font and line height.

#### Button functions

{:id .list--clear}
* `.btn--primary`
* `.btn--secondary`
* `.btn--tertiary`
* `.btn--positive`
* `.btn--negative`
* `.btn--inactive`

#### Button border radius

`.btn--soft`
: Rounded button.

`.btn--hard`
: No border radius.

### Groups {#object-groups}

<div class="example">
	<div class="example__content">
		<p class="group group--horizontal">
			<a href="#" class="btn btn--primary">Button 1</a>
			<a href="#" class="btn btn--secondary">Button 2</a>
			<a href="#" class="btn btn--tertiary">Button 3</a>
		</p>

		<p class="group group--vertical">
			<a href="#" class="btn btn--primary">Button 1</a>
			<a href="#" class="btn btn--secondary">Button 2</a>
			<a href="#" class="btn btn--tertiary">Button 3</a>
		</p>

		<form action="">
			<div class="input-wrap group group--horizontal group--full">
				<input type="text" id="username" name="username" placeholder="Name" class="cell cell-4of12">
				<input type="email" id="email" name="email" placeholder="Email" class="cell cell-4of12">
				<input type="url" id="url" name="url" placeholder="URL" class="cell cell-4of12">
			</div>
		</form>

		<form action="">
			<div class="input-wrap group group--vertical">
				<input type="text" id="username" name="username" placeholder="Name">
				<input type="email" id="email" name="email" placeholder="Email">
				<input type="url" id="url" name="url" placeholder="URL">
			</div>
		</form>

		<form action="" class="search-form">
			<div class="input-wrap group group--horizontal">
				<input type="search" name="q" placeholder="Search..." class="cell cell-9of12">
				<input type="submit" name="submit" value="Go" class="cell cell-3of12">
			</div>
		</form>
	</div>
	<div class="example__code" markdown="1">
	<p class="group group--horizontal">
		<a href="#" class="btn btn--primary">Button 1</a>
		<a href="#" class="btn btn--secondary">Button 2</a>
		<a href="#" class="btn btn--tertiary">Button 3</a>
	</p>

	<p class="group group--vertical">
		<a href="#" class="btn btn--primary">Button 1</a>
		<a href="#" class="btn btn--secondary">Button 2</a>
		<a href="#" class="btn btn--tertiary">Button 3</a>
	</p>

	<form action="">
		<div class="input-wrap group group--horizontal group--full">
			<input type="text" id="username" name="username" placeholder="Name" class="cell cell-4of12">
			<input type="email" id="email" name="email" placeholder="Email" class="cell cell-4of12">
			<input type="url" id="url" name="url" placeholder="URL" class="cell cell-4of12">
		</div>
	</form>

	<form action="">
		<div class="input-wrap group group--vertical">
			<input type="text" id="username" name="username" placeholder="Name">
			<input type="email" id="email" name="email" placeholder="Email">
			<input type="url" id="url" name="url" placeholder="URL">
		</div>
	</form>
</div>
</div>

`.group`
: Basic class, its optional - allows to hide text overflow.

`.group--horizontal`
: Throws list into horizontal mode. You can change width of elements using <a href="#row">row</a>.

`.group--vertical`
: Throws list into vertical mode.

`.group--full`
: Group fit parent width.

### Media object {#object-media-object}

You can use this object in many cases, e.g. separate user avatar from comment text, separate post data from post content, etc.

Please see this [article](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code) for more info about this object.

#### Usage

	<div class="media">
		<div class="media__img"></div>
		<div class="media__body"></div>
	</div>

#### Modifiers

`.media__img--rev`
: Align image to right.

### Notifications {#object-notifications}

#### Usage

<div class="example">
	<div class="example__content">
		<div class="notification notification--info" data-base="notification" data-modifiers='["info", "error", "warning", "success"]'>Sample informational notification.</div>
	</div>
	<div class="example__code" markdown="1">
	<div class="notification notification--info">Sample informational notification.</div>
</div>
</div>

#### Modifiers

{:id .list--clear}
* `.notification--success`
* `.notification--warning`
* `.notification--error`
* `.notification--info`

### Bar {#object-bar}

Bar is an object which allow you to manipulate bottom margin.

#### Usage

<div class="example">
	<div class="example__content">
		<div class="bar bar--huge" data-base="bar" data-modifiers='["huge", "large", "", "small"]'>After this content we have a lot of free space.</div>
	</div>
	<div class="example__code" markdown="1">
	<div class="bar bar--huge">After this content we have a lot of free space.</div>
</div>
</div>

#### Modifiers

{:id .list--clear}
* `.bar--small`
* `.bar--large`
* `.bar--huge`

### Navicon {#object-navicon}

It's an icon based on font size . You can use it in responsive navigations.

#### Usage

<div class="example">
	<div class="example__content" markdown="0">
		<i class="navicon"></i>
	</div>
	<div class="example__code" markdown="1">
	<i class="navicon"></i>
</div>
</div>

### Pagination {#object-pagination}

#### Usage

<div class="example">
	<div class="example__content">
		<div class="pagination">
			<ul>
				<li class="pagination__prev"><a href="#">&lt; Previous</a></li>
				<li><span class="current">1</span></li>
				<li><a href="">2</a></li>
				<li><a href="">3</a></li>
				<li><a href="">4</a></li>
				<li class="pagination__next"><a href="#">Next &gt;</a></li>
			</ul>
		</div>
	</div>
	<div class="example__code" markdown="1">
	<div class="pagination">
		<ul>
			<li class="pagination__prev"><a href="#">&lt; Previous</a></li>
			<li><span class="current">1</span></li>
			<li><a href="">2</a></li>
			<li><a href="">3</a></li>
			<li><a href="">4</a></li>
			<li class="pagination__next"><a href="#">Next &gt;</a></li>
		</ul>
	</div>
</div>
</div>

### Dropdown {#object-dropdown}

#### Usage

<div class="example">
	<div class="example__content">
		<div class="dropdown">
			<div class="dropdown__toggle">Your account</div>
			<ul class="dropdown__content">
				<li><a href="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></li>
				<li><a href="">Settings</a></li>
				<li><a href="">Friends</a></li>
				<li><a href="">Go pro</a></li>
				<li><a href="">Sign out</a></li>
			</ul>
		</div>
	</div>
	<div class="example__code" markdown="1">
	<div class="dropdown">
		<div class="dropdown__text"></div>
		<div class="dropdown__toggle"></div>
		<ul class="dropdown__content">
			<li><a href=""></a></li>
		</ul>
	</div>
</div>
</div>

### Tags {#object-tags}

#### Usage

<div class="example">
	<div class="example__content">
		<div class="tags" data-base="tags" data-modifiers='["", "separated"]'>
			<a href="#">css</a>
			<a href="#">tips</a>
			<a href="#">vertical align</a>
		</div>
	</div>
	<div class="example__code" markdown="1">
	<div class="tags">
		<a href="#">tag 1</a>
		<a href="#">tag 2</a>
		<a href="#">tag 3</a>
	</div>
</div>
</div>

### Comments area {#object-comments-area}

Basic structure of comments area you can use in most of wordpress projects.

#### Usage

~~~
<div class="comments-area">
	<div class="comments-area__inner">
		<h2 class="comments-area__title">Comments</h2>
		<ul class="comments">
			<li class="comment">
				<img class="comment__photo" src="_media/avatar.png" alt="Avatar of user">
				<div class="comment__content">
					<div class="comment__meta">
						Posted by: <a href="">Name</a>, April 25, 2013, 5:03pm
					</div>
					<div class="comment__text">
						<p></p>
					</div>
				</div>
			</li>
		</ul>
		<!-- /.comments -->

		<h2 class="comments-area__title">Add Comment</h2>
		<form action="/" class="comments-form">
			<div class="input-wrap">
				<label for="name">Name:</label>
				<input id="name" type="text" name="name" placeholder="required">
			</div>
			<div class="input-wrap">
				<label for="email">Email:</label>
				<input id="email" type="text" name="email" placeholder="optional">
			</div>
			<div class="input-wrap">
				<label for="message">Message:</label>
				<textarea id="message" name="message" rows="5" placeholder="required"></textarea>
			</div>
			<div class="form-actions">
				<input type="submit" name="submit" value="Submit" class="btn btn--primary">
			</div>
		</form>
		<!-- /.comments-form -->
	</div>
	<!-- /.comments-area__inner -->
</div>
<!-- /.comments-area -->
~~~

## Helpers {#helpers}

### Display {#helper-display}

`.hidden`
: Hide from both screen readers and browsers.

`.invisible`
: Hide visually and from screen readers, but maintain layout.

`.visuallyhidden`
: Hide only visually, but <have></have> it available for screen reader.

### Clearfix {#helper-clearfix}

`.cf`
: Clear floats.

### Text {#helper-text}

#### Alignment

`.text--left`
: Align text to left.

`.text--center`
: Align text to center.

`.text--right`
: Align text to right.

#### Special modifiers

`.text--reverse`
: Reverse text. Mostly used to obfuscate emails.

`.text--truncate`
: Truncate text by adding &hellip;.

`.text--break`
: Break words longer than container width.

#### Font sizes

`.text--smaller`
: Smaller font size.

`.text--larger`
: Larger font size.

#### Font weights

`.text--lighter`
: Lighter font weight.

`.text--bolder`
: Bolder font weight.

`.text--light`
: Light(300) font weight.

`.text--normal`
: Normal(400) font weight.

`.text--semi`
: Semi(600) font weight.

`.text--bold`
: Bold(700) font weight.

`.text--extra`
: Extra bold(800) font weight.

### Colors {#helper-colors}

`.color--primary`
: Primary color used on website.

`.color--secondary`
: Secondary color used on website.

`.color--tertiary`
: Tertiary color used on website.