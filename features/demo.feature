# Feature: The Internet Guinea Pig Website

#   Scenario Outline: As a user, I can log into the secure area

#     Given I am on the login page
#     When I login with <username> and <password>
#     Then I should see a flash message saying <message>

#     Examples:
#       | username | password             | message                        |
#       | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#       | foobar   | barfoo               | Your username is invalid!      |

Feature: RAIN page demo

  Scenario Outline: As a user, I can return to main page with bottom logo

    Given I am on the main page
    Then I should see the hero message saying <MainHero>
    When I click the nav bar page Blog
    Then I should see the blog hero message saying <BlogHero>
    When I click the footer logo
    Then I should see the hero message saying <MainHero>

    Examples:
      | MainHero            | BlogHero    |
      | Earned Wage Access. | Rain's Blog |