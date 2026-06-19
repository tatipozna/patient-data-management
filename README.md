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
* Form validation
* Toast notifications for successful operations
* Responsive design for desktop and mobile devices

## Technologies

* React
* TypeScript
* Vite
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
* Patient creation and edition are managed locally since the provided API does not persist changes.

## Installation and Setup
1. Clone the repository 
```bash
git clone (https://github.com/tatipozna/patient-data-management.git)

2. Open the project:
```bash
cd patient-data-management

### Install dependencies:
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
