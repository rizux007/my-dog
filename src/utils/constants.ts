import { GridColDef } from "@mui/x-data-grid";
import doctor from "../assets/doctor.jpg";
import girl from "../assets/girl.jpg";
import manGreen from "../assets/manGreen.jpg";
interface Link {
  id: number;
  text: string;
  url: string;
}

interface Rows {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
}
interface Reviews {
  id: number;
  image: string;
  name: string;
  mention: string;
}

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    // valueGetter: (row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

export const rows: Rows[] = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 25 },
  { id: 6, lastName: "Melisandre", firstName: "Maelys", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "About", url: "/about" },
  { id: 3, text: "Products", url: "/products" },
  { id: 4, text: "Contacts", url: "/contacts" },
  { id: 5, text: "Profile", url: "/profile" },
];

export const appLogo: string = "My Dog";
