---
title: "Deploy your Gatsby.js Site to AWS S3"
date: "2017-11-24"
category: "tech"
postType: "post"
tags:
    - aws
    - programming
    - gatsby
---

Deploy your [Gatsby.js](https://www.gatsbyjs.org/) site to AWS S3 and clear CloudFront cache with one simple command.


````yarn run deploy````

First, let's get our AWS components we need for this set up.

## Set Up AWS S3 Bucket

Set up a new S3 Bucket and make sure you mark the bucket for hosting a website in it's properties.

<a href="http://bennewton.io/3H3b192O3R23" target="_blank"><img src="https://d3vv6lp55qjaqc.cloudfront.net/items/2a2s082V2K3m291b1I0l/Image%202017-11-25%20at%201.08.17%20PM.png" style="display: block;height: auto;width: 100%;"/></a>

## Set Up AWS CloudFront

Add index.html as the default root object.

Set the alternate CNAME to your domain (blog.benenewton.com in my case)

<a href="http://bennewton.io/07181B1y353n" target="_blank"><img src="https://d3vv6lp55qjaqc.cloudfront.net/items/0b3b3F0J2v2v222Q0O0s/Image%202017-11-25%20at%201.02.16%20PM.png" style="display: block;height: auto;width: 100%;"/></a>

Important: Use the actual domain name of the S3 bucket so it resolves to index.html.  This will
avoid errors when a visitor accesses one of your pages directly without loading the home page first.

<a href="http://bennewton.io/2d0I3d1p1B0X" target="_blank"><img src="https://d3vv6lp55qjaqc.cloudfront.net/items/151U3h2X120y11383u2h/Screen%20Shot%202017-11-25%20at%2012.51.51%20PM.png" style="display: block;height: auto;width: 100%;"/></a>

Get domain name for...

## Set Up DNS

Set up a CNAME record to point point to the CloudFront domain name.  In my case, I am using AWS Route 53.

<a href="http://bennewton.io/0V1U0R1C0M1l" target="_blank"><img src="https://d3vv6lp55qjaqc.cloudfront.net/items/2R1J3T3A2E3H2C2f3P1C/Image%202017-11-25%20at%201.42.53%20PM.png" style="display: block;height: auto;width: 100%;"/></a>

Now that our AWS components are ready, let's go into our Gatsby.js project and make the additions we need
to get this rolling.

## Add AWS-Deploy

We're going to add a couple of components to our webpack build.  [https://github.com/import-io/s3-deploy](S3-Deploy) and aws-cloudfront-invalidate.

From the command line in the root of your Gatsby.js project, run the following:

````yarn add s3-deploy````

````yarn add aws-cloudfront-invalidate````

## Update package.json

Now, let's add the commands we need so we can deploy from the command line.

Add the following properties to the ````scripts```` object in your package.json

```javascript
    "deploy": "gatsby build --prefix-paths && s3-deploy './public/**' --cwd './public/' --bucket [your bucket name]  --deleteRemoved --gzip && npm run clear",
    "clear": "aws-cloudfront-invalidate [your CloudFront Distribution ID]"
```

## That's It

Run ````yarn run deploy```` and you should see your site build and deploy,
then a cache clear sent to CloudFront.  When that is complete, you should see your latest code live.
