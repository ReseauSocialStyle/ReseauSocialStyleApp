Feature

    In order to classify/rank the clothes,
    as a user I want to like or rate a clothe.

    Scenario: Like a clothe/look
        Given I am logged in to the application
        And   I have already some users that I added/followed
        And   I can view the clothes/looks in their wardrobe
        When  I view a clothe/look
        And   I click on the like option of a clothe/look
        Then  The clothe/look appears as liked 

    Scenario: Rate a clothe/look
        Given I am logged in to the application
        And   I have already some users that I added/followed
        And   I can view the clothes/looks in their wardrobe
        When  I view a clothe/look
        And   I click on the rate option of a clothe/look 
        And   I choose a ranking (ex. 1 to 10)
        Then  The clothe/look appears as rated (ex. with average of all the given rates)