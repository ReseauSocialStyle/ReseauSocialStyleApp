Feature: Commenting an item of clothing or a look

    In order to communicate with the other users
    As an authenticated user
    I want to write a comment on an item of clothing or a look

    Scenario: Write a comment
        Given I am viewing the section of an item of clothing or a look
        When I click on "Comment"
        Then the "Write a comment" section appears

    Scenario: Send a comment
        Given I typed "some text" in the "Write a comment" section
        When I click on the "Send this comment" button
        Then the comment is "sent" to the server
        And the comment is "displayed" in the "comment section"