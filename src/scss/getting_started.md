# Getting Started

**A word of caution:** Fortitude is primarily developed for the Ruby implementation of Sass. It appears to compile just fine on [node-sass / libsass](https://github.com/sass/node-sass), but we haven't implemented extensive verification for this yet.

* [Rails](#rails)
* [Node](#node)
* [Bower](#bower)
* [Setup](#setup)
* [Namespace](#namespace)
* [Colors and Variants](#colors-and-variants)
* [Variable Access](#variable-access)
* [Disabling Components](#disabling-components)

## <a id="rails"></a>Rails

1. add the gem to your gemfile
   `gem 'fortitude-sass'`
2. run `bundle install`

## <a id="bower"></a>Bower

1. `bower install --save fortitude-sass`
2. make sure `bower_components/fortitude-sass/app/assets/stylesheets` is in your Sass paths for your build system.

## <a id="node"></a>Node

1. run `npm install --save fortitude-sass`
2. make sure `node_modules/fortitude-sass/app/assets/stylesheets` is in your Sass paths for your build system.

## <a id="setup"></a>Setup

Import one of the two Fortitude scss files:

```scss
# include color variants such as badge--primary and navigationbar--inverse
@import 'fortitude/theme';

# only import the structural elements - themes and colors are up to you
@import 'fortitude';
```

## <a id="namespace"></a>Namespace

Fortitude gives you a namespacing option, to absolutely guarantee there will be no class name collissions. Or just to make it extremely obvious which classes are coming from Fortitude. This is turned off by default, but you can enable it by setting the following variable before importing the framework:

```scss
$fortitude-namespace: 'ft-';
```

Then all the Fortitude classes will be prefixed with that namespace: `ft-badge`, `ft-navigationbar`, `ft-text-input`.

## <a id="colors-and-variants"></a>Colors and Variants

The 6-color pallette of primary / success / info / warning / danger / inverse used in the default theme isn't for everyone. Changing the colors behind these variants is easy, but changing the names of these variants is also easy! Check out the `fortitude/theme/settings/_colors.scss` file, which lays out all the variants and options. Set any of these variables before importing the framework to change them. 

The `$fortitude-[name]-intents` variables let you specify which variants you want. If you add any name to the map, it will be applied to the relevant component. For example, adding `"violet": #AC41FF` to `$fortitude-colors` will give you a `text--violet` class with the appropriate color. Adding `"unusual": map-get($fortitude-colors, "violet")` to `$fortitude-color-intents` will give you a `text--unusual` class. Adding the relevant values to `$fortitude-box-intents` will set up the `box--unusual` class, with the same structure as the other box classes.

## <a id="variable-access"></a>Variable Access

All the Sass variables used in Fortitude are prefixed with `$fortitude-` to ensure you can use any variable name in your won Sass without conflicts. If you want to pull some of these variables out of the namespace, include one or both of the following files:

```scss
@import 'fortitude/settings/defaults/without-namespace';
@import 'fortitude/theme/settings/colors/without-namespace';
```

## <a id="disabling-components"></a>Disabling Components

Fortitude exposes variables to turn components on and off. This allows you to pick and choose which components you need for your app, and minimize generated css filesize. See `fortitude/settings/defaults/_with-all-features.scss` for a list of all the features you can turn off.