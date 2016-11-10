*My machine is a Macbook Pro running OSX El Capitan. I am using bash. As such, all instructions going forth is tested for this environment.*

Dependencies
--------

- Node.js v6.9.1
- npm v3.10.8

Setup
-----

*I find installing nvm to be the best way to install node quickly from the terminal. nvm is also just a great tool for managing different versions of node that a project may require. I hope this is allowed as part of the challenge! Otherwise you can also install node by downloading a pkg [here](https://nodejs.org/en/).*

1. Install nvm: https://github.com/creationix/nvm#install-script
1. Install node version 6.9.1: `nvm install 6.9.1`
1. Make sure you are in the project directory's root. Install node modules: `npm install`


Running tests
-------

    npm test

Remarks
-------------

I decided on a pure function approach rather than object oriented because Javascript lends itself nicer to functional programming than object oriented programming in my opinion.

I decided to go with passing in an object as the main input instead of positional arguments because I wanted two of the parameters to be optional. It's a bit nicer to allow for optional parameters this way, so the caller of the function doesn't have to pass in nulls as arguments.

I made the decision early to convert all the prices to cents before doing any operations. This practice was drilled into me when working at Wave. We want to avoid doing arithmetic with floating points as that is imprecise compared to doing whole number arithmetic.

I have three main calculation functions `calculateFlatMarkup`, `calculatePersonsMarkup`, `calculateMaterialsMarkup` which handle the calculations for the different types of markups. I could have made them a bit more generic but I decided that was not necessary at the moment and it is easy enough to refactor for that case.

I stored the data such as materials and markup values in the constants file just for ease of access and to prevent magic numbers from being everywhere.
