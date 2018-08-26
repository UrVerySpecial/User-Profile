# user-profile
- Simple User Edit Page using vuejs
## Demo
- https://simple-user-profile.firebaseapp.com
## Project setup
### Requirement
- install vue-cli (vue-cli-service requires Node >=8)
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

## Requirement
### Page specs
- Account page with these fields
  - Profile picture
  - Full name
  - Email
  - Change Password Button
  - Edit Button
### Buttons
- When `Edit` button is clicked
  - name and email fields will be changed to input fields.
  - Editing full name should display a first and last name field.
  - all fields have validation.
- When `Change Password` is clicked
  - change route to change password page
  - password input field will be displayed.
  - Password form should have an option to unmask (no confirm password field)
and should display a strength meter.
### ETC
- Font-awesome for icons
- Open Sans (Google font) should
- Source should be documented and versioned.
- Picture should be fetched from Gravatar using user the email, and should use a default image
## Additional Specs
- I think It's better that creating list page. Because
  - It's more natural.
  - Only a few time will be taken to make that.

## Pages
1. Profiel List
2. Profile Details
3. Edit Profile
4. Change Password

## Design
- https://ninjamock.com/s/ZNKSZTx
