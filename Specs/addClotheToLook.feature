Feature: Add a clothe to a look
    In order to complete a look already created and have a meaning set of clothes
    As a authenticated user
    I want to add a clothe to a look I already created

Scenario: Add an owned clothe from wardrobe page
    Given I already created a look
    And I am on my wardrobe page
    When I select the clothe I want to add
    And I select one or several looks I want to add my clothe to
    And I valid my action
    Then the clothe(s) will be added to my look
    And the clothes will have a tag with the name of the look they've been added to 

Scenario: Add an owned clothe from the look page
    Given I already created the given look
    And I am on this look management page
    When I select the option to add clothes
    And the list of my owned clothes are displayed
    And I select the concerning clothes
    And I valid my action
    Then the clothe(s) will be added to my look
    And the clothes will have a tag with the name of the look they've been added to


/*Is the wishlist a functionnality we'll add to user's profile ?*/
(Scenario: Add a wished clothe
    Given I already created one or several looks
    When as I visit the website, I see a clothe I wish I had 
    Then I can click a button and select several looks I created I want to add the clothe to.
    And the wished clothe gets a tag showing wich looks it's related to. )





    