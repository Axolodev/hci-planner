# HCI Planner - README
## Introduction
The HCI Planner is a tool designed to help students plan their Human-Computer Interaction (HCI) coursework. It provides a structured way to track progress through various sections and modules required to complete the HCI program.

## Installation
To install and run the HCI Planner locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/hci-planner.git
    ```
2. Navigate to the project directory:
    ```sh
    cd hci-planner
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run dev
    ```

## Usage
Once the development server is running, you can access the HCI Planner in your web browser at `http://localhost:3000`.

## Data Structure
- The HCI plan has a series of Sections. 
- Each Section has a series of Options (SectionOption in the code) that you can complete to finish the Section. 
- Each SectionOption has a series of Modules that you can complete to finish the SectionOption. 
- If you complete all the Sections, you will have completed the HCI plan.

### Example Data Structure
```typescript
type Module = {
  name: string;
};

type Options = {
  modules: Module[];
};

type Section = {
  title: string;
  description: string;
  options?: Options | Options[];
};

type Modules = {
  title: string;
  sections: Section[];
};
```