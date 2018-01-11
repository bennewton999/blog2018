---
title: "Alamo"
logo: "/logos/alamo.svg"
postType: "work"
date: "1/1/2013"
---

I designed and developed a Booking Site for Alamo Rent-a-Car that was very similar to the site I did for Enterprise.  The site was developed as an AngularJS powered Single Page App (SPA) and connected to a proprietary API on the back-end for live booking info such as availability and pricing.  For Alamo we added some animated transitions between steps making for a very fluid experience.

Related to this project, I created a framework for the the Client to create dynamic HTML5 banners that would show content based on search terms and the country searched by the end user. These banners would deep link to the European Alamo site above with the info known from the banner already selected.

I built a script that allowed us to deploy updates to the site to AWS S3 with a simple CLI and clear the cache on CloudFront making for easy and quick updates.

Six versions of the site were deployed for different European destinations and in 4 different languages.  We could deploy one or all depending on our needs.

**Role:** Lead Developer/Architect [@WMI](http://www.worldmedia.net)

**Platform:** AngularJS

**Tools Utilized:**

* Greensock
* AWS S3
* AWS CloudFront
* AWS JS API