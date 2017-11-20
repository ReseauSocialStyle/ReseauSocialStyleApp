Feature: Searching user

    In order to find a user
    As an authenticated user
    I want to make a research

    Scenario: Users suggestions from any page
        Given I am viewing "any page" of the app
        When I type some text in the "search bar"
        Then a "list" of results appears

    Scenario: Redirection to the user profile page from the results that appeared under the search bar
        Given I an viewing "any page" of the app
        And a "list of resulted users" appeared right below the search bar
        When I click on a "resulted user"
        Then I am redirected to the "user profile" page

    Scenario: Research from the advanced searching user page
        Given I am on the "advanced searching user page"
        When I type some text in the "search user field"
        And I select (or not) some "criteria"
        Then a "list of resulted users" appears in the "results section" of the page

    Scenario: Redirection to the user profile page from the results that appeared in the results section of the advanced searching page
        Given I am on the "advanced searching user page"
        And a "list of resulted users" appeared in the "results section" of the page
        When I click on a "resulted user"
        Then I am redirected to the "user profile" page