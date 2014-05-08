## Tools of the trade.

**Settings [1], Tools, Generic, Base, Blocks, Components, Trumps**

##### Notes:

1. Settings are only used if you're using a preprocessor.

I'll explain all of these concepts *soon*.

---

## Writing good CSS

First, lets talk about writing good CSS.

1. Write descriptive comments for you and your team.
2. Use BEM Syntax. http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
3. Use exactly 1 space after each selector.
4. Sort your properties alphabetically. (this allows you to easily scan through your code because your mind knows how to read things quicker if they're indexed. This is why libraries have them ) [1]
5. if you're using a preprocessor like Scss put your extends before your mixins and both of them at the top of the selector. If you think about it this is a logical thing to do and will save you from headaches down the road. if you use extend you want those properties to come first, then you will mixin functionality using a mixin, and finally you will describe that selector using the properties you set.

```scss
/*------------------------------------*\
#MEDIA
\*------------------------------------*/

/**
 * Place any image- and text-like content side-by-side, as per:
 * stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code
 */

.media {
    @include clearfix;
    display: block;
}

.media__object {
    float: left;
    margin-right: 1em;

    > img {
        display: block;
    }
}

.media__body {
    overflow: hidden;
}
```

##### Notes:

1. Only sort properties alphabetically if you can, for some reason someone decided to make the border-radius properties the only properties that can't be sorted alphabetically because of how the CSS Cascade works. Example below.

---

```scss
border-radius: 10px;
border-top-left-radius: 5px;
```

```scss
/* instead they should of named them like this, but oh well.... */
border-radius: 10px;
border-radius-top-left: 5px;
```

## Use feature detection CSS where appropriate

*Very often do I see this approach, its not bad, but it doesn't make much sense to me.*

For example, if you were building a responsive site then you'd obviously be coding for something that is mobile at some point.

And usually a designer will want to make buttons/inputs bigger so they're more friendly to mobile users, which they should be doing!

However, you as the web developer will often do something like this:

```scss
.button {
    ...
    height: 3em;
}

.input {
    ...
    height: 3em;
}

@media (min-width: 768px) {
    // bigger than mobile.
    .button {
        height: 1em;
    }

    .input {
        height: 1em;
    }
}
```

This to me, is a big no no. and that is why we should be using feature css.

## What is feature css?

Ever heard of the amazing Modernizr.js? http://modernizr.com/

Well, if not. its a library that will add classes to your HTML element for features that are available to it.

You can write your own tests too so if something isn't in their you can write it! just make sure to read the docs first before taking a stab at it. P.s... always read the docs for anything.

So, using something like modernizr the previous solution would look like this.

```scss

.button {
    ...
    height: 1em;

    .touch & {
        height: 3em;
    }
}

.input {
    ...
    height: 1em;

    .touch & {
        height: 3em;
    }
}

```

This to me is much better.

1. we're not using a media query.
2. we're explicitly saying if we're on a device that is touch friendly, make the buttons and inputs mobile.
3. less lines of code!


OK!

Now time for the juicy details of **CSS Architecture**.

## What is settings?

this is a folder where you put all of the configuration of your blocks/components or third-party settings.

1. settings
2. 3rd party settings
3. sprite variables (using something like compass sprite maps)
6. etc.

the folder structure that I usually use looks something like this:

```
settings
├─── _defaults.scss
├─── _sprites.scss
└─── _#{some-third-party}.scss
```

## What is tools?

this is a folder where you put all of your tools! (functions, mixins).

1. functions
2. mixins

the folder structure that I usually use looks something like this:

```
tools
├─── _functions.scss
└─── _mixins.scss
```


## What is generic?

this is a folder where you put all of the browser normalization css code like normalize or a reset any any functionality that might be shared across the project that could be considered "generic" or... not specific to any given app.

1. box sizing styles (if you don't support IE7 or lower)
2. normalize styles (for normalizing the browsers defaults)
3. generic shared styles (for things like margin/padding on specific elements)
4. reset styles (if you want to reset specific elements like the margin on a body element)
5. clearfix styles (everyone uses it, it's pretty generic these days)
6. etc.

the folder structure that I usually use looks something like this:

```
generic
├─── _box-sizing.scss
├─── _normalize.scss
├─── _shared.scss
├─── _reset.scss
└─── _clearfix.scss
```

## What is base?

this is a folder where you put all of the boilerplate CSS to setup your site.

1. page styles.
2. paragraph styles.
3. heading styles.
4. list styles.
5. image styles.
6. etc.

the folder structure that I usually use looks something like this:

```
base
├─── _headings.scss
├─── _images.scss
├─── _lists.scss
├─── _page.scss
└─── _paragraphs.scss
```

## What is blocks?

this is a folder where you put all of the blocks (reusable chunks of code). [1]

##### Notes:

1. Generally you should not give these initial implementations theme styles, purely just structural styles for the purpose of the UX you're providing.

---

1. table blocks
2. flag block
3. media block
4. button blocks
5. bare-list block
6. block-list block
6. input blocks
8. ui-list block
9. grid block
10. box block
11. tab blocks

the folder structure that I usually use looks something like this:

```
blocks
├─── _tables.scss
├─── _flag.scss
├─── _media.scss
├─── _buttons.scss
├─── _bare-list.scss
├─── _block-list.scss
├─── _inputs.scss
├─── _ui-list.scss
├─── _grid.scss
├─── _box.scss
└─── _tabs.scss
```

## What is components?

this is a folder where you put all of the code that wraps blocks together. [1]

##### Notes:

1. This is the area where you should give something a visual theme/style.

---

1. button variations (extend from buttons)
2. form related styles (extend from inputs)
3. panel component (extend from box)
4. dropdowns (extend from lists)
5. etc

the folder structure that I usually use looks something like this:

```
components
├─── _forms.scss
├─── _buttons.scss
├─── _dropdowns.scss
├─── _navigations.scss
└─── _navigationbars.scss
```

I will go into more detail of all of these later. its now 12:13AM.

Goodnight!
