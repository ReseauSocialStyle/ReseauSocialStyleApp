Feature: Deleting a clothe from a look
    In order to manage a look I created
    As an authenticated user
    I want to delete a clothe I added to one of my looks

    Scenario: Deleting a clothe from my look management page
        Given the look is created
        And contains clothes, owned or not
        And I'm on the look management page
        When I select one or several of the look's clothes
        And I select the "Delete" option
        Then a confirmation pop up is displayed
        And when I valid, it deletes the selected clothes from the look
        And it removes the look tag from them
    
        
    
    