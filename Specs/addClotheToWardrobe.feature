Feature: Add clothe to wardrobe
    In order to complete my personnal wardrobe
    As an authenticated user
    I want to add a clothe to my wardrobe

    Scenario: Add a clothe to my wardrobe
        Given I already created my user account
        And I'm connected
        When I'm on a clothe thumbnail
        And I click on the add option
        Then the clothe is added to my personnal wardrobe
        And the clothe is tagged as owned