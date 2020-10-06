# MealScheduler
The overall goal of this project is to design a free-to-use meal plan web page for organizations to use instead of an excel sheet. The idea was inspired by the Campus Cooks app many organizations use to schedule and plan meals for their members. It informs members of the meals for the upcoming week, allows them to rate past meals, and schedule when they are eating the meal for the day to prevent food waste. The caveat to their design is that it requires organizations to hire chefs from Campus Cooks in order to use their app. Our goal is to make similar software so that chefs are able to easily plan for the number of members who will be eating and make accommodations for food allergies, substitutions, etc.

### OVERVIEW

The overall goal of this project is to design a free-to-use meal plan web page for organizations to use instead of an excel sheet. The idea was inspired by the Campus Cooks app many organizations use to schedule and plan meals for their members. It informs members of the meals for the upcoming week, allows them to rate past meals, and schedule when they are eating the meal for the day to prevent food waste. The caveat to their design is that it requires organizations to hire chefs from Campus Cooks in order to use their app. Our goal is to make similar software so that chefs are able to easily plan for the number of members who will be eating and make accommodations for food allergies, substitutions, etc.

### GOALS

1. Create a user-view of the web app which will allow users to contact their chef, rate their meals, look at their weekly menu, and request late plates.
2. Create a chef-view of the web app which will allow chefs to see who will be eating at meals, their needed accommodations, schedule meals for following weeks, and update information     as needed.

### SPECIFICATIONS

* Most likely use react to build UI’s without having to handle most of the frontend stuff using basic HTML and CSS.

* Use AWS as the DB store, and AWS S3 buckets to provide triggers for our app. Host on amplify for MVP.

* Use AWS lambda functions to pull necessary data from API’s to merge into view tables.

### PRIORITIES

##### Create an MVP

Create the necessary views and pages required for the app to viably replace an excel spreadsheet in usability. This would mean working out the views and making sure they display data correctly across them. The hardest part of the project.

##### Optimize the web app for mobile devices

One of the biggest problems with spreadsheets is their poor optimization for mobile devices. As most students use their phones to view weekly information, it would be first priority to make the web app easily accessible / viewable on phones. This means developing in a mobile environment first and transitioning that to load correctly on computers. In Chef’s view this is less important because they’ll most likely be using a computer when entering information in as necessary.