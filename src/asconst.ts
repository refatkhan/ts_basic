// as const assertion 
// enum UserRoles  {
// Admin = "Admin",
// Editor = "Editor",
// Viewer = "Viewer"
// }

// as const object ta re const er moto behave korbe , mean read only , 
const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer"
} as const;
//keyoff typeoff use korte hobe
const canEdit = (role: keyof typeof UserRoles) => {
    if (role == UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else return false;
}