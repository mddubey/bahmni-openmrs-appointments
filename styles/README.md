## Differences with OpenMRS-Module-bahmniapps
Below has been the changes in libraries from OpenMRS-Module-bahmniapps

| Library | Change |
| ------  | ------------------- |
| ngDialog| Using `ng-dialog` instead. |
| jquery.cookie@1.4.0 | Upgraded to `1.4.1` since the existing version is not present in `NPM`. Manually changed the line 12 from `define(['jquery/jquery'], factory);` instead of `define(['jquery'], factory);`. [Reference link](https://github.com/facebook/create-react-app/issues/679#issuecomment-247928334)|
| angular-ui-router | Renamed to `@uirouter/angularjs`. |
| angular-bindonce | Using directly from github since the latest is not published in `NPM`. |
| ngInfiniteScroll@1.3.1 | Using `ng-infinite-scroll@1.3.0`, since this is the latest version on `NPM`. According to this [thread](https://github.com/sroze/ngInfiniteScroll) there are no code changes between `1.3.0` to `1.3.4`. |
| jquery-ui-1.10.4.custom.min | Using `jquery-ui-bundle@1.11.4` since the `jquery-ui` is not bundled by default. `1.11.4` is the oldest version on `NPM`  |

### TODO
Upgrade jquery from 1.x to 2.x so we can use `require('jquery')`. Not possible with jquery 1.x. References [Reference link](https://github.com/facebook/create-react-app/issues/679#issuecomment-247928334).