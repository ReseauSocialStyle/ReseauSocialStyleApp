Feature

    In order to change/improve my wardrobe,
    as a user I want to delete a clothe from my wardrobe

    Scenario: Delete a selected clothe
        Given   I am logged in to the application
        And     I have already added some clothes to my wardrobe
        When    I select one of clothes in my wardrobe
        And     I click on the delete option
        Then    The clothe get removed from my wardrobe



=======================================================

Review

Feature: Deleting an item from my wardrobe

    In order to change/improve my wardrobe
    As an authenticated user
    I want to delete an item of clothing from my wardrobe

    Scenario: Delete an item
        Given   I am on my "wardrobe page"
        And     I have already added some clothes to my wardrobe
        When    I "select an item" in my wardrobe
        And     I "click" on the "delete option"
        Then    The item "is removed" from my wardrobe