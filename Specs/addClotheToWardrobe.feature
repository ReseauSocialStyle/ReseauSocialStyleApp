Feature: Add clothe to wardrobe
    In order to complete my personnal wardrobe
    As a normal user
    I want to add a clothe to my wardrobe

    Scenario: Add a random or a wished clothe to my wardrobe
        Given I already created my user account
        When I purchased a clothe
        And I want to add it to my wardrobe
        Then I can search it on the website. When I find the good reference,
            an option must allow me to add it to my wardrobe
        And the clothe must then be tagged as owned
    

    