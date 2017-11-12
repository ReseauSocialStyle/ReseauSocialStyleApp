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