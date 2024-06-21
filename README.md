# Reproducible example
This example demonstrates issues while using expo router drawer navigation and dynamic routes

# Steps to reproduce
1. Click push random id - you will be redirect to dynamic route containing some random id
2. Click push random id again several times, each click will push new history state
3. Click go back button, you will be redirected to home page at once

# Expected result
Clicking go back button should navigate back to previous route, route with previous id in this case

# Actual result
Clicking go back results in navigate to home page omitting all the previous pages

# Notes
Using `backBehavior="history"` does not help in this case