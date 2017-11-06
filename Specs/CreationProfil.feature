Feature: CreateProfil
    In Order to have have a member acces in the App
    I have to create an account

Scenario: Choose Between Sign In or Sign UP
    Given I am on the start Page
    And I Click on Sign Up Button
    Then I am redirected to Sign Up Page

Scenario: Create Profile
    Given I am on the Sign Up Page
    And i completed user's information
    And my informations are validated
    When I Confirm my subscription
    Then the account is created
    And a mail is sent to user


Scenario: Account Creation Failed
    Given I am on the Sign Up Page
    And and my informations are verified
    And there is an invalid field
    Then An error is raised up
  

Scenario: Validate Profile
    Given I have received validation mail
    When i click on Validaion Link
    Then the account is activated
    And the user can login





    
