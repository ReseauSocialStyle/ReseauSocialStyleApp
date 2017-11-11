Feature: Searching user

    In order to find a user
    As an authenticated user
    I want to make a research

    Scenario: Users suggestions from any page
        Given I am connected on "any page" of the app
        When I type some text in the "search bar"
        Then a "list" of suggestions appears

    Scenario: Redirection to the user profile page from the list of suggestions that appeared under the search bar
        Given I wrote "some text" in the searching bar
        And a "list of suggested users" appeared right below the search bar
        When I click on a "suggested user"
        Then I am redirected to the "user profile" page

    Scenario: Users suggestions from the searching user page by text
        Given I am on the "searching user page"
        When I type some text in the "search user field"
        Then a "list" of suggested users appears in the "result section" of the page

    Scenario: Users suggestions from the searching user page by criteria
        Given I am on the "searching user page"
        When I select some "criteria"
        Then a "list" of suggested users appears in the "result section" corresponding to the selected criteria