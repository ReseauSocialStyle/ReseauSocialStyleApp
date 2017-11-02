Feature: Deleting a clothe from a look
    In order to manage a look I created
    As a normal user
    I want to delete a clothe I added to one of my looks

    Scenario: Deleting a clothe from my look management page
        Given the look is created
        And contains clothes, owned or not
        When I want to remove a clothe from my look on its management page
        Then I can select one or several clothes to remove, and then simple delete them
        And the relation-tag between the clothes and the look will me removed.

    Scenario: Deleteing a clothe from a look on clothe thumbnail 
        Given the clothe is already added to a look
        And then the tag explaining the relation between the look and the clothe is displayed
        When I want to delete it directly from my look without going on the look management page
        Then there's a button that allows me to delete the clothe from the specific look only 
    
        
    
    