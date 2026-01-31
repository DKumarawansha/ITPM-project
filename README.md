# ITPM Assignment 1 - Singlish to Sinhala Translation System Testing

## Project Overview
This project contains automated test cases for testing the Singlish to Sinhala translation system available at [SwiftTranslator](https://www.swifttranslator.com/). The tests are automated using Playwright and cover various functional and UI scenarios.

## Student Information
- **Assignment**: IT3040 - ITPM Assignment 1
- **Registration Number**: IT23606142
- **Academic Year**: Year 3, Semester 1

## Test Coverage
The automated test suite includes:
- **24+ Positive Functional Test Cases** - Scenarios where the system correctly converts Singlish to Sinhala
- **10+ Negative Functional Test Cases** - Scenarios where the system fails or behaves incorrectly
- **1 UI Test Case** - Testing user interface behavior

### Test Scenarios Cover:
1. **Sentence Structures**
   - Simple, compound, and complex sentences
   - Interrogative (questions) and imperative (commands)
   - Positive and negative forms

2. **Daily Language Usage**
   - Common greetings, requests, and responses
   - Polite vs informal phrasing
   - Frequently used expressions

3. **Word Combinations**
   - Multi-word expressions
   - Joined vs segmented word variations
   - Repeated word expressions for emphasis

4. **Grammatical Forms**
   - Tense variations (past, present, future)
   - Negation patterns
   - Singular/plural usage and pronoun variations
   - Different levels of politeness in requests

5. **Input Length Variations**
   - Short inputs (≤ 30 characters)
   - Medium inputs (31-299 characters)
   - Long inputs (≥ 300 characters)

6. **Mixed Language Content**
   - English technical/brand terms embedded in Singlish
   - Places and common English words
   - English abbreviations and short forms

7. **Formatting**
   - Punctuation marks
   - Currency, time formats, dates, and units
   - Multiple spaces, line breaks, and paragraphs

8. **Informal Language**
   - Slang and colloquial phrasing

## Prerequisites
Before running the tests, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (Node Package Manager)

You can download Node.js from [nodejs.org](https://nodejs.org/)

## Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/DKumarawansha/ITPM-project.git
cd ITPM-project
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- Playwright
- All required browsers (Chromium, Firefox, WebKit)
- Other project dependencies

### Step 3: Install Playwright Browsers (if not automatically installed)
```bash
npx playwright install
```

## Project Structure
```
ITPM-project/
├── tests/
│   ├── positive-functional.spec.js    # Positive functional test cases
│   ├── negative-functional.spec.js    # Negative functional test cases
│   └── ui-tests.spec.js               # UI-related test cases
├── test-results/                      # Test execution results
├── playwright-report/                 # HTML test reports
├── playwright.config.js               # Playwright configuration
├── package.json                       # Project dependencies
└── README.md                          # This file
```

## Running the Tests

### Run All Tests
```bash
npx playwright test
```

### Run Tests in UI Mode (Interactive)
```bash
npx playwright test --ui
```

### Run Specific Test File
```bash
npx playwright test tests/positive-functional.spec.js
```

### Run Tests with Visible Browser
```bash
npx playwright test --headed
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run Tests on Specific Browser
```bash
# Run on Chromium only
npx playwright test --project=chromium

# Run on Firefox only
npx playwright test --project=firefox

# Run on WebKit only
npx playwright test --project=webkit
```

## Viewing Test Results

### View HTML Report
After running tests, generate and view the HTML report:
```bash
npx playwright show-report
```

### View Test Results in Terminal
Test results are automatically displayed in the terminal after execution, showing:
- Number of tests passed
- Number of tests failed
- Execution time
- Detailed error messages for failed tests

## Test Case Documentation
All test cases are documented in the Excel file included in this submission:
- Test case ID
- Test case name
- Input type and length
- Expected output
- Actual output
- Pass/Fail status
- Accuracy justification
- Coverage details

## Test Execution Results
The test execution results follow this format:
- ✅ **PASS**: System correctly converts Singlish to Sinhala
- ❌ **FAIL**: System fails to convert or produces incorrect output

## Configuration
The Playwright configuration (`playwright.config.js`) includes:
- Test timeout settings
- Browser configurations (Chromium, Firefox, WebKit)
- Screenshot on failure
- Video recording options
- Reporter settings (HTML, list)

## Troubleshooting

### Issue: Tests fail to start
**Solution**: Ensure all dependencies are installed
```bash
npm install
npx playwright install
```

### Issue: Browser not found
**Solution**: Install Playwright browsers
```bash
npx playwright install chromium
```

### Issue: Timeout errors
**Solution**: Increase timeout in `playwright.config.js` or check internet connection

### Issue: Tests failing unexpectedly
**Solution**: 
- Clear test results: `rm -rf test-results/`
- Update Playwright: `npm install @playwright/test@latest`
- Check if the website is accessible

## Notes
- The application is designed for standard Singlish-to-Sinhala transliteration
- Chat-style shorthand (e.g., "Thx", "u", "gr8") is not expected to convert correctly
- Refer to the application's Help page for correct Singlish character combinations
- Tests are executed without backend API, performance, or security testing

## Repository Access
This repository is publicly accessible at:
**GitHub URL**: https://github.com/DKumarawansha/ITPM-project.git

## Contact
For any questions or issues regarding this project, please contact through the assignment submission platform.

---

**Last Updated**: January 2026  
**Assignment**: IT3040 - ITPM Assignment 1  
**Framework**: Playwright Test Automation  
**Testing Type**: Functional & UI Testing