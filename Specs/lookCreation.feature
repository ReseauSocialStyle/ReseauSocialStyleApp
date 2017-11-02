Feature: Look Creation
    In order to manage a set of clothe
    As a normal user
    I want create a look with and a short desription

    Scenario: Look creation from user's wardrobe management page
        Given the user just wants to create a new look
        When he already is on his wardrobe management page
        Then he can create a new set of clothe (also called look) by setting it a title
        and a short description. The title of the look doesn't have to be unique
        And the look will be automatically added to user's wardrobe

    Scenario: Look creation by selecting a clothe
        Given the target clothe is on screen
        And the look hasn't been created yet
        When I see a clothe, owend or simply wished, I want to add
        to a look
        Then I can click an option that allows me to create directly a look with the same information
            than on the basic look creation form : name + short description. The title doesn't have to be unique.
        And the look will be automatically created and added to my wardrobe
        And the selected clothe will be automatically added to this new look, with a tag indicating the relation.
        

        
    
    
    
    
    