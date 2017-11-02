Feature: User Connexion

    In order to use the app
    As an authenticated user
    I want to connect to the app

    Scenario: Enable connexion button
        Given I am on the "login page"
        When I fill "userAccount" field
        And I fill "password" field
        Then the "connexion button" is enbaled

    Scenario: Connexion succeed
        Given I am on the "login page"
        And "connexion button" is enbaled
        When I click on the "connexion button"
        And "userAccount + password" is correct
        Then I am connected
        And I am redirected to the main page

    Scenario: Connexion failed
        Given I am on the "login page"
        And "connexion button" is enbaled
        When I click on the "connexion button"
        And "userAccount + password" is incorrect
        Then I am not connected
        And I can see "error" message