Feature: Add clothe to wardrobe
    In order to complete my personnal wardrobe
    As an authenticated user
    I want to add a clothe to my wardrobe

Scenario: Add a new clothe to my wardrobe
        When I'm on my wardrobe page
        And I click on the add option
        And I fill the pop up form to add my clothe
        And I validate the form with good inputs
        Then a new clothe is created and added to my wardrobe
    
    

    