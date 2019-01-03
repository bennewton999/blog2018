---
title: 'NPM Calling Card'
date: '2019-01-02'
category: 'tech'
postType: 'post'
tags:
  - programming
  - npm
  - node
  - javascript
---

I've recently noticed a trend among some javascript developers in which they are publishing a simple [NPM](https://www.npmjs.com/) package that they use to share their contact information. I have seen this in the past but I'm not sure who's I saw first, I believe it may have been [Elijah Manor](https://github.com/elijahmanor/elijahmanor). After reading about it again on [this dev.to post](https://dev.to/wuz/setting-up-a-npx-username-card-1pip) by [Conlin Durbin](https://dev.to/wuz), I decided to create my own.

## Make Your Own

You can view my Repo on GitHub here:

https://www.github.com/bennewton999/bennewton

To make it your own, you can fork it and do as little as update the info in `myData.js` and `package.json` then publish as a new NPM module. Or you can go further and customize the text output with chalk, add your own data, etc. I used tagged template literals, so modifying the output is a breeze. You can just add a modifier like `{red ${name}}` to an output function to change the color and/or font variant.

I also added some ascii art for old times' sake (and because why not??). I originally used [image-to-ascii](https://www.npmjs.com/package/image-to-ascii) to generate the ascii art from a .png on my website, however an external dependency of [GraphicsMagick](http://www.graphicsmagick.org/) was required for it to work properly. So I removed it and copied the output to a file. I was unable to keep the color, which stinks. I would like to know how to keep the color referenced in the file, I'm not sure what format and how to output that, so if anybody has any ideas, let me know.

## See It In Action

To see it all in action, run the following from your command prompt:

```
npx bennewton
```

After a quick, temporary install, the downloaded npm module will display the following in your terminal leaving nothing behind on your drive.

![npx bennewton output](./bennewton-output.png)

The npx command downloads and runs a NPM module on your machine without installing it permanently. This is perfect for this type of text output module.

## What's It For?

Of course, this serves very little purpose, it's just for fun. After reading the artice, it reminded me of Apple II games from the 80s. These games were "cracked" and would have the "pirate's" name on the [splash screen](https://www.google.com/search?biw=1280&bih=767&tbm=isch&sa=1&ei=mLYrXOKbOK2Oggfu3qv4DA&q=apple+ii+cracked+games&oq=apple+ii+cracked+games&gs_l=img.3.0.35i39.5003.7495..7596...0.0..1.280.1585.6j3j3......1....1..gws-wiz-img.......0j0i30j0i8i30j0i24.cf9t7-cy9q0#imgrc=ZedDzc7KuxtS-M:) along with some BBS phone numbers where you could download other games. Those were the days...

So my thought was why don't we use theses calling cards as signatures for our own modules. We are downloading hundreds if not thousands modules as developers, most of the time knowing nothing about the author and paying little to no homage to them. A simple post-install script calling the author's own NPM calling card could be the answer to get them the recognition they deserve. I think it would be cool and at least make waiting for NPM installs more entertaining. Just a thought, what do you think?
