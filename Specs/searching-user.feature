Feature: Searching user

    In order to find other user(s),
    as an authenticated user,
    I want to make a research

    Scenario: Users suggestions from any page
        Given I am already logged in to the application
        When  I type name of a user that I search for, in the "search bar"
        And   I click on the search button/press Enter
        Then  A list of suggested users/none (if there is none with such a name) appears in the "result section" of the page

    Scenario: Users suggestions from "advanced user search" page
        Given I am already logged in to the application 
        And   I go to the "advanced user search" page
        When  I fill out some (optional)/all (obligatory) criteria of a user 
        And   I click on the search button
        Then  A list of suggested users/none appears in the "result section" of the page, corresponding to the selected criteria

    Scenario: Redirection to the "user profile" page 
        Given I have already searched for a user
        And   I have a list of suggested users (as hyper links) appeared on the "result section" of the page
        When  I click on one of the suggested users
        Then  I am redirected to the "user profile" page


