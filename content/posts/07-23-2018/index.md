---
title: "Never Make Another Crappy Commit Message Again"
date: "2018-07-23"
category: "tech"
postType: "post"
tags:
    - programming
    - git
    - setup
---

It's late. You've been through post after post on StackOverflow. You can't find
anything that resembles your bug. Hours pass and behold, you have solved your
issue and you are high-fiving yourself for finally figuring it out.

Now you have to commit the code to the repo before before you fall asleep at
your desk. It's time to enter your commit message...

```
>git commit -m "fixed bug"_
```

😨 No! What? You won't even remember what you did when you wake up in the
morning much less 6 months from now.

I've been guilty of this, especially on my personal projects. Occasionally I'll
dress it up by describing the bug.

```
>git commit -m "Fixed F'ing Bug"_
```

### What should be in a commit message?

Simple, the commit message is a short description of the changes. Something that
you and future you will understand as well as other teamates on the project.

Now, I realize most commits speak for themselves, a reason for a color change in
CSS file or a property update in a JSON file may seem obvious to you. But future
you will not be that smart. No matter how simple something may seem, future you
may think a change was made for a completely different reason then you meant. So
a description is a necessity.

So how do you make a good commit every time? Remind yourself.

### The Commit Template

I've been using git for years and I never used a custom commit template before.
Then I came across
[this article](https://dev.to/shreyasminocha/how-i-do-my-git-commits-34d) on
[DEV.to](DEV.to) and I realized this was just what I needed to kick myself at
each commit so I didn't continue to enter useless commit messages.

### How I set up My Git Template

Set up the template in ~/.git-commit-template.txt and copied the contents of
[this Gist](https://gist.githubusercontent.com/adeekshith/cd4c95a064977cdc6c50/raw/4c9c61000f15f1e8927628bcd2e506c45bf1abc2/.git-commit-template.txt)
to the file.

`gist:adeekshith/cd4c95a064977cdc6c50`

I then ran the following which will tell git to use the above file as the commit
message template each time you commit.

```
git config --global commit.template ~/.git-commit-template.txt
```

I will tweak the contents of the template to my own liking depending on the
project I'm on.

### Notes

Notice the "#" before every line? That is a commented line and will not be
included in your commit message.

You can even include a Git template to be used with the repo if you want to
require everyone to use it.

The one down side I have run into is when using VSCode, I like to use the
included git tools and the input provided for the commit message is only one
line. It does not show the commit template. I wish this was configurable, but I
have been unable to find a way to change it. So until I do, I have to get in the
habit of running git commit -m from the command line.

I hope this helps you get just a step closer being an organized developer that
your team is thrilled to have on board.

### Other Resources

[Better Commit Messages with a .gitmessage Template](https://robots.thoughtbot.com/better-commit-messages-with-a-gitmessage-template)

by [Matt Sumner](https://robots.thoughtbot.com/authors/matt-sumner)

---

[Git commits: An Effective Style Guide](https://dev.to/pavlosisaris/git-commits-an-effective-style-guide-2kkn)

by [Paul Isaris](https://dev.to/pavlosisaris)
