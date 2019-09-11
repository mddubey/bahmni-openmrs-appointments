## Differences with OpenMRS-Module-bahmniapps
We have moved away from bower and installing dependencies from NPM.
Below has been the changes in libraries from OpenMRS-Module-bahmniapps

| Library | Change |
| ------  | ------------------- |
| ngDialog| Using `ng-dialog` instead. |
| jquery.cookie@1.4.0 | Upgraded to `1.4.1` since the existing version is not present in `NPM`. Manually changed the line 12 from `define(['jquery/jquery'], factory);` instead of `define(['jquery'], factory);`. [Reference link](https://github.com/facebook/create-react-app/issues/679#issuecomment-247928334)|
| angular-ui-router | Renamed to `@uirouter/angularjs`. |
| angular-bindonce | Using directly from github since the latest is not published in `NPM`. |
| ngInfiniteScroll@1.3.1 | Using `ng-infinite-scroll@1.3.0`, since this is the latest version on `NPM`. According to this [thread](https://github.com/sroze/ngInfiniteScroll) there are no code changes between `1.3.0` to `1.3.4`. |
| jquery-ui-1.10.4.custom.min | Using `jquery-ui-bundle@1.11.4` since the `jquery-ui` is not bundled by default. `1.11.4` is the oldest version on `NPM`  |

## Global variables from library
Few libraries(angular, jquery) used in BahmniApps export global variables. Webpack doesn't support the idea of global variables by default. All these global variables are exported using `webpack.ProvidePlugin`. Check the `webpack.config.js` plugins section.

## Other Fixes
* According to [this issue](https://github.com/webpack/webpack/issues/2049), `webpack` doesn't work well with `angular 1`. There has been a fix provided for them using `exports-loader`. There were similar issues for `jquery 1`.

## Duplicate code
* Duplicated `error-routehandler`. It is a small utility and need not to be extracted in library. If we are putting more stuff, it can go to a library.
* Duplicated `openmrs-module-bahmniapps/ui/app/common/constants.js`. This can be merged with `appointments/constants.js`

## Running it with bahmni
* Clone the repo
* Run `npm install`
* RUN `npm run build`
* Take a backup of `/var/www/bahmniapps/appointments`.(vagrant)
* Replace content of `/var/www/bahmniapps/appointments` with generated `dist` folder content.(Vagrant)
* Go to bahmni Appointment scheduling UI. It should serve new appointments content.  