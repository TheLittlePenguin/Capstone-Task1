# Edge cases to test

1. Invalid login
2. Direct team-page access without login
3. Missing member photo
4. Long member blurb

## Outcomes

1. Entering an invalid login prevents logging in and returns an error message to the user.
2. Accessing team-page url without login successfully redirects to the login page
3. A missing member photo does result in a broken image, however the page structure remains as expected. Since a placeholder image is never specified and the page doesn't change otherwise this isn't a critical issue.
4. Page handles a long blurb appropriately, wraps the text and maintains the expected page structure.

## Reproduction steps

3. Removing/entering an invalid image src from the associated HTML tag allows you to preview how the page reacts with a missing image.

## Fixes necessary

3. Consider introducing placeholder images.

No other bugs to fix identified