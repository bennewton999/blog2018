---
title: "Deploy your Gatsby.js Site to AWS S3"
cover: "/logos/matt-artz-353290.jpg"
date: "11/24/2017"
category: "tech"
tags:
    - aws
    - programming
    - gatsby
---

Deploy your [Gatsby.js](https://www.gatsbyjs.org/) site to AWS S3 and clear CloudFront cache with one simple command.


````yarn run deploy````

First, let's get our AWS components we need for this set up.

### Set Up AWS S3 Bucket

Set up a new S3 Bucket and make sure you mark the bucket for hosting a website in it's properties.

<a href="http://bennewton.io/3H3b192O3R23" target="_blank"><img src="https://d3vv6lp55qjaqc.cloudfront.net/items/2a2s082V2K3m291b1I0l/Image%202017-11-25%20at%201.08.17%20PM.png" style="display: block;height: auto;width: 100%;"/></a>

### Set Up AWS CloudFront

Add index.html as the default root object.

Set the alternate CNAME to your domain (blog.benenewton.com in my case)

<a href="http://bennewton.io/07181B1y353n" target="_blank"><img src="https://d3vv6lp55qjaqc.cloudfront.net/items/0b3b3F0J2v2v222Q0O0s/Image%202017-11-25%20at%201.02.16%20PM.png" style="display: block;height: auto;width: 100%;"/></a>

Important: Use the actual domain name of the S3 bucket so it resolves to index.html.  This will
avoid errors when a visitor accesses one of your pages directly without loading the home page first.

<a href="http://bennewton.io/2d0I3d1p1B0X" target="_blank"><img src="https://d3vv6lp55qjaqc.cloudfront.net/items/151U3h2X120y11383u2h/Screen%20Shot%202017-11-25%20at%2012.51.51%20PM.png" style="display: block;height: auto;width: 100%;"/></a>

Get domain name for...

### Set Up DNS

Set up a CNAME record to point point to the CloudFront domain name.  In my case, I am using AWS Route 53.

<a href="http://bennewton.io/0V1U0R1C0M1l" target="_blank"><img src="https://d3vv6lp55qjaqc.cloudfront.net/items/2R1J3T3A2E3H2C2f3P1C/Image%202017-11-25%20at%201.42.53%20PM.png" style="display: block;height: auto;width: 100%;"/></a>

Now that our AWS components are ready, let's go into our Gatsby.js project and make the additions we need
to get this rolling.

### Add AWS-Deploy

We're going to add a couple of components to our webpack build.  [https://github.com/import-io/s3-deploy](S3-Deploy) and aws-cloudfront-invalidate.

From the command line in the root of your Gatsby.js project, run the following:

````yarn add s3-deploy````

````yarn add aws-cloudfront-invalidate````

### Update package.json

Now, let's add the commands we need so we can deploy from the command line.

Add the following properties to the ````scripts```` object in your package.json

```javascript
    "deploy": "gatsby build --prefix-paths && s3-deploy './public/**' --cwd './public/' --bucket [your bucket name]  --deleteRemoved --gzip && npm run clear",
    "clear": "aws-cloudfront-invalidate [your CloudFront Distribution ID]"
```

### That's It

Run ````yarn run deploy```` and you should see your site build and deploy,
then a cache clear sent to CloudFront.  When that is complete, you should see your latest code live.

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@mattartz?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Matt Artz"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title></title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Matt Artz</span></a>