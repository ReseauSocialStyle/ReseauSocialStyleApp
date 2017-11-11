Feature: Create wishlist

    In order to remember the clothes I'd like to buy and/or share them with my friends
    As an authenticated user
    I create a wishlist

    Scenario: Creating a wishlist
        Given I am on "my profile page"
        And I clicked on "create a wishlist"
        And a "popin" appeared with a "title field" and some "preferences" like "share with friends or not"
        When I "fill" the different fields
        And I click on "Create this wishlist"
        Then the wishlist is created

    Scenario: Search clothes from the wishlist page
        Given I am on the wishlist page
        When I type some text in the "search bar"
        Then a "list of suggested clothes" appears

    Scenario: Add clothes from research in the wishlist page
        Given I made a "research" on the wishlist page
        And a "list of suggested clothes" appeared
        When I "click" on a suggested clothing
        Then this clothing "is added" to my wishlist

    Scenario: Add clothes from a look page, a wardrobe page or another wishlist page
        Given I am on a "look page", a "wardrobe page" or "another wishlist page"
        And I "selected" a clothing
        When I "click" on "add to wishlist" for the selected clothing
        And I "select a wishlist"
        Then the clothing is added to my selected wishlist