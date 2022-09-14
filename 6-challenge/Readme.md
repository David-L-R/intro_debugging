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

### Bug 2

Choose button (the button that is in every character card) should choose filter all other characters.

The issues:

- pressing on it only works for the first character (Harry potter)
- does not work for any card

### Bug 3

The issues:

- Reset button does not change the select input back to "Select all".

### Bug 4

The reset button used to change the select inputs back to "Select all".
But even when it did, we still have the issues.

We expect these issues to come back once bug #3 is fixed.

The issues:

- Although reset button resets the input, not all characters are shown!

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

### Bug 6 (Ninja)

Only when bug #2 was fixed (pressing on "choose" button should filter only one character).

Filtering characters using the dropdown and filter button make the choose button not to work! 🤯

Desired behavior: after filtering, choose button should filter only one character.
