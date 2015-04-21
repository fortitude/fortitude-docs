# Architecture

Fortitude is built on top of some of the best conceptual layers that have hit the industry, to save you from common difficulties in CSS at scale.

## Object Oriented CSS

The purpose of Object Oriented CSS is to create reusable components that ensure consistency among these elements wherever they may be used.

It allows you to predefine certain structural properties such as `padding`, `margin`, alignment, and `font-size` that can then be reused for additional visual representations.

For example, to create an extension for buttons, you would write some code like this:

```scss_example
.button--secondary {
  background-color: gray;
  border-color: gray;
  color: white;
}
```

You only need to define the color properties of the extension, because the structure of the button doesn't change. Keep your stylesheets DRY&#8482;

## BEM &mdash; Block, Element, Modifier

BEM is a front-end naming methodology that gives meaning to your CSS class names. Anyone on your team can understand at a glance what the associations between your classes are.

The naming convention follows this pattern:

```scss_example
.block {}
.block__element {}
.block--modifier {}
```

* `.block` represents the higher level of an abstraction or component.
* `.block__element` represents a child of `.block` that helps form `.block` as a whole.
* `.block--modifier` represents a different state or version of `.block`.

As an example, here's the code for a layout in Fortitude:

```html_example
<div class="layout layout--flush">
  <!-- layout is the top-level component -->
  <!-- layout--flush is a modifier that tells this layout how to behave -->

  <div class="layout__item">
    <!-- layout__item is a child of .layout that defines items within the layout -->
  </div>
</div>
```

> Read more about BEM at: [MindBEMding &mdash; getting your head &rsquo;round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

## Vertical Rhythm

Vertical rhythm is a grid that guides the user's gaze comfortably through your content by ensuring consistent, predictable vertical spacing between all elements. Horizontal grid systems are common, but getting vertical alignment right in CSS can be a nightmare. Since all the components in Fortitude respect a consistent vertical grid, you won't have to pixel-push individual elements around.

## Mobile First

This has come to be an industry standard and with very good reason. Mobile usage is making up more and more of people's total time on the web. When you send an email and a user clicks through to your site, it's pretty likely that they will be on a phone or tablet.

Fortitude is a mobile-first framework. The components work great on screens of all sizes, and the helper classes are responsive by default. You'll know while you're building how elements will collapse and expand for different screens, in a way anyone on the team can understand.

## Don't fight the browser

Your web browser is built by people. Smart people, and what you might think is a defect in your CSS there actually might be a very good reason something was set as a default.
Rather than just wiping all default browser styles out you should make sure you understand why something is the way it is.

Starting out in CSS is like coming into a new codebase. You think: "All this legacy code is terrible!" But often, there are reasons for why "bad" code is there. While it may seem bad, it's code that *works* in the wild. If you started from scratch, you would encounter the same bugs and edge cases, and end up with a similar amount of code bloat.

So think about that when you&rsquo;re making decisions in writing code.

a good example of this is inside of a framework like bootstrap they made classes like `.hidden` and `.visible` there is no problem with the hidden class but the visible class is ambigous because you might want a element with the display of `block`, `inline-block`, `table`, or any of the other types.

We also try to take this approach with state classes like having `.navigationbar__nav--is-hidden` being applied in the markup and then removed via JS.

This is a little more work, but ultimately saves you from headaches and code refactors for when you introduce new features.