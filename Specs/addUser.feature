Feature: Add user

   In order to expand my social network
   As a user
   I want add a user

   Scenario: Search for user
   Given I have a user's name
   And I have a search bar in my home page
   When I write the name in the search bar
   And press enter
   Then I get a list of result  relevant to my search criteria (cloths, brands, pages) and users.

   Scenario: Advenced search
   Given I have a list of criteria (age, size, favorite brands ...)
   And an advenced search page
   When I'm in this page 
   And fill all given criteria
   Then I get a list of user with the same criteria

   Scenario: Display one search result
   Given I'm in the search result page
   When I click on one given result
   Then I get the home page of the user 

   Scenario: Add user
   Given I'm on the user home page
   And I have a button 'add'
   When I click on this button
   Then the user get a connection invite in his mail box

   Scenario: Follow user
   Given I'm on the user home page
   And I have a button 'Follow'
   When I click on this button
   Then evry time the user share something I get a notification in my timeline 