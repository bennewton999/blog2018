---
title: "Norwegian Cruise Line"
logo: "/logos/norwegian-cruise-line.svg"
postType: "work"
date: "1/1/2012"
---
I designed and developed an uncoupled CMS for NCL that they use to deliver the micro-sites for their new ship launches.  Having been a part of 3 of the sites while at WMI, we moved away from a PHP based CMS after the first to a light-weight AngularJS front-end that consumed all of it's content from a headless WordPress CMS.

This was before WordPress had a REST API available.  The back-end team on the project modified WordPress to deliver NCL a CMS that not only allowed them to provide content, but to use specialized components to structure the components and pages for the site in any particular order they needed.

The front-end would consume the JSON data from WordPress based on the path and then use the Angular components to build the page out and populate the content.  This made for a very efficient and fast client side experience.

By building a decoupled front end experience, we were able to deploy the same front end for different countries and the back end allowed us to deliver content for each.  This allowed us to deploy front end code changes whenever necessary and to one or all the countries making the maintenance very flexible.

**Role:** Lead Developer/Architect [@WMI](http://www.worldmedia.net)

**Platform:** AngularJS and WordPress decoupled CMS

**Tools Utilized:**

* AngularJS
* AWS S3
* AWS JS API
* WordPress
