'use strict';

window.Bahmni = window.Bahmni || {};
Bahmni.Appointments = Bahmni.Appointments || {};

require("./lib/jquery/jquery-ui-1.10.4.custom.min.css");
require("ng-dialog/css/ngDialog.min.css");
require("ng-dialog/css/ngDialog-theme-default.min.css");
require("ng-dialog/css/ngDialog-theme-plain.min.css");

require("./styles/appointmentScheduling.css");
require("fullcalendar-scheduler/dist/scheduler.min.css");
require("fullcalendar/dist/fullcalendar.min.css");
require("angular-ivh-treeview/dist/ivh-treeview.css");
require("angular-ivh-treeview/dist/ivh-treeview-theme-basic.css");
require("ng-tags-input/build/ng-tags-input.bootstrap.min.css");
require("ng-tags-input/build/ng-tags-input.min.css");


require("lodash");
require("./lib/jquery/jquery-ui-1.10.4.custom.min.js")
require("./lib/jquery/jquery.cookie.custom");
require("./lib/modernizr.custom.80690.js");
require("ng-tags-input");


require("angular-sanitize");
require("moment/min/moment-with-locales.min.js");
require("ng-infinite-scroll");
require("angular-bindonce/bindonce");
require("select2");
require("angular-ui-select2/src/select2");
require("@uirouter/angularjs");
require("stacktrace-js/stacktrace");
require("ng-clip");
require("angular-translate");
require("angular-cookies");
require("angular-translate-loader-static-files");
require("angular-translate-storage-cookie");
require("angular-translate-storage-local");
require("angular-translate-handler-log");
require("ng-dialog/js/ngDialog");
require("angular-elastic/elastic");
require("angular-ivh-treeview")
require("./lib/angular-workers/dist/angular-workers");

require("./common-constants");
require("./route-errorhandler");

require("bahmniapps-commons/dist/bahmni-util-commons");
require("bahmniapps-commons/dist/authentication");
require("bahmniapps-commons/dist/bahmni-config-commons");
require("bahmniapps-commons/dist/bahmni-appframework-commons");
require("bahmniapps-commons/dist/bahmni-models-commons");
require("bahmniapps-commons/dist/bahmni-patient-commons");``
require("bahmniapps-commons/dist/ui-helper");
require("bahmniapps-commons/dist/bahmni-domain-commons");
require("bahmniapps-commons/dist/bahmni-patientsearch-commons");
require("bahmniapps-commons/dist/bahmni-logging-commons");
require("bahmniapps-commons/dist/displaycontrols");
require("bahmniapps-commons/dist/bahmni-i18n-commons");
// require("../common/debugUiRouter.js");



require("angular-ui-calendar/src/calendar.js");
require("fullcalendar/dist/fullcalendar.min.js");
require("fullcalendar-scheduler/dist/scheduler.min.js");

angular.module('bahmni.appointments', ['ui.router', 'bahmni.common.config', 'bahmni.common.uiHelper', 'bahmni.common.i18n',
    'bahmni.common.domain', 'bahmni.common.displaycontrol.patientprofile', 'authentication', 'bahmni.common.appFramework', 'bahmni.common.routeErrorHandler',
    'httpErrorInterceptor', 'pasvaz.bindonce', 'infinite-scroll', 'bahmni.common.util', 'ngSanitize', 'pascalprecht.translate',
    'ngCookies', 'bahmni.common.patient', 'bahmni.common.logging', 'ui.calendar', 'monospaced.elastic', 'ivh.treeview', 'ngTagsInput', 'ngDialog']);


require("./app.js");
require("./initialization.js");
require("./appointmentServiceInitialization.js");
require("./appointmentInitialization.js");
require("./appointmentConfigInitialization.js");
require("./constants.js");
require("./models/appointment.js");
require("./models/appointmentService.js");
require("./models/appointmentServiceViewModel.js");
require("./models/appointmentViewModel.js");
require("./directives/timeValidator.js");
require("./directives/dayCalendar.js");
require("./directives/weekdaySelector.js");
require("./directives/serviceAvailability.js");
require("./directives/serviceTypes.js");
require("./directives/colorPicker.js");
require("./directives/datePicker.js");
require("./directives/weekPicker.js");
require("./directives/multiSelectAutocomplete.js");
require("./directives/patientSearch.js");
require("./services/appointmentsServiceService.js");
require("./services/specialityService.js");
require("./services/appointmentsService.js");
require("./services/calendarViewPopUp.js");
require("./services/appointmentCommonService.js");
require("./services/checkinPopUp.js");
require("./controllers/admin/deleteAppointmentServiceController.js" );
require("./controllers/appointmentsHeaderController.js");
require("./controllers/manage/appointmentsManageController.js");
require("./controllers/admin/allAppointmentServicesController.js");
require("./controllers/manage/appointmentsCreateController.js");
require("./controllers/admin/appointmentServiceController.js");
require("./controllers/manage/calendar/appointmentsDayCalendarController.js");
require("./controllers/admin/allAppointmentServicesController.js");
require("./controllers/manage/allAppointmentsController.js" );
require("./controllers/manage/calendar/appointmentsCalendarViewController.js" );
require("./controllers/manage/list/appointmentsListViewController.js" );
require("./controllers/manage/appointmentsSummaryController.js" );
require("./controllers/manage/appointmentsFilterController.js");
require("./filters/appointmentsFilter.js");