Feature: User Connection

    In order to use the app
    As an authenticated user
    I want to connect to the app

    Scenario: Enable connection button
        Given I am on the "login page"
        When I fill "userAccount" field
        And I fill "password" field
        Then the "connection button" is enbaled

    Scenario: connection succeed
        Given I am on the "login page"
        And "connection button" is enbaled
        When I click on the "connection button"
        And "userAccount + password" is correct
        Then I am connected
        And I am redirected to the main page

    Scenario: connection failed
        Given I am on the "login page"
        And "connection button" is enbaled
        When I click on the "connection button"
        And "userAccount + password" is incorrect
        Then I am not connected
        And I can see an "error" message