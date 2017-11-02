Feature: Connections suggestions I

   In order to expand my social network
   As a user
   I want see a list of connections suggestion

   Scenario: Common connections case 1
   Given I have three connections
   And another user 'User1' have the same connections as me
   When I'm on my home page
   Then I see the User1 in my connections suggestion list

   Scenario: Common connections case 2
   Given I have three connections
   And me and another user 'User2', we have one or more common connection(s)
   When I'm on my home page
   Then I see the User2 in my connections suggestion list


   Scenario: Order my connections list
   Given I have three connection suggestions ('User1', 'User2', 'User3')
   And me and User1 we have the same connections list
   And me and User2 we have two common connections
   And me and User3 we have one common connections
   When I'm on my home page, section connections suggestion
   Then I see the list of suggestion connection in this order User1, User2 and User3