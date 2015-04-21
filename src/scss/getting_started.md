# Getting Started

## Rails Projects

1. add the gem to your gemfile
   `gem 'fortitude-sass'`
2. `bundle install`
3. rename `application.css` to `application.css.scss`
4. add an import statement `@import "fortitude";`
5. add a `_overrides.scss` in `app/assets/stylesheets/settings/` (this is where all over your overrides to fortitude will go)
6. import `@import "settings/overrides"` in the `application.css.scss`

## Non Rails Projects

check out the fortitude [starter project](https://github.com/fortitude/fortitude-docs)

## Extras

if you want a theme provided for you use `@import "fortitude/theme"` instead of `@import "fortitude"`