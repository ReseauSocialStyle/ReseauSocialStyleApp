Feature: Add a clothe to a look
    In order to complete a look already created and have a meaning set of clothes
    As a normal user
    I want to add a cloth to a look I already created

Scenario: Add an owned clothe from wardrobe page
    Given I already created a look. It may be empty or not.
    When I want to add a clothe I already own in my wardrobe to my look
    Then as I am on my wardrobe page, I can select one or several clothes and then add it(them)
    to a list of looks, or just one look.
    And the freshly added clothes get a tag indicating their relation with the looks
    they've been added to.

Scenario: Add an owned clothe from the look page
    Given I already created the given look
    And I am on this look management page
    When I want to complete my look with one ou several of my owned clothes
    Then I can access, from my look page, my wardrobe content and select one or several clothe(s) I want to add
    And the clothes will be added to it and tagged as it.


/*Is the wishlist a functionnality we'll add to user's profile ?*/
(Scenario: Add a wished clothe
    Given I already created one or several looks
    When as I visit the website, I see a clothe I wish I had 
    Then I can click a button and select several looks I created I want to add the clothe to.
    And the wished clothe gets a tag showing wich looks it's related to. )





    