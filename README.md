# [Tour-It Yourself](https://github.com/Astuary/TourItYourself)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) 

[YouTube Demo](https://youtu.be/ntTzYgFtgfc)

Tour-it Yourself dashboard is a beautiful web-app made with [Bootstrap 4](http://getbootstrap.com/), [Reacstrap](https://reactstrap.github.io/) and [React](https://reactjs.org/) ([create-react-app](https://github.com/facebook/create-react-app)), it extends the functionality of [Radar.io](https://radar.io). Radar.io provides SDKs and APIs for geofencing, trip tracking, geocoding, and search; to solve Shopping/Retail, Finances/Banking, Food/Dining, Travelling etc. problems related to geography or consumer's location. 

![Product Gif](./src/assets/demo/Dashboard.png)

First we mention the use of GeoFencing, Tracking, Searching, Distance calculating, et cetera's applications in real life:

🗺 Geofencing: Send a customized or tailored product advertisement to the consumers if they are nearby the store.

🚦 Tracking: A person's stolen items or credit cards can be tracked. Alarms can be raised if a consumer is not aware about their stolen credit card but as soon as there's an attempt to withdraw money, Radar.io can detect that the consumer is too far to have made that transaction.

🔎 Searching: If we can track a thing, we can search for it and require it. May it be your misplaced car keys or a wedding ring, nothing will be lost forever between the folds of your couch again.

🧮 Distance: Precise distance between two locations can be calculated, taking into account the weather, the traffic, and the user's tendencies in driving.

👨🏼‍💻 Geocoding: IP addresses are enough to get the location of a device. This can be put to good use in tracking down the crimes.

🌆 Region exploration: Information about the region you are in, its landmarks, famous food shops, shopping centers can be extracted. Boosting up the Tourism Industry.

🏗 Places: Get information about a store, what they are selling, are there any discounts, what's famous among their products or services.

We have adaptively designed this user-friendly dashboard [Credit](https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md), which combines colors that are easy on the eye, spacious cards, beautiful typography, and graphics. Our goal was to be transparent with the end user in telling them what exactly we are tracking and why. It is light and easy to use, and also very powerful. Simplicity is the hardest thing to implement.

React.js comes packed with all plugins that you might need inside a project and with the documentation on "how to get started". This web-app features over 16 individual components, giving you the freedom of choosing and combining; experimenting with the different styles from the thousands of possible combinations. All components can take variations in color, that you can easily modify using SASS files. You will save a lot of time going from prototyping to full-functional code because all elements are implemented.

We thought about everything, so this dashboard comes with 2 versions, Dark Mode and Light Mode.

Special thanks go for the owners of this plugin:
- [Perfect Scrollbar](http://utatti.github.io/perfect-scrollbar/) for the nice scrollbars for windows.

**Example Pages** We wanted to fully display the power of Radar.io, so the app comes packed with examples showing you how to use the components, and the Radar.io API.

## Table of Contents

* [Functionality](#functionality)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Functionality

| Dashboard Map | Dashboard Memo and Suggestions | Events | Notifications | Security | User Settings and Preferences |
| --- | --- | --- | --- | --- | --- |
| [![Dashboard Map](./src/assets/demo/Dashboard.png)](https://) | [![Dashboard Memo and Suggestions](./src/assets/demo/DashboardTables.png)](https://) | [![Events](./src/assets/demo/Events.png)](https://) |  [![Notification](./src/assets/demo/Notifications.png)](https://) | [![Security](./src/assets/demo/Security.png)](https://) | [![User Settings and Preferences](./src/assets/demo/User.png)](https://) |

## Demo

[YouTube Demo](https://youtu.be/ntTzYgFtgfc)

- **Dashboard Map**: On the dashboard, we can see that Radar.io is detecting user's current location. User can choose the radius within which they should be sent recommendations. Once the radius is set, shops nearby will be suggested on the following criteria:
1. if other user's with similar preferences have also visited this shop, or 
2. if the shop is advertising some products or services with attractive offers.

- **Dashboard Memo and Suggestions**: The suggestions will be shown in form of a checklist, making it easier for the users to keep track of the next places to visit. The shops will be reviewed by other users and we can also see how far each shop is, making it easier for the customer to plan their trip.

- **Events**: We have used Radar.io to geofence all the shops and the users, while Google Cloud Platform has been used to utilize google maps api to draw the markers and regions. A user can also be shown what are the current common events going on in the area tehy are in.

- **Security**: Next is security where they can link a digital transaction method to be tracked. The app will notify the user of all the transcations made, along with how far the user was at the time they were made. If there are transactions made so far away from the user that they are suspiciously fraudulent and out-of-nature for the user, the app will send alerts.

- **Notifications**: These are the 5 types of notifications: which are ranging from simple product offers to danger alerts for suspicious transaction activities.

- **User Settings and Preferences**: With radar.io insights api, the app can learn the user's day-to-day commuting routes, it can also learn whether the user is at home, or office or in transit, by looking at their location. The home to office and office to home route times will also be estimated by the current weather condition, traffic, and user's driving patterns.

## Quick start

Quick start options:

- Clone the repo: `https://github.com/Astuary/TourItYourself.git`.
- [Download from Github](https://github.com/Astuary/TourItYourself/archive/master.zip).
- [Download the template from Creative Tim](https://www.creative-tim.com/product/black-dashboard-react).


## Documentation
This README file will be the chief source of documentation, the code has been well-commented as well. We hope that the React app and the API documentation itself is comprehensive and intuitive enough for the users.


## File Structure

Within the download you'll find the following directories and files:

```
black-dashboard-react
.
├── package.json
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── Documentation
│   └── documentation.html
├── github-assets
│   └── react.svg
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo-white.svg
    ├── logo.svg
    ├── routes.js
    ├── assets
    │   ├── css
    │   ├── demo
    │   ├── fonts
    │   ├── img
    │   └── scss
    │       ├── black-dashboard
    │       │   ├── bootstrap
    │       │   │   ├── mixins
    │       │   │   └── utilities
    │       │   ├── custom
    │       │   │   ├── cards
    │       │   │   ├── mixins
    │       │   │   ├── utilities
    │       │   │   └── vendor
    │       └── black-dashboard.scss
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Navbars
    │   │   ├── AdminNavbar.js
    │   │   └── RTLNavbar.js
    │   ├─── Sidebar
    │   │   └── Sidebar.js
    │   └── Slider
    │       └── Slider.js
    ├── layouts
    │   ├── Admin
    │   │   └── Admin.js
    │   └── RTL
    │       └── RTL.js
    ├── variables
    │   └── charts.js
    └── views
        ├── Dashboard.js
        ├── Events.js
        ├── Notifications.js
        ├── Security.js
        └── UserProfile.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources
- Radar.io: https://radar.io/
- Radar.io API: https://radar.io/documentation/api
- Google Maps JavaScript API: https://developers.google.com/maps/documentation/javascript/
- Download Page: https://www.creative-tim.com/product/black-dashboard-react
- Template: https://demos.creative-tim.com/black-dashboard-react/#/documentation/tutorial
- Issues: [Github Issues Page](https://github.com/astuary/tourityourself/issues)

## Reporting Issues
We use GitHub Issues as the official bug tracker for the Tour-it Yourself App. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the app. Check the CHANGELOG.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please contact us.

## Licensing

- Copyright 2020 Creative Tim (https://www.creative-tim.com)
- Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

## Useful Links

This project is deployed on [site](https://tourityyourself.web.app)

## Acknowledgement

Thank you HackUMass VIII for hosting the fun virtual hackathon. I look forward to coming here next year. Thank you to MLH for having cool resources like Radar.io and GCP so I could build this geofencing app for the tourists.
