Feature

    In order to communicate with the other users,
    as a user I want to write a comment on a clothe/look.

    Scenario: Write a comment on a clothe/look
        Given I am logged in to the application
        And   I have already some users that I added/followed
        And   I can view the clothes/looks in their wardrobe
        When  I view a clothe/look
        And   I click on the comment section(ex. button/text area) of a clothe/look
        And   I write my comment
        And   I click on enter/publish button
        Then  The comment appears on the clothe/look