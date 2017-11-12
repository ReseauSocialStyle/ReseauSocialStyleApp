Feature

    In order to change/improve my wardrobe,
    as a user I want to delete a clothe from my wardrobe

    Scenario: Delete a selected clothe
        Given   I am logged in to the application
        And     I have already added some clothes to my wardrobe
        When    I select one of clothes in my wardrobe
        And     I click on the delete option
        Then    The clothe get removed from my wardrobe