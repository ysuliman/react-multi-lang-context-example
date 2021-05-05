# Multilanguage React App with Typescript and Context API

I created this as an example for me to use on a multilanguage site I am working on.

The content to be switched on language change is stored within an object with language ISO codes as keys. Upon language change, the ISO key is changed in the app's context. All children that are subscibed to the change via useContext are then updated.

Setting the language in context is carried out with an immer reducer, which will allow for more complex functionality upon state change I will need on the site I made this for.
