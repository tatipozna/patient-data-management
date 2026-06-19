# Patient Data Management

## Overview

Patient Data Management is a React + TypeScript application that allows users to view, search, sort, create and edit patient records retrieved from a public API.

The application was built with a component-based architecture and custom reusable UI components without relying on UI frameworks.

## Features

* Display patient records in responsive cards
* Expand / collapse patient details
* Search patients by name
* Sort patients by creation date
* Add new patients
* Edit existing patients
* Delete patients
* Form validation
* Toast notifications
* Responsive design

## Technologies

* React
* TypeScript
* Vite
* ESLint
* CSS

## Project Structure

```text
src/
├── components/
│   ├── patient/
│   └── ui/
├── services/
├── styles/
├── types/
└── App.tsx
```

## Design Decisions

* Reusable components were created for buttons, modals, forms, dropdowns, search inputs and notifications.
* Styling was organized into separate CSS files by responsibility.
* Form validation is handled inside the PatientForm component.
* Patient creation and editing are managed locally since the provided API does not persist changes.
* Patient deletion includes a confirmation modal before removing records.

## Installation and Setup
1. Extract the project files.

2. Open a terminal in the project folder.

3. ### Install dependencies:
```bash
npm install
```
Run the application:
```bash
npm run dev
```
Build for production:

```bash
npm run build
```

## Notes

The API provides read-only data. Any created or edited patient records exist only during the current session and are not persisted after page refresh.
