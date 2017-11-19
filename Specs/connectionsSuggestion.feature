Feature: Connections suggestions I

   In order to expand my social network
   As a user
   I want see a list of connections suggestion

   Scenario: Suggestion based on Common connections
   Given I have connections
   When I'm on my home page
   Then the system suggest to me users that have common connections with me

   Scenario: Suggestion based on Wearing style
   Given I have a wearing style (based on my wardrobe)
   When I'm on my home page
   Then the system suggest to me users that have similar wearing style as me

   Scenario: Order my connections list
   Given the system suggest to me a list of users
   And some of them are based on wearing style
   And some of them are based on common connections
   When I'm on my home page
   Then I see the list of suggestion connection ordered from the most to the less relevant (based on scores)