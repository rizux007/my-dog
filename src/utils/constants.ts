// import { GridColDef } from "@mui/x-data-grid";
// import doctor from "../assets/doctor.jpg";
// import girl from "../assets/girl.jpg";
// import manGreen from "../assets/manGreen.jpg";
// interface Link {
//   id: number;
//   text: string;
//   url: string;
// }

// export interface Rows {
//   id: number;
//   lastName: string;
//   firstName: string;
//   age: number;
//   role: "utilisateur" | "vendeur";
//   dogType?: string;
//   email?: string;
//   contact?: string;
// }

// interface Reviews {
//   id: number;
//   image: string;
//   name: string;
//   mention: string;
// }

// export const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     // valueGetter: (row) => `${row.firstName || ""} ${row.lastName || ""}`,
//   },
// ];
// export interface Rows {
//   id: number;
//   lastName: string;
//   firstName: string;
//   age: number;
//   role: "utilisateur" | "vendeur";
//   dogType?: string;
//   price?: number;
//   email?: string;
//   contact?: string;
// }

// export const rows: Rows[] = [
//   {
//     id: 1,
//     lastName: "Snow",
//     firstName: "Jon",
//     age: 35,
//     role: "utilisateur",
//     email: "jon@example.com",
//     contact: "123-456-7890",
//   },
//   {
//     id: 2,
//     lastName: "Lannister",
//     firstName: "Cersei",
//     age: 42,
//     role: "utilisateur",
//     email: "cersei@example.com",
//     contact: "987-654-3210",
//   },
//   {
//     id: 3,
//     lastName: "Lannister",
//     firstName: "Jaime",
//     age: 45,
//     role: "utilisateur",
//     email: "jaime@example.com",
//     contact: "456-789-0123",
//   },
//   {
//     id: 4,
//     lastName: "Stark",
//     firstName: "Arya",
//     age: 16,
//     role: "utilisateur",
//     email: "arya@example.com",
//     contact: "321-654-9870",
//   },
//   {
//     id: 5,
//     lastName: "Targaryen",
//     firstName: "Daenerys",
//     age: 25,
//     role: "vendeur",
//     dogType: "Husky",
//     price: 500,
//     email: "daenerys@example.com",
//     contact: "123-456-7890",
//   },
//   {
//     id: 6,
//     lastName: "Melisandre",
//     firstName: "Maelys",
//     age: 150,
//     role: "vendeur",
//     dogType: "Labrador",
//     price: 600,
//     email: "maelys@example.com",
//     contact: "987-654-3210",
//   },
//   {
//     id: 7,
//     lastName: "Clifford",
//     firstName: "Ferrara",
//     age: 44,
//     role: "vendeur",
//     dogType: "Golden Retriever",
//     price: 550,
//     email: "ferrara@example.com",
//     contact: "456-789-0123",
//   },
//   {
//     id: 8,
//     lastName: "Frances",
//     firstName: "Rossini",
//     age: 36,
//     role: "utilisateur",
//     email: "rossini@example.com",
//     contact: "789-012-3456",
//   },
//   {
//     id: 9,
//     lastName: "Roxie",
//     firstName: "Harvey",
//     age: 65,
//     role: "utilisateur",
//     email: "harvey@example.com",
//     contact: "654-321-0987",
//   },
// ];

// export const reviews: Reviews[] = [
//   {
//     id: 1,
//     name: "Bob",
//     image: manGreen,
//     mention:
//       "Plateforme exceptionnelle ! J'ai trouvé le chiot parfait pour ma famille. Le processus d'achat a été fluide et transparent, et l'équipe de My Dog a été très réactive à toutes mes questions. Je recommande vivement leurs services à tous les amoureux des chiens.",
//   },
//   {
//     id: 2,
//     name: "Alice",
//     image: girl,
//     mention:
//       "Les services de reproduction sont de premier ordre. J'ai utilisé leurs services pour croiser mon chien et je suis extrêmement satisfait des résultats. Les chiots sont en excellente santé et l'équipe a pris grand soin de s'assurer que tout se passe bien. Très recommandé !",
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     image: doctor,
//     mention:
//       "Support client fantastique et chiots en pleine santé. L'équipe de My Dog est très professionnelle et a été d'une grande aide tout au long du processus. Ils m'ont aidé à choisir le bon chiot et ont fourni toutes les informations nécessaires pour bien commencer.",
//   },
// ];

// export const navItems: Link[] = [
//   { id: 1, text: "Home", url: "/" },
//   { id: 2, text: "About", url: "/about" },
//   { id: 3, text: "Products", url: "/products" },
//   { id: 4, text: "Contacts", url: "/contacts" },
//   // { id: 5, text: "Profile", url: "/profile" },
// ];

// export const dogApi: string = "https://api.thedogapi.com/v1/breeds";
// export const singleDogApi: string =
//   "https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg";
// export const appLogo: string = "My Dog";

import { GridColDef } from "@mui/x-data-grid";
import doctor from "../assets/doctor.jpg";
import girl from "../assets/girl.jpg";
import manGreen from "../assets/manGreen.jpg";

export interface Person {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
  role: "utilisateur" | "vendeur";
  dogType?: string;
  price?: number;
  email?: string;
  contact?: string;
}

interface Reviews {
  id: number;
  image: string;
  name: string;
  mention: string;
}
export interface Link {
  id: number;
  text: string;
  url: string;
}
export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Prénom", width: 130 },
  { field: "lastName", headerName: "Nom", width: 130 },
  { field: "age", headerName: "Âge", type: "number", width: 90 },
  { field: "role", headerName: "Rôle", width: 130 },
  { field: "dogType", headerName: "Type de chien", width: 150 },
  { field: "price", headerName: "Prix", type: "number", width: 120 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "contact", headerName: "Contact", width: 150 },
];

export const rows: Person[] = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    role: "utilisateur",
    email: "jon@example.com",
    contact: "123-456-7890",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    role: "utilisateur",
    email: "cersei@example.com",
    contact: "987-654-3210",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    role: "utilisateur",
    email: "jaime@example.com",
    contact: "456-789-0123",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    role: "utilisateur",
    email: "arya@example.com",
    contact: "321-654-9870",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 25,
    role: "vendeur",
    dogType: "Husky",
    price: 500,
    email: "daenerys@example.com",
    contact: "123-456-7890",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Maelys",
    age: 150,
    role: "vendeur",
    dogType: "Labrador",
    price: 600,
    email: "maelys@example.com",
    contact: "987-654-3210",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    role: "vendeur",
    dogType: "Golden Retriever",
    price: 550,
    email: "ferrara@example.com",
    contact: "456-789-0123",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    role: "utilisateur",
    email: "rossini@example.com",
    contact: "789-012-3456",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    role: "utilisateur",
    email: "harvey@example.com",
    contact: "654-321-0987",
  },
];

export const reviews: Reviews[] = [
  {
    id: 1,
    name: "Bob",
    image: manGreen,
    mention:
      "Plateforme exceptionnelle ! J'ai trouvé le chiot parfait pour ma famille. Le processus d'achat a été fluide et transparent, et l'équipe de My Dog a été très réactive à toutes mes questions. Je recommande vivement leurs services à tous les amoureux des chiens.",
  },
  {
    id: 2,
    name: "Alice",
    image: girl,
    mention:
      "Les services de reproduction sont de premier ordre. J'ai utilisé leurs services pour croiser mon chien et je suis extrêmement satisfait des résultats. Les chiots sont en excellente santé et l'équipe a pris grand soin de s'assurer que tout se passe bien. Très recommandé !",
  },
  {
    id: 3,
    name: "Charlie",
    image: doctor,
    mention:
      "Support client fantastique et chiots en pleine santé. L'équipe de My Dog est très professionnelle et a été d'une grande aide tout au long du processus. Ils m'ont aidé à choisir le bon chiot et ont fourni toutes les informations nécessaires pour bien commencer.",
  },
];

export const navItems: Link[] = [
  { id: 1, text: "Accueil", url: "/my-dog" },
  { id: 2, text: "À propos", url: "/about" },
  { id: 3, text: "Produits", url: "/products" },
  { id: 4, text: "Contact", url: "/contacts" },
];

export const dogApi: string = "https://api.thedogapi.com/v1/breeds";
export const singleDogApi: string =
  "https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg";
export const appLogo: string = "My Dog";
