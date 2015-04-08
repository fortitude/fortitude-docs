# Architecture
CSS Sucks, thats why Fortitude is built on top of some of the best conceptual layers that have hit the industry to save you from the issues of CSS. Things like **OOCSS**, **BEM**, **Vertical Rhyhtm** **Mobile First**, **self contained components** and **Don&#x27;t fight the browser**.

## OOCSS &mdash; Object Oriented CSS
The purpose of Object-Oriented CSS is to create reusable components that ensure consistency among these elements wherever they may be used.

It allows you to predefine certain structural properties such as `padding`, `margin`, alignment, and `font-size` that can then be reused for additional visual representations.

## BEM &mdash; Block, Element, Modifier
BEM is a front-end naming methodology that gives meaning to your CSS Class Names so other developers can easily understand the associations between your CSS Objects.

The naming convention follows this pattern:

```scss_example
.block {}
.block__element {}
.block--modifier {}
```

* `.block` represents the higher level of an abstraction or component.
* `.block__element` represents a child of `.block` that helps form `.block` as a whole.
* `.block--modifier` represents a different state or version of `.block`.

> Read more about BEM at: [MindBEMding &mdash; getting your head &rsquo;round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

## Vertical Rhythm
Vertical rhythm is a grid that guides the user's gaze comfortably through your content by ensuring consistent, predictable vertical spacing between all elements.  

## Mobile First
This has come to be an industry standard and with very good reason.

A lot of the time when going from desktop to a mobile design it feels like your &ldquo;shoe horning&rdquo; the mobile experience in.

Probably because your working with a foundation that was never optimized. If you&lsquo;ve ever spent time optimizing something you know its easier to start from nothing and test each piece of code as your writing it versus building the whole application and testing the entire thing after its done being built.

If you&rsquo;re thinking about building a responsive site then do it mobile first so you save yourself headaches when trying to optimize for a great mobile experience.

## Don&#x27;t fight the browser
Your web browser is built by people. Smart people, and what you might think is a defect in your CSS there actually might be a very good reason something was set as a default.
Rather than just wiping all default browser styles out you should make sure you understand why something is the way it is.

It&rsquo;s the same idea when you start a new job and start thinking this &ldquo;Old code is crap&rdquo;. Well, there actually might be a very good reason why the old code is the way it is.
You might end up learning that the code was written to initially be very useful.

So think about that when you&rsquo;re making decisions in writing code.