Feature: Look Creation
    In order to manage a look
    As an authenticated user
    I want create a look with and a short desription

    Scenario: Look creation from user's looks management page
        Given I am on my wardrobe management page
        When I click on look creation button
        And I fill the fields of the pop up form with a title and a short description
        And I valid my form
        Then the new look is created
        And is added to my looks list

    Scenario: Look creation by selecting one or several clothes
        Given the target clothe(s) is on screen
        And the look hasn't been created yet
        When select the clothe(s)
        And select the "Add to look" option
        And I click on "Create a new look" option
        And the look creation form pops up
        And I fill the fields of the pop up form with a title and a short description
        And I valid my form
        Then the new look is created
        And is added to my looks list
        And the selected clothes are added to it
        And they're tagged with the name of the new look
        

        
    
    
    
    
    