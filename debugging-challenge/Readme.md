# Harry Potter Application

**TIP:** to see this file with styling, press on the right mouse button and "open preview".

## Overview

You are going to use existing application. This application is ridden with bugs.

You will use the list of requirements to understand how each feature should work, and then you are going on a detective job to figure out how to fix each issue.

If you are stuck on a specific issue for too long, move forward and try to tackle another one. They are not sorted by difficulty.

## Design

We have one page to the application, so far.

This page is the dashboard:
<img width="1920" alt="dashboard" src="https://user-images.githubusercontent.com/31222514/190127126-aefd1fff-658e-4b06-8941-1d0148a28cd4.png">

On the dashboard we can see all characters in Harry Potter.

We should be able to filter the character according to different criteria. All filters should apply and be exclusive.

Meaning, if we chose:

- Human
- Gryffindor
- Female

We should get all female humans from the house Gryffindor:
<img width="1911" alt="filter" src="https://user-images.githubusercontent.com/31222514/190127140-6278e280-bb9f-4351-b8fd-990452890372.png">

The reset button should do two things:

1. Show all characters again
2. Reset the dropdown to show "select all" again (because we "clear" the filters)

<img width="297" alt="reset" src="https://user-images.githubusercontent.com/31222514/190127086-11607cb2-8a30-4e03-98e7-5849e3420f79.png">

We also have a choose random button. This once should choose a different character each time.

<img width="1919" alt="choose random" src="https://user-images.githubusercontent.com/31222514/190127101-b573ae52-6b8c-4244-b454-dfc7ea4e7611.png">

Once there is only one character left, either by choosing a random one or by filtering all other possible options, we should not see the "choose" button on the card (because if there is only one character, there is nothing to choose anymore).

## Known Bugs

### Bug 1

Random button only works once.

The issues:

- When pressing the second time, it chooses the same character.

<img width="930" alt="choose random" src="https://user-images.githubusercontent.com/31222514/190202196-db4eeee7-5480-4ec2-ba26-82333b662582.png">

### Bug 2

Choose button (the button that is in every character card) should choose filter all other characters.

The issues:

- pressing on it only works for the first character (Harry potter)
- does not work for any card

<img width="316" alt="choose button" src="https://user-images.githubusercontent.com/31222514/190202274-6d4f230c-f791-4abc-83b6-55401b0d856a.png">

### Bug 3

The issues:

- Reset button does not change the select input back to "Select all".

<img width="331" alt="reset button" src="https://user-images.githubusercontent.com/31222514/190202312-c91d51bf-55ad-418f-99ea-54b6e089f3cf.png">

### Bug 4

The reset button used to change the select inputs back to "Select all".
But even when it did, we still have the issues.

We expect these issues to come back once bug #3 is fixed.

The issues:

- Although reset button resets the input, not all characters are shown!

To test this, press on a random character, and then reset. You will see that the random character is still there instead of the entire list.

<img width="974" alt="reset list" src="https://user-images.githubusercontent.com/31222514/190202384-544fc0bc-610c-4a1b-a058-32906569adb1.png">

### Bug 5 (Advanced)

Filter functionality does not work. When any one of the inputs is on "Select all", it does not show anything.

If all inputs are chosen (let's say: "Gryffindor", "female" and "human"), it only filters according to "human".

For some reason it does not take into account all of the inputs...

Desired behavior:
If we chose

- Gryffindor
- Female
- Human

We should only see cards that are human females from the house Gryffindor.

<img width="948" alt="filter all" src="https://user-images.githubusercontent.com/31222514/190202554-274e4848-3cfb-46d5-9d3b-9d2551ffdc7f.png">

### Bug 6 (Ninja)

Only when bug #2 was fixed (pressing on "choose" button should filter only one character).

Filtering characters using the dropdown and filter button make the choose button not to work! 🤯

Desired behavior: after filtering, choose button should filter only one character.

## Features

### 1 - Advanced filter

Pressing on tags will filter according to the tag.

So pressing on tag "Male" will filter only males :)

### 2 - search input

Search input will allow user to find by name

### 3 - search input 2.0

If we filtered the list, the search will find only from filtered list

### 4 - search input 3.0

Can find multiple fields (name, house, gender...)

### 5 - Your own

What would you like to add? :)
