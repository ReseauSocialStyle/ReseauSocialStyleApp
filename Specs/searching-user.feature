Feature: Searching user

    In order to find a user
    As an authenticated user
    I want to make a research

    Scenario: Users suggestions
        Given I am on the searching user page
        When I type some text in the "search bar"
        Then a "list" of suggestions appears

    Scenario: Click on suggested user
        Given I am on the searching page
        And I typed some text in the "search bar"
        And there is a "list" of suggested users
        When I click on a "suggested user"
        Then I am redirected to the "user profile" page