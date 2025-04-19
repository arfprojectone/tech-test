# Project Overview

This repo contains automated testing for UI Testing, API Testing and Performance Testing.
The Testing framework used for UI and API automation is Cypress, and K6 is used for performance testing.

## How to Run the Tests

### UI Automation Testing (Cypress)

#### Running via GUI
- npx cypress open (via GUI) 
- Perform End-to-End (E2E) Testing:
- Choose a browser
- Select Login.cy.js

#### Running via Headless
- npx cypress run (via Terminal)

### API Automation Testing (Cypress)

#### Running via Headless
- npx cypress run (via Terminal)

### Performance Testing (K6)

#### Running K6
- k6 run --vus 5 --duration 30s users_performance_test.js

### Dependencies & Setup Instructions

Make sure to install the following tools:
- Node.js & npm: Required for Cypress setup.
- Cypress: Test runner for UI and API automation.
- cypress-xpath: (Optional) For using XPath in Cypress selectors.
- K6: Performance testing tool.

Follow the steps above for each type of test to get everything running.

#### Pre Condition for UI Automation Testing (Cypress)
- npm init -y
- npm install cypress --save-dev
- npm install -D cypress-xpath

#### Pre Condition for API Automation Testing (Cypress)
- npm init -y
- npm install cypress --save-dev

#### Pre Condition for Performance Testing (K6)
- brew install k6

Make sure all dependencies are installed correctly by following the setup instructions for each testing type above.

### Any assumptions made during testing
- UI tests assume that the target application is available and accessible in a testable state.
- API tests assume endpoints are stable, reachable, and return expected results.
- Performance testing is assumed to be run in a stable network and server environment for consistent results.


### Links to Tasks (Test Cases, Bug Reports, SQL Queries)

- Link to Test Cases - https://docs.google.com/spreadsheets/d/16fugFLwBELn5S6bds7XM6QShG2pDu0Rx_3x-Cc5Ok8A/edit?gid=0#gid=0
- Link to Bug Reports - https://docs.google.com/spreadsheets/d/16fugFLwBELn5S6bds7XM6QShG2pDu0Rx_3x-Cc5Ok8A/edit?gid=1342344163#gid=1342344163
- Link to SQL Queries - https://docs.google.com/spreadsheets/d/16fugFLwBELn5S6bds7XM6QShG2pDu0Rx_3x-Cc5Ok8A/edit?gid=574403238#gid=574403238